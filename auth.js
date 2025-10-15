import mongoClientPromise from "@/database/mongoClientPromise";
import { userModel } from "@/models/user-model";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcryptjs from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    adapter: MongoDBAdapter(mongoClientPromise, {
        databaseName: process.env.ENVIRONMENT,
    }),
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },

            async authorize(credentials) {
                if (credentials == null) return null;

                try {
                    const user = await userModel.findOne({
                        email: credentials.email,
                    });

                    if (user) {
                        const isMatch = user.email === credentials.email;
                        let isMatchedPass = await bcryptjs.compare(
                            credentials.password,
                            user.password
                        );
                        if (isMatch && isMatchedPass) {
                            return user;
                        } else {
                            throw new Error("Email or password mismatch");
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (error) {
                    throw new Error(error);
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
});
