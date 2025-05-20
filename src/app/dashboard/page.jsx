import Orders from "@/components/dashboard/Orders";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  // const cookieStore = cookies();
  // const authCookie = cookieStore.get("auth");

  // if (!authCookie || authCookie.value !== "true") {
  //   redirect("/login");

  return (
    <div className="container mt-10">
      <div className="flex items-center justify-between mb-20">
        <span></span>
        <h1 className="text-5xl font-bold text-text">Orders</h1>
        <form action="/api/logout" method="POST">
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 cursor-pointer"
          >
            Logout
          </button>
        </form>
      </div>
      <Orders />
    </div>
  );
}
