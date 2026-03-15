"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/data/destinations";

interface DestinationCardProps {
    destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
    const defaultPlaceholder = `https://placehold.co/400x300.png?text=${encodeURIComponent(destination.namaWisata || "No+Image")}`;
    const [imgSrc, setImgSrc] = useState(destination.imageUrl || defaultPlaceholder);

    // Calculate average rating from array
    const avgRating = destination.ratings.length > 0
        ? (destination.ratings.reduce((a, b) => a + b, 0) / destination.ratings.length).toFixed(1)
        : "0.0";

    // Scale to 10 for display (e.g. 4.5/5 -> 9.0/10)
    const displayRating = (parseFloat(avgRating) * 2).toFixed(1);

    return (
        <Link href={`/destination/${destination.id}`} className="w-44 bg-white rounded-[0.625rem] border border-gray-200 overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-103 hover:shadow-2xl">
            {/* Image and Tags Area */}
            <div className="relative h-40 w-full">
                <Image
                    src={imgSrc}
                    alt={destination.namaWisata}
                    fill
                    className="object-cover"
                    onError={() => setImgSrc(defaultPlaceholder)}
                />

                {/* Top-Left Location Tag */}
                {destination.lokasiSingkat && (
                    <div className="absolute top-0 left-0 bg-[#4CAF50] text-white px-4 py-2 flex items-center gap-1.5 rounded-br-2xl font-semibold shadow-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-white"
                        >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <span className="text-sm tracking-wide">{destination.lokasiSingkat}</span>
                    </div>
                )}

                {/* Bottom-Right Weather Tag */}
                {destination.cuacaStatus && (
                    <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm text-gray-800 px-2 py-1.5 rounded-full flex items-center gap-2 shadow-lg scale-95 origin-bottom-right">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FBC02D"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="4.22" x2="19.78" y2="5.64"></line>
                        </svg>
                        <span className="font-bold text-[0.65rem] text-gray-800">{destination.cuacaStatus}</span>
                    </div>
                )}
            </div>

            {/* Content Area */}
            <div className="p-2 flex flex-col bg-white">
                <h3 className="text-sm font-bold text-gray-800 tracking-tight leading-snug truncate">
                    {destination.namaWisata}
                </h3>

                <div className="mt-2 flex items-center gap-1.5 text-base">
                    <span className="text-green-600 font-bold text-[0.65rem]">
                        {displayRating}/10
                    </span>
                    <span className="text-gray-400 font-medium grow text-center">•</span>
                    <span className="text-gray-500 font-medium text-[0.65rem]">
                        {destination.reviewCountText || `${destination.reviews.length} ulasan`}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default DestinationCard;
