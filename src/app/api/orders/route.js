import { authOptions, isAdmin } from "@/app/api/auth/[...nextauth]/route";
import { Order } from "@/models/Order";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function GET(req) {
  try {
    mongoose.connect(process.env.MONGO_URL);

    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;
    const admin = await isAdmin();

    const url = new URL(req.url);
    const _id = url.searchParams.get("_id");
    if (_id) {
      return Response.json(await Order.findById(_id));
    }

    if (admin) {
      return Response.json(await Order.find());
    }

    if (userEmail) {
      return Response.json(await Order.find({ userEmail }));
    }
  } catch (error) {
    console.error("Error in GET /api/orders:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
