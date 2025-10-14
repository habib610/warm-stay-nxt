import { connectDB } from "@/service/mongo";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "WarmStay",
    description: "A place to have your refreshment",
};

export default async function RootLayout({ children }) {
    await connectDB();
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar isSidebar={false} />
                <main>{children}</main>
            </body>
        </html>
    );
}
