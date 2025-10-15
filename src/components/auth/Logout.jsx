"use client";
import { signOut } from "next-auth/react";

export default function Logout() {
    return (
        <button
            className="text-red-700 ml-1"
            onClick={() =>
                signOut({
                    callbackUrl: "http://localhost:3000/login",
                })
            }
        >
            Logout
        </button>
    );
}
