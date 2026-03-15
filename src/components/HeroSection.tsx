"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };
    return (
        <div className="relative w-full h-[16.2rem] md:h-[420px] overflow-hidden flex flex-col justify-center items-center px-4">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/hero_bg.png"
                    alt="Majestic Mountain Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]"></div>
            </div>

            {/* Hero Headline */}
            <h1 className="relative text-white font-bold text-2xl  md:text-5xl text-center leading-tight drop-shadow-lg tracking-wide mb-6">
                Mau kemana hari ini?
            </h1>

            {/* Search Bar Container */}
            <div className="relative pl-[1.90rem] pr-[1.2rem] py-[1.2rem] py- w-full max-w-sm md:max-w-md bg-white rounded-full flex items-center shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:scale-102">
                <input
                    type="text"
                    placeholder="Cari Destinasi Wisata"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyUp={(e) => e.key === "Enter" && handleSearch()}
                    className="flex-1 bg-transparent border-none outline-hidden text-gray-700 placeholder-gray-400 font-medium text-base h-full"
                />

                {/* Search Icon */}
                <button
                    onClick={handleSearch}
                    className="flex items-center justify-center text-gray-800 hover:text-[#02238D] transition-colors cursor-pointer pl-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
