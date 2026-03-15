import React from "react";
import { staticDestinations } from "@/data/destinations";
import DestinationCard from "./DestinationCard";

interface DestinationSliderProps {
    title?: string;
}

const DestinationSlider: React.FC<DestinationSliderProps> = ({ title = "Sedang Vimral!!" }) => {
    return (
        <div className="w-full pt-8 pb-4 px-4 md:px-12 flex flex-col">
            {/* Title / Header for the Slider Section Optional */}
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-5">
                {title}
            </h2>

            {/* Horizontal Scrolling Container */}
            <div className="w-full flex gap-5 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory">
                {staticDestinations.map((destination) => (
                    <div key={destination.id} className="snap-start">
                        <DestinationCard destination={destination} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DestinationSlider;
