"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { staticDestinations, Destination } from "@/data/destinations";
import Navbar from "@/components/Navbar";

// Define BMKG API Response Interfaces
interface WeatherItem {
    datetime: string;
    t: number;
    weather_desc: string;
    image: string;
    utc_datetime: string;
    local_datetime: string;
}

interface BMKGResponse {
    data: Array<{
        cuaca: WeatherItem[][];
    }>;
}

const DestinationDetailPage = () => {
    const params = useParams();
    const router = useRouter();
    const id = params?.id as string;

    const [destination, setDestination] = useState<Destination | null>(null);
    const [weatherData, setWeatherData] = useState<WeatherItem[][]>([]);
    const [loading, setLoading] = useState(true);
    const [activeDayIndex, setActiveDayIndex] = useState(0);

    useEffect(() => {
        if (id) {
            const found = staticDestinations.find((d) => d.id === id);
            setDestination(found || null);
        }
    }, [id]);

    useEffect(() => {
        const fetchWeather = async () => {
            const adm4 = `${destination?.kodeProv || ""}.${destination?.kodeKota || ""}.${destination?.kodeKec || ""}.${destination?.kodeKel || ""}`;
            if (!adm4 || adm4 === "...") return;
            try {
                setLoading(true);
                const res = await fetch(
                    `https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${adm4}`
                );
                const json: BMKGResponse = await res.json();

                if (json.data && json.data[0]?.cuaca) {
                    setWeatherData(json.data[0].cuaca);
                }
            } catch (error) {
                console.error("Failed to fetch BMKG weather:", error);
            } finally {
                setLoading(false);
            }
        };

        if (destination) {
            fetchWeather();
        }
    }, [destination]);

    if (!destination) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-gray-500 font-medium">Destinasi tidak ditemukan.</p>
            </div>
        );
    }

    // Calculate Average Rating
    const avgRating = destination.ratings.length > 0
        ? (destination.ratings.reduce((a, b) => a + b, 0) / destination.ratings.length).toFixed(1)
        : "0.0";
    const displayRating = (parseFloat(avgRating) * 2).toFixed(1);

    // Helper to extract Day Name from local_datetime (e.g., "2026-03-15 04:00:00")
    const getDayName = (dateTimeStr: string) => {
        const date = new Date(dateTimeStr.replace(" ", "T"));
        return date.toLocaleDateString("id-ID", { weekday: "long" });
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Top Navbar */}
            <Navbar isBack={true} title="Detail" />

            {/* Main Container */}
            <div className="w-full mx-auto bg-white flex flex-col pb-24 px-8 pt-5">
                {/* Banner Area */}
                <div className="relative w-full h-[360px]">
                    <Image
                        src={destination.imageUrl || "/hero_bg.png"}
                        alt={destination.namaWisata}
                        fill
                        className="object-cover rounded-[0.625rem]"
                    />

                    {/* Top-Left Location Tag */}
                    {destination.lokasiSingkat && (
                        <>
                            <div className="absolute top-0 -left-4 bg-[#4CAF50] text-white px-5 py-2.5 flex items-center gap-1.5 rounded-tl-lg rounded-br-lg  font-semibold shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                <span className="text-sm tracking-wide">{destination.lokasiSingkat}</span>
                            </div>
                            <div className="absolute top-10 -left-4 w-4 h-4 border-l-16 border-l-transparent border-t-16 border-t-[#2A8808]">
                            </div>
                        </>

                    )}

                    {/* Bottom-Right Pagination Dots Indicator - Mock */}
                    <div className="absolute bottom-4 right-4 bg-black/40 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                        1/3
                    </div>
                </div>

                {/* Info Area */}
                <div className="py-2.5 flex flex-col border-b border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 leading-none tracking-tight">
                        {destination.namaWisata}
                    </h2>

                    <div className="mt-2 flex items-center gap-1.5 text-base font-semibold">
                        <span className="text-green-600">{displayRating}/10</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500">{destination.reviewCountText || `${destination.reviews.length} ulasan`}</span>
                    </div>

                    {/* Full Address Card */}
                    <div className="mt-4 p-4 bg-[#01197814] rounded-2xl flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#02238D] mt-0.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                        <div className="flex flex-col">
                            <p className="text-sm font-bold text-gray-800 leading-tight">
                                {destination.alamat}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Weather Forecast Section */}
                <div className="py-5 flex flex-col">
                    {loading ? (
                        <p className="text-center text-gray-500 py-4">Memuat cuaca...</p>
                    ) : weatherData.length > 0 ? (
                        <div className="flex flex-col">
                            {/* Day Tabs */}
                            <div className="flex gap-2 overflow-x-auto pb-3 border-b border-gray-100 scrollbar-none">
                                {weatherData.map((dayData, index) => {
                                    const firstItem = dayData[0];
                                    const dayName = firstItem ? getDayName(firstItem.local_datetime) : `Hari ${index + 1}`;
                                    const isActive = index === activeDayIndex;

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => setActiveDayIndex(index)}
                                            className={`px-4 py-1.5 rounded-full font-bold text-sm transition-all whitespace-nowrap cursor-pointer ${isActive
                                                ? "bg-[#3B5998] text-white shadow-md"
                                                : "text-gray-400 hover:text-gray-600"
                                                }`}
                                        >
                                            {dayName}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Hourly Weather List */}
                            <div className="flex gap-3 overflow-x-auto py-5 scrollbar-none">
                                {weatherData[activeDayIndex]?.map((item, index) => {
                                    const hourText = item.local_datetime.split(" ")[1]?.substring(0, 5) || "";

                                    return (
                                        <div
                                            key={index}
                                            className={`min-w-[76px] p-3 rounded-2xl flex flex-col items-center gap-2 shadow-sm border transition-all ${index === 0
                                                ? "bg-[#314A8A] text-white border-transparent"
                                                : "bg-gray-100/70 border-gray-100 text-gray-800"
                                                }`}
                                        >
                                            <span className={`text-sm font-extrabold ${index === 0 ? "text-white" : "text-gray-700"}`}>
                                                {item.t}°C
                                            </span>

                                            {item.image && (
                                                <div className="w-10 h-10 relative">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.weather_desc}
                                                        width={40}
                                                        height={40}
                                                        className="object-contain"
                                                    />
                                                </div>
                                            )}

                                            <span className={`text-sm font-bold opacity-90 ${index === 0 ? "text-white" : "text-gray-500"}`}>
                                                {hourText}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-gray-400 py-4 text-sm">Data cuaca tidak tersedia.</p>
                    )}
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-50 h-[3.8rem] bg-white">
                <div className="flex items-center gap-3 bg-linear-to-r bg-[#01197833] h-full pl-2.5">

                    {/* Bookmark */}
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-[#001D4A]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        </svg>
                    </button>

                    {/* Share */}
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-[#001D4A]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polygon points="3 11 22 2 13 21 11 13 3 11" />
                        </svg>
                    </button>
                    <div className="bg-gray-200 grow rounded-l-full h-full flex gap-3">

                        {/* Lapor */}
                        <button className="px-6 py-3 h-full  text-[#001D4A] font-bold rounded-full text-lg">
                            Lapor
                        </button>

                        {/* Beri Nilai */}
                        <button className="flex-1 py-3 h-full bg-[#001D4A] text-white font-bold rounded-l-full text-lg">
                            Beri Nilai
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DestinationDetailPage;
