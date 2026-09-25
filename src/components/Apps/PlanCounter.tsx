"use client";

import Link from "next/link";
import { useFitLog } from "@/context/FitLogContex";

const PlanCounter = () => {
    const { addPlan, savedPlans } = useFitLog();

    return (
        <div className="flex items-center gap-5">

            {/* Plan Count */}
            <Link href="/my-plan">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#9b9da2]">
                        Plan
                    </span>

                    <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ccff00] px-1 text-[9px] font-bold text-black">
                        {addPlan.length}
                    </span>
                </div>
            </Link>

            {/* Saved Count */}
            <Link href="/my-plan">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#9b9da2]">
                        Saved
                    </span>

                    <span className="flex h-4 min-w-4 items-center justify-center rounded-full border border-[#303238] px-1 text-[9px] text-[#9b9da2]">
                        {savedPlans.length}
                    </span>
                </div>
            </Link>

        </div>
    );
};

export default PlanCounter;