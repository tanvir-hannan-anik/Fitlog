"use client";

import React from "react";
import { toast } from "react-toastify";

import { useFitLog } from "@/context/FitLogContex";
import { IFitlog } from "@/types/fitlogTypes";

interface AddPlanButtonProps {
    fitlog: IFitlog;
}

const AddPlanButton = ({ fitlog }: AddPlanButtonProps) => {
    const { addPlan, setAddPlan } = useFitLog();

    const isPlanFull = addPlan.length >= 5;

    const isAlreadyAdded = addPlan.some(
        (plan) => plan.id === fitlog.id
    );

    const handleAddPlan = () => {
        // Already added
        if (isAlreadyAdded) {
            toast.info(`${fitlog.name} is already in today's plan!`);
            return;
        }

        // Plan limit reached
        if (addPlan.length >= 5) {
            toast.warning("You can add a maximum of 5 lifts to today's plan!");
            return;
        }

        setAddPlan((prev) => [...prev, fitlog]);

        toast.success(`${fitlog.name} added to today's plan!`);
    };

    return (
        <button
            onClick={handleAddPlan}
            disabled={isPlanFull || isAlreadyAdded}
            className={`px-5 py-3 rounded-lg text-xs font-bold transition ${
                isPlanFull || isAlreadyAdded
                    ? "cursor-not-allowed bg-[#292d35] text-gray-500"
                    : "bg-[#caff00] text-black hover:bg-[#b9ed00]"
            }`}
        >
            {isAlreadyAdded
                ? "Already Added"
                : isPlanFull
                ? "Plan Full (5/5)"
                : "Add to today's plan"}
        </button>
    );
};

export default AddPlanButton;