import { db } from "@/lib/firebaseAdmin";

export async function GET() {
  try {
    const snapshot = await db
      .collection("messages")
      .orderBy("createdAt", "desc")
      .get();

    const messages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return Response.json({ messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return new Response("Server Error", { status: 500 });
  }
}
