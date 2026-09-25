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

    const handleAddPlan = () => {
        // Maximum 5 workouts
        if (addPlan.length >= 5) {
            toast.error("You can add maximum 5 workouts!");
            return;
        }

        // Check duplicate workout
        const alreadyAdded = addPlan.some(
            (plan) => plan.id === fitlog.id
        );

        if (alreadyAdded) {
            toast.warning("This workout is already in your plan!");
            return;
        }

        // Add workout
        setAddPlan((prev) => [...prev, fitlog]);

        toast.success(`${fitlog.name} added successfully!`);
    };

    return (
        <button
            onClick={handleAddPlan}
            className="bg-[#caff00] hover:bg-[#b9ed00] text-black px-5 py-3 rounded-lg text-xs font-bold transition"
        >
            Add to todays plan
        </button>
    );
};

export default AddPlanButton;