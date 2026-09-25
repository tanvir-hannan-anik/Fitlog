"use client";

import React, {
    createContext,
    ReactNode,
    useContext,
    useState,
} from "react";

import { IFitlog } from "@/types/fitlogTypes";

interface FitLogContextType {
    addPlan: IFitlog[];
    setAddPlan: React.Dispatch<React.SetStateAction<IFitlog[]>>;

    savedPlans: IFitlog[];
    setSavedPlans: React.Dispatch<React.SetStateAction<IFitlog[]>>;
}

const FitLogContext = createContext<FitLogContextType | null>(null);

interface FitLogProviderProps {
    children: ReactNode;
}

const FitLogProvider = ({ children }: FitLogProviderProps) => {
    const [addPlan, setAddPlan] = useState<IFitlog[]>([]);

    const [savedPlans, setSavedPlans] = useState<IFitlog[]>([]);

    return (
        <FitLogContext.Provider
            value={{
                addPlan,
                setAddPlan,

                savedPlans,
                setSavedPlans,
            }}
        >
            {children}
        </FitLogContext.Provider>
    );
};

export const useFitLog = () => {
    const context = useContext(FitLogContext);

    if (!context) {
        throw new Error(
            "useFitLog must be used inside FitLogProvider"
        );
    }

    return context;
};

export default FitLogProvider;