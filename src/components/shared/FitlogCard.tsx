import { IFitlog } from "@/types/fitlogTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FitlogCardProps {
    fitlog: IFitlog;
}

const FitlogCard = ({ fitlog }: FitlogCardProps) => {
    return (
        <Link
            href={`/workouts/${fitlog.id}`}
            className="block group"
        >
            <div className="card bg-[#17191f] border border-[#292c34] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#ccff00] hover:shadow-xl cursor-pointer">

                {/* Image */}
                <figure className="h-48 w-full overflow-hidden">
                    <Image
                        src={fitlog.image}
                        alt={fitlog.name}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </figure>

                {/* Content */}
                <div className="card-body p-4">

                    {/* Muscle Groups / Category Tags */}
                    <div className="flex gap-2 flex-wrap mb-2">
                        {fitlog.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="badge bg-[#ccff00] text-black border-none text-[10px] font-bold uppercase"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Workout Name */}
                    <h2 className="text-white text-lg font-extrabold uppercase tracking-wide group-hover:text-[#ccff00] transition-colors">
                        {fitlog.name}
                    </h2>

                    {/* Equipment */}
                    <p className="text-gray-500 text-xs mt-1">
                        {fitlog.equipment}
                    </p>

                    {/* Divider */}
                    <div className="divider my-1 opacity-10"></div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-gray-400 text-xs">

                        {/* Duration */}
                        <div className="flex items-center gap-1">
                            <span>◷</span>
                            <span>{fitlog.duration} min</span>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center gap-1">
                            <span>♥</span>
                            <span>{fitlog.caloriesBurned} kcal</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1">
                            <span>☆</span>
                            <span>{fitlog.rating}</span>
                        </div>

                    </div>

                </div>
            </div>
        </Link>
    );
};

export default FitlogCard;