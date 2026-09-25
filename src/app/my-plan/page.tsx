"use client";

import React, { useMemo, useState } from "react";

import { useFitLog } from "@/context/FitLogContex";
import MyPlanCard from "@/components/shared/MyPlanCard";
import Link from "next/link";

const MyPlanPage = () => {
    const {
        addPlan,
        savedPlans,
    } = useFitLog();

    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

    const [sortBy, setSortBy] = useState("duration");

    // ================= TODAY'S PLAN SORT =================
    const sortedPlans = useMemo(() => {
        const plans = [...addPlan];

        if (sortBy === "duration") {
            return plans.sort(
                (a, b) =>
                    Number(b.duration) - Number(a.duration)
            );
        }

        if (sortBy === "calories") {
            return plans.sort(
                (a, b) =>
                    Number(b.caloriesBurned) -
                    Number(a.caloriesBurned)
            );
        }

        if (sortBy === "rating") {
            return plans.sort(
                (a, b) =>
                    Number(b.rating) - Number(a.rating)
            );
        }

        return plans;
    }, [addPlan, sortBy]);

    // ================= SAVED SORT =================
    const sortedSavedPlans = useMemo(() => {
        const plans = [...savedPlans];

        if (sortBy === "duration") {
            return plans.sort(
                (a, b) =>
                    Number(b.duration) - Number(a.duration)
            );
        }

        if (sortBy === "calories") {
            return plans.sort(
                (a, b) =>
                    Number(b.caloriesBurned) -
                    Number(a.caloriesBurned)
            );
        }

        if (sortBy === "rating") {
            return plans.sort(
                (a, b) =>
                    Number(b.rating) - Number(a.rating)
            );
        }

        return plans;
    }, [savedPlans, sortBy]);

    // ================= TOTAL MINUTES =================
    const totalMinutes = addPlan.reduce(
        (total, plan) =>
            total + Number(plan.duration),
        0
    );

    // ================= TOTAL CALORIES =================
    const totalCalories = addPlan.reduce(
        (total, plan) =>
            total + Number(plan.caloriesBurned),
        0
    );

    return (
        <main className="min-h-screen bg-[#0d0f12] text-white px-4 py-8 md:px-8">

            <div className="max-w-[1100px] mx-auto">

                {/* ================= HEADER ================= */}
                <div className="mb-7">

                    <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                        MY PLAN
                    </h1>

                    <p className="mt-1 text-xs text-gray-500">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>

                </div>

                {/* ================= STATS ================= */}
                <div className="border border-[#242831] bg-[#111419] rounded-xl overflow-hidden mb-6">

                    <div className="grid grid-cols-3">

                        {/* Exercises */}
                        <div className="px-4 md:px-5 py-5 border-r border-[#242831]">

                            <p className="text-[9px] uppercase tracking-wide text-gray-500">
                                Exercises
                            </p>

                            <p className="mt-1 text-2xl md:text-3xl font-extrabold text-[#caff00]">
                                {addPlan.length}
                            </p>

                        </div>

                        {/* Minutes */}
                        <div className="px-4 md:px-5 py-5 border-r border-[#242831]">

                            <p className="text-[9px] uppercase tracking-wide text-gray-500">
                                Minutes
                            </p>

                            <p className="mt-1 text-2xl md:text-3xl font-extrabold text-white">
                                {totalMinutes}
                            </p>

                        </div>

                        {/* Calories */}
                        <div className="px-4 md:px-5 py-5">

                            <p className="text-[9px] uppercase tracking-wide text-gray-500">
                                Calories
                            </p>

                            <p className="mt-1 text-2xl md:text-3xl font-extrabold text-white">
                                {totalCalories}
                            </p>

                        </div>

                    </div>

                </div>

                {/* ================= TABS + SORT ================= */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">

                    {/* Tabs */}
                    <div className="inline-flex w-fit items-center rounded-lg border border-[#242831] bg-[#15181e] p-1">

                        {/* Today's Plan */}
                        <button
                            onClick={() =>
                                setActiveTab("today")
                            }
                            className={`px-4 py-2 rounded-md text-[10px] font-semibold transition ${activeTab === "today"
                                ? "bg-[#252a33] text-white"
                                : "text-gray-500 hover:text-gray-300"
                                }`}
                        >
                            Todays Plan
                        </button>

                        {/* Saved */}
                        <button
                            onClick={() =>
                                setActiveTab("saved")
                            }
                            className={`px-4 py-2 rounded-md text-[10px] font-semibold transition ${activeTab === "saved"
                                ? "bg-[#252a33] text-white"
                                : "text-gray-500 hover:text-gray-300"
                                }`}
                        >
                            Saved
                        </button>

                    </div>

                    {/* Sort */}
                    <div className="flex items-center gap-2">

                        <span className="text-[10px] text-gray-500">
                            Sort By
                        </span>

                        <select
                            value={sortBy}
                            onChange={(e) =>
                                setSortBy(e.target.value)
                            }
                            className="bg-[#15181e] border border-[#292e38] text-gray-300 text-[10px] rounded-lg px-3 py-2 outline-none cursor-pointer"
                        >

                            <option value="duration">
                                Duration
                            </option>

                            <option value="calories">
                                Calories
                            </option>

                            <option value="rating">
                                Rating
                            </option>

                        </select>

                    </div>

                </div>

                {/* ================= TODAY'S PLAN ================= */}
                {activeTab === "today" && (

                    <div className="space-y-3">

                        {sortedPlans.length > 0 ? (

                            sortedPlans.map((plan) => (

                                <MyPlanCard
                                    key={plan.id}
                                    id={plan.id}
                                    title={plan.name}
                                    category={plan.equipment}
                                    image={plan.image}
                                    duration={plan.duration.toString()}
                                    calories={plan.caloriesBurned.toString()}
                                    rating={plan.rating.toString()}
                                />

                            ))

                        ) : (

                            <div className="rounded-xl border border-[#242831] bg-[#111419] py-16 text-center">

                                <h2 className="text-lg font-extrabold uppercase tracking-wide text-white">
                                    NOTHING HERE YET
                                </h2>

                                <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-gray-500">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <Link
                                    href="/workouts"
                                    className="mt-6 inline-flex rounded-lg bg-[#caff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#b9ed00]"
                                >
                                    Go to workouts
                                </Link>

                            </div>

                        )}

                    </div>

                )}

                {/* ================= SAVED ================= */}
                {activeTab === "saved" && (

                    <div className="space-y-3">

                        {sortedSavedPlans.length > 0 ? (

                            sortedSavedPlans.map((plan) => (

                                <MyPlanCard
                                    key={plan.id}
                                    id={plan.id}
                                    title={plan.name}
                                    category={plan.equipment}
                                    image={plan.image}
                                    duration={plan.duration.toString()}
                                    calories={plan.caloriesBurned.toString()}
                                    rating={plan.rating.toString()}
                                />

                            ))

                        ) : (
                            <div className="rounded-xl border border-[#242831] bg-[#111419] py-16 text-center">

                                <h2 className="text-lg font-extrabold uppercase tracking-wide text-white">
                                    NOTHING HERE YET
                                </h2>

                                <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-gray-500">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <Link
                                    href="/workouts"
                                    className="mt-6 inline-flex rounded-lg bg-[#caff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#b9ed00]"
                                >
                                    Go to workouts
                                </Link>

                            </div>

                        )}

                    </div>

                )}

            </div>

        </main>
    );
};

export default MyPlanPage;