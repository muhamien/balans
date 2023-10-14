import Navbar from "./Navbar";
import {useRouter} from "next/router";

export default function Layout({ children, ...props }) {
    const router = useRouter()
    return (
        <div className="bg-[#EAEFF5] min-h-screen pb-24">
            <Navbar />
            <div className="mx-auto w-full 2xl:w-[1500px]">
                {children}
            </div>
        </div>
    )
}