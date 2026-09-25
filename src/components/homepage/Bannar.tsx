import Image from 'next/image';
import React from 'react';
import bannar from "@/assets/banner.png"

const Bannar = () => {
    return (
        <div className="container mx-auto my-5 md:my-10 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 bg-gray-700 p-6 md:p-20 rounded-3xl md:rounded-4xl">

    <div className="space-y-3 text-center md:text-left">
        <h3 className="mb-4 text-[10px] font-bold tracking-[0.08em] text-[#ccff00]">
            WORKOUT LIBRARY
        </h3>

        <h1 className="font-bold text-3xl md:text-5xl">
            TRAIN WITH INTENT. LOG <br className="hidden md:block" /> EVERY SET.
        </h1>

        <p className="text-sm md:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            <br className="hidden md:block" /> into todays plan, and watch the weeks work add up.
        </p>

        <a
            href="#library"
            className="mt-5 inline-flex h-9 items-center rounded-md bg-[#ccff00] px-5 text-[10px] font-extrabold text-black transition hover:bg-[#b8e600]"
        >
            BROWSE WORKOUTS
        </a>
    </div>

    <div className="flex justify-center">
        <Image
            src={bannar}
            alt="bannar"
            width={400}
            height={600}
            className="w-55 md:w-100 h-auto"
        />
    </div>

</div>
    );
};

export default Bannar;