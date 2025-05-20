"use client";
import { FaTrashCan, FaSquareCheck } from "react-icons/fa6";

import { format } from "date-fns";
import { useEffect, useState } from "react";

const Orders = () => {
  const [contentToDisplay, setContentToDisplay] = useState([]);
  const [orders, setOrders] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/messages");
      const data = await res.json();
      const holder = data.messages;
      console.log(holder.reverse());
      setOrders(holder.reverse());
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    fetchMessages();

    const interval = setInterval(() => {
      fetchMessages();
    }, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const handleEdit = async (id) => {
    try {
      const res = await fetch(`/api/messages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: true }),
      });

      if (!res.ok) throw new Error("Failed to update");

      const updatedOrders = orders.map((order) =>
        order.id === id ? { ...order, read: true } : order
      );

      setOrders(updatedOrders);
    } catch (err) {
      console.error(err);
      alert("Could not update message");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this message?")) return;

    try {
      const res = await fetch(`/api/messages/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete");

      alert("Message deleted!");
      fetchMessages();
    } catch (err) {
      console.error(err);
      alert("Could not delete message");
    }
  };

  const handleDate = (date) => {
    if (typeof date === "string") {
      return format(new Date(date), "dd MMMM yyyy  k:mm");
    }
  };
  return (
    <div className="flex flex-col gap-5">
      {orders &&
        orders.map((order, index) => (
          <div
            className="p-3 border-2 border-neutral-400 rounded-xl cursor-pointer"
            key={index}
            onClick={() =>
              setContentToDisplay((prev) =>
                prev.includes(index)
                  ? prev.filter((i) => i !== index)
                  : [...prev, index]
              )
            }
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-neutral-600 ">
                <h1 className={`text-xl font-semibold text-black`}>
                  {order.name}
                </h1>
                <span>.</span>
                <p>{order.city}</p>
                <span>.</span>
                <p>{handleDate(order.createdAt)}</p>
              </div>
              <div className="flex justify-between items-center gap-3">
                {!order.read ? (
                  <span className="bg-primary/30 text-primary text-lg font-medium py-2 px-4 rounded-full">
                    Nouveau
                  </span>
                ) : (
                  ""
                )}
                <div
                  className="h-10 w-10 rounded-lg flex items-center justify-center bg-primary/30 hover:bg-primary/40 text-primary cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleEdit(order.id);
                  }}
                >
                  <FaSquareCheck size={25} />
                </div>
                <div
                  className="h-10 w-10 rounded-lg flex items-center bg-secondary/30  hover:bg-secondary/40  justify-center"
                  onClick={(e) => {
                    {
                      e.preventDefault();
                      e.stopPropagation();
                      handleDelete(order.id);
                    }
                  }}
                >
                  <FaTrashCan size={25} className="text-secondary" />
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-500 overflow-hidden ${
                contentToDisplay.includes(index)
                  ? "max-h-96 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-3 text-lg mt-5">
                <p className="text-neutral-600">
                  <span className="text-black font-semibold">Nom : </span>{" "}
                  {order.name}
                </p>
                <p className="text-neutral-600">
                  <span className="text-black font-semibold">Ville : </span>{" "}
                  {order.city}
                </p>
                <p className="text-neutral-600">
                  <span className="text-black font-semibold">
                    Numéro de Téléphone :
                  </span>{" "}
                  {order.number}
                </p>
                <p className="text-neutral-600">
                  <span className="text-black font-semibold">Message :</span>{" "}
                  {order.message}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Orders;
