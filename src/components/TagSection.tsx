"use client";

import Image from "next/image";
import backgroundTag from "../../public/image/background_tag.png";
import { useRouter } from "next/navigation";

const TagSection = () => {
    const router = useRouter();
    const tags = [
        "Camping", "Petualangan", "HidenGem", "Hiking",
        "Swimming", "Instagenic", "Sunset",
        "Danau", "Gunung", "Pantai", "Air Terjun"
    ];

    return (
        <div className="relative w-full h-52 mb-4 flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundTag}
                    alt="Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#02238D]/40 backdrop-blur-[1px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4 px-4 py-6 w-full">
                <h3 className="text-white text-lg font-semibold tracking-wide mb-1 text-center">
                    Cari berdasarkan Tag :
                </h3>

                <div className="flex flex-wrap justify-center gap-2.5 max-w-sm">
                    {tags.map((tag, idx) => (
                        <button
                            key={idx}
                            onClick={() => router.push(`/search?q=${encodeURIComponent(tag)}`)}
                            className="bg-white text-[#02238D] px-4 py-2 rounded-full font-medium shadow-sm hover:scale-105 active:scale-95 transition-all text-xs cursor-pointer whitespace-nowrap"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TagSection;
