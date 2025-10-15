import { userModel } from "@/models/user-model";
import { connectDB } from "@/service/mongo";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        let { name, email, password } = await request.json();
        let passwordHash = await bcrypt.hash(password, 5);
        let user = {
            name,
            email,
            password: passwordHash,
        };
        await connectDB();
        await userModel.create(user);
        return new NextResponse("User Has been created", {
            status: 201,
        });
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,
        });
    }
};
