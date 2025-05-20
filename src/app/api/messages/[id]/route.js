import { db } from "@/lib/firebaseAdmin";

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await db.collection("messages").doc(id).delete();
    return new Response("Message deleted", { status: 200 });
  } catch (error) {
    console.error("Delete error:", error);
    return new Response("Failed to delete", { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  const { id } = params;
  const body = await request.json();

  try {
    await db.collection("messages").doc(id).update(body);
    return new Response("Message updated", { status: 200 });
  } catch (error) {
    console.error("Update error:", error);
    return new Response("Failed to update", { status: 500 });
  }
}
