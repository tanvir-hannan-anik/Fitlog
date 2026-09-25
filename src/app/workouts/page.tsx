import FitlogCard from '@/components/shared/FitlogCard';
import { getAllFitlogData } from '@/lib/fitlog';
import { IFitlog } from '@/types/fitlogTypes';
import React from 'react';

const WorkoutPage = async () => {
    const fitLogData = await getAllFitlogData()
    return (
        <div>
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
        </div>
    );
};

export default WorkoutPage;