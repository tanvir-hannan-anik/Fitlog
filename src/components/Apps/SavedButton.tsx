"use client";

import React from "react";
import { Bookmark } from "lucide-react";
import { toast } from "react-toastify";

import { useFitLog } from "@/context/FitLogContex";
import { IFitlog } from "@/types/fitlogTypes";

interface SavedButtonProps {
    fitlog: IFitlog;
}

const SavedButton = ({ fitlog }: SavedButtonProps) => {
    const {
        savedPlans,
        setSavedPlans,
    } = useFitLog();

    const isSaved = savedPlans.some(
        (plan) => plan.id === fitlog.id
    );

    const handleSave = () => {
        // Already saved
        if (isSaved) {
            setSavedPlans((prev) =>
                prev.filter((plan) => plan.id !== fitlog.id)
            );

            toast.info(`${fitlog.name} removed from saved!`);

            return;
        }

        // Save workout
        setSavedPlans((prev) => [
            ...prev,
            fitlog,
        ]);

        toast.success(`${fitlog.name} saved successfully!`);
    };

    return (
        <button
            onClick={handleSave}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-medium transition ${
                isSaved
                    ? "bg-[#caff00] text-black border border-[#caff00]"
                    : "border border-[#343944] text-gray-300 hover:bg-[#1b1e25]"
            }`}
        >
            <Bookmark
                size={14}
                fill={isSaved ? "currentColor" : "none"}
            />

            {isSaved
                ? "Saved"
                : "Save for later"}
        </button>
    );
};

export default SavedButton;