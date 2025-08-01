import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    const body = await req.json();
    mongoose.connect(process.env.MONGO_URL);
    const pass = body.password;
    if (!pass?.length || pass.length < 5) {
      new Error("password must be at least 5 characters");
    }

    const notHashedPassword = pass;
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(notHashedPassword, salt);

    const createdUser = await User.create(body);
    return Response.json(createdUser);
  } catch (error) {
    console.error("Error in POST /api/register:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
