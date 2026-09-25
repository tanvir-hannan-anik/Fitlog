"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Check, Clock3, Flame, Star, X } from "lucide-react";
import { toast } from "react-toastify";

import { useFitLog } from "@/context/FitLogContex";

interface WorkoutCardProps {
    id: number;
    title: string;
    category: string;
    image: string;
    duration: string;
    calories: string;
    rating: string;
    completed?: boolean;
}

const MyPlanCard = ({
    id,
    title,
    category,
    image,
    duration,
    calories,
    rating,
    completed = false,
}: WorkoutCardProps) => {
    const { setAddPlan, setSavedPlans } = useFitLog();

    const [isCompleted, setIsCompleted] = useState(completed);

    // Mark as Done
    const handleMarkDone = () => {
        if (isCompleted) {
            return;
        }

        setIsCompleted(true);

        toast.success(`${title} completed successfully!`);
    };

    // Remove Workout
    const handleRemove = () => {
        setAddPlan((prev) =>
            prev.filter((plan) => plan.id !== id)
        );

        setSavedPlans((prev) =>
            prev.filter((plan) => plan.id !== id)
        );

        toast.info(`${title} removed from your plan!`);
    };

    return (
        <div className="w-full rounded-2xl border border-[#292c34] bg-[#15181e] p-3">
            <div className="flex items-center justify-between gap-4 rounded-xl bg-[#111419] px-3 py-3">

                {/* LEFT SIDE */}
                <div className="flex min-w-0 items-center gap-4">

                    {/* Image */}
                    <div className="relative h-[68px] w-[122px] shrink-0 overflow-hidden rounded-xl">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Info */}
                    <div className="min-w-0">
                        <h3 className="truncate text-sm font-bold uppercase tracking-wide text-white">
                            {title}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500">
                            {category}
                        </p>

                        <div className="mt-2 flex items-center gap-4 text-xs text-gray-300">

                            {/* Duration */}
                            <span className="flex items-center gap-1.5">
                                <Clock3
                                    size={14}
                                    className="text-lime-400"
                                />
                                {duration}
                            </span>

                            {/* Calories */}
                            <span className="flex items-center gap-1.5">
                                <Flame
                                    size={14}
                                    className="text-lime-400"
                                    fill="currentColor"
                                />
                                {calories} kcal
                            </span>

                            {/* Rating */}
                            <span className="flex items-center gap-1.5">
                                <Star
                                    size={14}
                                    className="text-lime-400"
                                    fill="currentColor"
                                />
                                {rating}
                            </span>

                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex shrink-0 items-center gap-3">

                    {/* View Details */}
                    <Link href={`/workouts/${id}`}>
                        <button
                            className="rounded-full border border-gray-700 px-5 py-2.5 text-xs text-gray-200 transition hover:border-gray-500 hover:bg-gray-800"
                        >
                            View Details
                        </button>
                    </Link>

                    {/* Mark as Done */}
                    <button
                        onClick={handleMarkDone}
                        disabled={isCompleted}
                        className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition ${
                            isCompleted
                                ? "cursor-default bg-gray-700 text-gray-400"
                                : "bg-lime-400 text-black hover:bg-lime-300"
                        }`}
                    >
                        <Check
                            size={14}
                            strokeWidth={3}
                        />

                        {isCompleted
                            ? "Completed"
                            : "Mark as Done"}
                    </button>

                    {/* Remove */}
                    <button
                        onClick={handleRemove}
                        className="ml-1 flex items-center justify-center text-gray-500 transition hover:text-red-400"
                        title="Remove workout"
                    >
                        <X size={18} />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default MyPlanCard;