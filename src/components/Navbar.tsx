"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import cekCuacaLogo from "../../public/cek_cuaca_logo.png";
import burgerIcon from "../../public/icon/burger_icon.svg";

interface NavbarProps {
    isBack?: boolean;
    title?: string;
    isSearch?: boolean;
    searchQuery?: string;
    setSearchQuery?: (val: string) => void;
    onSearch?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isBack = false, title, isSearch = false, searchQuery = "", setSearchQuery, onSearch }) => {
    const router = useRouter();

    return (
        <nav className="relative w-full h-[70px] bg-[#02238D] overflow-hidden flex items-center shadow-2xl border-b border-white/5">

            {/* Background Shape */}
            <div>
                <div className="absolute left-0 top-0 h-full w-full bg-linear-to-r from-[#02238D] to-[#011978]"></div>
                <div className="absolute left-0 top-0 h-full w-2/3 bg-linear-to-r from-[#02238D] to-[#05196A] rounded-tr-full rotate-5 md:rotate-2"></div>
                <div className="absolute -left-1/3 top-0 h-full w-2/3 bg-linear-to-r from-[#02238D] to-[#05175D] rounded-tr-full rotate-5 md:rotate-2"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto flex items-center gap-5 pl-8 md:pl-0 mr-5 w-full">
                {isSearch ? (
                    <>
                        <button onClick={() => router.back()} className="text-white hover:bg-white/10 p-1 rounded-full transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                        </button>
                        <div className="flex-1 bg-white rounded-full flex items-center px-4 py-2 gap-2 text-gray-800 shadow-md">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery?.(e.target.value)}
                                onKeyUp={(e) => e.key === "Enter" && onSearch?.()}
                                className="bg-transparent border-none outline-none flex-1 font-medium text-sm text-gray-700 w-10"
                                placeholder="Cari..."
                            />
                            <button onClick={onSearch} className="text-gray-400 hover:text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                        </div>
                    </>
                ) : isBack ? (
                    <>
                        <button onClick={() => router.back()} className="text-white hover:bg-white/10 p-1 rounded-full transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                        </button>
                        {title && <h1 className="text-white text-xl font-bold tracking-tight">{title}</h1>}
                    </>
                ) : (
                    <>
                        <button className="text-white">
                            <Image src={burgerIcon} alt="Burger Icon" className="h-7 w-[1.40rem]" />
                        </button>
                        <Image src={cekCuacaLogo} alt="Logo" className="h-7 w-auto" />
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
