"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { staticDestinations, Destination } from "@/data/destinations";
import DestinationCard from "@/components/DestinationCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SearchPageContent = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const query = searchParams.get("q") || "";

    const [searchQuery, setSearchQuery] = useState(query);
    const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([]);

    useEffect(() => {
        setSearchQuery(query); // Update input when URL items loads updates directly
        if (query) {
            const results = staticDestinations.filter(
                (d) =>
                    d.namaWisata.toLowerCase().includes(query.toLowerCase()) ||
                    d.deskripsi.toLowerCase().includes(query.toLowerCase()) ||
                    d.lokasiSingkat?.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredDestinations(results);
        } else {
            setFilteredDestinations(staticDestinations);
        }
    }, [query]);

    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        } else {
            router.push(`/search`);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Header */}
            <Navbar
                isSearch={true}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSearch={handleSearch}
            />

            {/* Content Area */}
            <div className="flex-1 p-4">
                {filteredDestinations.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4 justify-items-center">
                        {filteredDestinations.map((destination) => (
                            <DestinationCard key={destination.id} destination={destination} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                        <p className="font-medium">Tidak ada destinasi ditemukan.</p>
                        <p className="text-sm">Coba kata kunci lain.</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white text-gray-500">Memuat pencarian...</div>}>
            <SearchPageContent />
        </Suspense>
    );
}
