"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import {
    Check,
    Clock3,
    Flame,
    Star,
} from "lucide-react";

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

    const { setAddPlan } = useFitLog();

    const [isCompleted, setIsCompleted] =
        useState(completed);

    // Mark workout as completed
    const handleComplete = () => {
        setIsCompleted((prev) => !prev);
    };

    // Remove workout
    const handleRemove = () => {
        setAddPlan((prev) =>
            prev.filter((plan) => plan.id !== id)
        );
    };

    return (
        <div
            className={`w-full rounded-xl border bg-[#111419] p-3 transition ${
                isCompleted
                    ? "border-[#caff00]/40"
                    : "border-[#242831]"
            }`}
        >

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* ================= LEFT ================= */}
                <div className="flex min-w-0 items-center gap-3">

                    {/* Image */}
                    <div className="relative h-14.5 w-25.5 md:h-14.5 md:w-25.5 shrink-0 overflow-hidden rounded-lg">

                        <Image
                            src={image}
                            alt={title}
                            fill
                            sizes="102px"
                            className={`object-cover transition ${
                                isCompleted
                                    ? "opacity-60"
                                    : ""
                            }`}
                        />

                    </div>

                    {/* Workout Info */}
                    <div className="min-w-0">

                        {/* Title */}
                        <h3
                            className={`text-xs md:text-sm font-extrabold uppercase tracking-wide truncate ${
                                isCompleted
                                    ? "text-gray-500 line-through"
                                    : "text-white"
                            }`}
                        >
                            {title}
                        </h3>

                        {/* Category */}
                        <p className="mt-0.5 text-[9px] text-gray-500">
                            {category}
                        </p>

                        {/* Stats */}
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-[9px] text-gray-300">

                            {/* Duration */}
                            <span className="flex items-center gap-1">
                                <Clock3
                                    size={11}
                                    className="text-[#caff00]"
                                />

                                {duration} min
                            </span>

                            {/* Calories */}
                            <span className="flex items-center gap-1">
                                <Flame
                                    size={11}
                                    className="text-[#caff00]"
                                    fill="currentColor"
                                />

                                {calories} kcal
                            </span>

                            {/* Rating */}
                            <span className="flex items-center gap-1">
                                <Star
                                    size={11}
                                    className="text-[#caff00]"
                                    fill="currentColor"
                                />

                                {rating}
                            </span>

                        </div>

                    </div>

                </div>

                {/* ================= RIGHT ================= */}
                <div className="flex items-center justify-end gap-2 shrink-0">

                    {/* View Details */}
                    <Link
                        href={`/workouts/${id}`}
                        className="rounded-full border border-[#303641] px-4 py-2 text-[9px] md:text-[10px] text-gray-300 transition hover:border-gray-500 hover:bg-[#1b1f26]"
                    >
                        View Details
                    </Link>

                    {/* Mark as Done */}
                    <button
                        onClick={handleComplete}
                        className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[9px] md:text-[10px] font-bold text-black transition ${
                            isCompleted
                                ? "bg-[#8ed600]"
                                : "bg-[#caff00] hover:bg-[#b9ed00]"
                        }`}
                    >

                        <Check
                            size={11}
                            strokeWidth={3}
                        />

                        {isCompleted
                            ? "Completed"
                            : "Mark as Done"}

                    </button>

                    {/* Remove */}
                    <button
                        onClick={handleRemove}
                        className="ml-1 px-1 text-gray-600 text-sm transition hover:text-white"
                        aria-label={`Remove ${title}`}
                    >
                        ×
                    </button>

                </div>

            </div>

        </div>
    );
};

export default MyPlanCard;