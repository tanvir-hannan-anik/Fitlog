import Image from 'next/image';
import { getAllFitlogData } from '@/lib/fitlog';
import { IFitlog } from '@/types/fitlogTypes';
import React from 'react';
import AddPlanButton from '@/components/Apps/AddPlanButton';
import SavedButton from '@/components/Apps/SavedButton';

export async function generateStaticParams() {
    const allFitlogs = await getAllFitlogData();

    return allFitlogs.map((fitlog: IFitlog) => ({
        id: fitlog.id.toString(),
    }));
}

const WorkoutPageDetails = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const allFitlogs = await getAllFitlogData();

    const fitlog = allFitlogs.find(
        (fitlog: IFitlog) => fitlog.id === Number(id)
    );

    if (!fitlog) {
        return (
            <div className="min-h-screen bg-[#0d0f12] flex items-center justify-center">
                <h1 className="text-white text-2xl font-bold">
                    Workout not found
                </h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0d0f12] text-white px-4 py-10 md:px-8">
            <div className="max-w-7xl mx-auto bg-[#111318] border border-[#242831] rounded-2xl p-5 md:p-8">

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* ================= LEFT IMAGE ================= */}
                    <div className="w-full">
                        <div className="relative w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden">
                            <Image
                                src={fitlog.image}
                                alt={fitlog.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* ================= RIGHT CONTENT ================= */}
                    <div className="flex flex-col">

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
                            {fitlog.name}
                        </h1>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-6 mt-3 max-w-xl">
                            {fitlog.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {fitlog.muscleGroups.map((muscle: string, index: number) => (
                                <span
                                    key={index}
                                    className="bg-[#caff00] text-black px-3 py-1 rounded-full text-xs font-bold"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* ================= DETAILS ================= */}
                        <div className="mt-5 border border-[#252a33] rounded-xl overflow-hidden bg-[#15181e]">

                            {/* Equipment */}
                            <div className="flex justify-between items-center px-4 py-3 border-b border-[#252a33]">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    Equipment
                                </span>
                                <span className="text-sm text-gray-300">
                                    {fitlog.equipment}
                                </span>
                            </div>

                            {/* Difficulty */}
                            <div className="flex justify-between items-center px-4 py-3 border-b border-[#252a33]">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    Difficulty
                                </span>
                                <span className="text-sm text-gray-300">
                                    {fitlog.difficulty}
                                </span>
                            </div>

                            {/* Sets */}
                            <div className="flex justify-between items-center px-4 py-3 border-b border-[#252a33]">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    Sets
                                </span>
                                <span className="text-sm text-gray-300">
                                    {fitlog.sets}
                                </span>
                            </div>

                            {/* Reps */}
                            <div className="flex justify-between items-center px-4 py-3 border-b border-[#252a33]">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    Reps
                                </span>
                                <span className="text-sm text-gray-300">
                                    {fitlog.reps}
                                </span>
                            </div>

                            {/* Duration */}
                            <div className="flex justify-between items-center px-4 py-3 border-b border-[#252a33]">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    Duration
                                </span>
                                <span className="text-sm text-gray-300">
                                    {fitlog.duration} min
                                </span>
                            </div>

                            {/* Calories */}
                            <div className="flex justify-between items-center px-4 py-3 border-b border-[#252a33]">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    Calories
                                </span>
                                <span className="text-sm text-gray-300">
                                    {fitlog.caloriesBurned} kcal
                                </span>
                            </div>

                            {/* Rating */}
                            <div className="flex justify-between items-center px-4 py-3">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    Rating
                                </span>
                                <span className="text-sm text-gray-300">
                                    {fitlog.rating}
                                </span>
                            </div>
                        </div>

                        {/* ================= INSTRUCTIONS ================= */}
                        <div className="mt-6">
                            <h2 className="text-sm font-bold uppercase tracking-wide mb-4">
                                Instructions
                            </h2>

                            <div className="space-y-3">
                                {fitlog.instructions.map((instruction: string, index: number) => (
                                    <div
                                        key={index}
                                        className="flex gap-3 text-sm text-gray-400 leading-5"
                                    >
                                        <span className="text-gray-500 min-w-4">
                                            {index + 1}.
                                        </span>

                                        <p>{instruction}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ================= BUTTONS ================= */}
                        <div className="flex flex-wrap gap-3 mt-7">

                            <AddPlanButton fitlog={fitlog} />
                            <SavedButton fitlog={fitlog} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutPageDetails;