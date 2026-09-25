import { getAllFitlogData } from "@/lib/fitlog";
import React from "react";
import FitlogCard from "../shared/FitlogCard";
import { IFitlog } from "@/types/fitlogTypes";

const Library = async () => {
    const fitLogData = await getAllFitlogData();

    return (
        <section className="container mx-auto mt-10 px-4">

            {/* Section Header */}
            <div className="mb-6">
                <h1 className="font-bold text-4xl text-white">
                    THE LIBRARY
                </h1>

                <p className="text-gray-300 mt-2">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* Workout Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {fitLogData.length > 0 ? (
                    fitLogData.map((fitlog: IFitlog) => (
                        <FitlogCard
                            key={fitlog.id}
                            fitlog={fitlog}
                        />
                    ))
                ) : (
                    <p className="text-gray-400">
                        Data is Not Found
                    </p>
                )}

            </div>

        </section>
    );
};

export default Library;