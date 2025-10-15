import Image from "next/image";
import { auth } from "../../../auth";

const ProfileInfo = async () => {
    const userAuth = await auth();
    let session = userAuth.user;
    return (
        <div className="flex flex-col items-center py-8 text-center">
            <div className="relative max-h-[180px] max-w-[180px] rounded-full lg:mb-8 h-[100px] w-[100px] bg-primary grid place-items-center text-4xl text-white ">
                {session.image ? (
                    <Image
                        src={session.image}
                        alt="user image"
                        className="rounded-full"
                        fill
                    />
                ) : (
                    session.name.charAt(0).toUpperCase()
                )}
            </div>

            <div>
                <h3 className="text-2xl font-semibold lg:text-[28px]">
                    {session.name}
                </h3>
                <p className="leading-[231%] lg:text-lg">{session.email}</p>
            </div>

            <div className="w-3/4 border-b border-[#a4a4a4] py-6 lg:py-4"></div>
        </div>
    );
};

export default ProfileInfo;
