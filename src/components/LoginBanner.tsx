import React from "react";

const LoginBanner = () => {
    return (
        <div className="w-full bg-white py-4 px-6 md:px-12 flex justify-between items-center shadow-sm border-b border-gray-100">
            <div className="flex flex-col">
                <h2 className="text-gray-900 font-bold text-[0.9rem] md:text-xl tracking-tight">
                    Ingin pengalaman tambahan?
                </h2>
                <p className="text-gray-500 text-[0.75rem] md:text-base mt-0.5">
                    Login dan nikmati fiturnya
                </p>
            </div>

            <button className="bg-[#02238D] hover:bg-[#011a68] text-white font-bold px-8 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-102 cursor-pointer text-base">
                Login
            </button>
        </div>
    );
};

export default LoginBanner;
