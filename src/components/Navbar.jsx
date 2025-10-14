import Image from "next/image";
import Link from "next/link";
import { auth } from "../../auth";
import Logout from "./auth/Logout";

const Navbar = async ({ isSidebar }) => {
    const session = await auth();
    return (
        <nav>
            <Link href="/">
                <Image
                    src="./warmstay.svg"
                    alt="Stay Swift Logo"
                    width={200}
                    height={200}
                />
            </Link>

            {isSidebar && (
                <ul>
                    <li>
                        <Link href="#">Recommended Places</Link>
                    </li>

                    <li>
                        <Link href="#">About Us</Link>
                    </li>

                    <li>
                        <Link href="#">Contact us</Link>
                    </li>

                    <li>
                        <Link href="/bookings">Bookings</Link>
                    </li>

                    <li>
                        {session?.user ? (
                            <div>
                                <span className="mx-1">
                                    {session.user.name}
                                </span>{" "}
                                |{" "}
                                <span>
                                    <Logout />
                                </span>
                            </div>
                        ) : (
                            <Link href="/login" className="login">
                                Login
                            </Link>
                        )}
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
