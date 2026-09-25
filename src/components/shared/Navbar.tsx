import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import PlanCounter from "../Apps/PlanCounter";

interface NavbarProps {
    activePage?: "workouts" | "my-plan";
}

const Navbar = ({ activePage = "workouts" }: NavbarProps) => {
    return (
        <nav className="h-15 w-full border-b border-[#1b1d21] bg-[#0b0c0e]">
            <div className="flex h-full items-center justify-between px-7">

                <Link
                    href="/"
                    className="flex items-center gap-2"
                >
                    <Image
                        src={logo}
                        alt="FitLog"
                        width={28}
                        height={28}
                        className="object-contain"
                    />

                    <span className="text-[14px] font-extrabold tracking-tight text-white">
                        FITLOG
                    </span>
                </Link>


                 <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1">

                {/* Workouts */}
                <Link
                    href="/workouts"
                    className={`rounded-full px-3 py-1 text-[10px] font-medium transition ${
                        activePage === "my-plan"
                            ? "bg-[#ccff00] font-semibold text-black"
                            : "text-[#8b8e94] hover:text-white"
                    }`}
                >
                    Workouts
                </Link>

                {/* My Plan */}
                <Link
                    href="/my-plan"
                    className={`rounded-full px-3 py-1 text-[10px] font-medium transition ${
                        activePage === "my-plan"
                            ? "bg-[#ccff00] font-semibold text-black"
                            : "text-[#8b8e94] hover:text-white"
                    }`}
                >
                    My Plan
                </Link>

            </div>

                <div>
                    <PlanCounter></PlanCounter>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;