import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#090a0d] border-t border-[#1c1e23] mt-5">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-[#ccff00] text-lg font-black">
                            ✚
                        </span>

                        <span className="text-white text-xs font-extrabold tracking-wide">
                            FITLOG
                        </span>
                    </div>

                    {/* Copyright */}
                    <p className="text-[#666a73] text-[11px] text-center md:text-right">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;