import React from "react";
import Image from "next/image";
import Link from "next/link";
import cekCuacaLogo from "../../public/cek_cuaca_logo.png";

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#02238D] text-white overflow-hidden py-10 px-8 flex flex-col gap-6">
            {/* Background Shape */}
            <div className="absolute inset-0 z-0">
                <div className="absolute left-0 bottom-0 h-full w-full bg-linear-to-r from-[#02238D] to-[#011978]"></div>
                <div className="absolute left-0 bottom-0 h-full w-2/3 bg-linear-to-r from-[#02238D] to-[#05196A] rounded-tr-full rotate-2"></div>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-linear-to-r from-[#011978] to-[#05196A] opacity-40 rounded-full blur-3xl"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col gap-6">
                {/* Logo */}
                <div className="mt-2">
                    <Image src={cekCuacaLogo} alt="Logo Cek Cuaca" className="h-[2.4rem] w-auto" />
                </div>

                {/* Social Headers */}
                <div className="flex flex-col gap-3.5">
                    <p className="text-[0.9rem] font-medium tracking-wide">
                        Follow kami di media sosial berikut :
                    </p>
                    {/* Social Icon Row */}
                    <div className="flex items-center gap-3">
                        {socialIcons.map((item, idx) => (
                            <a key={idx} href={item.url} className="w-11 h-11 border-2 border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-all">
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-2.5 mt-2">
                    <Link href="#" className="text-[0.85rem] font-semibold hover:underline w-max">
                        Login sebagai pengelola
                    </Link>
                    <Link href="#" className="text-[0.85rem] font-semibold hover:underline w-max">
                        Butuh Bantuan
                    </Link>
                    <Link href="#" className="text-[0.85rem] font-semibold hover:underline w-max">
                        Laporkan
                    </Link>
                </div>
            </div>
        </footer>
    );
};

const socialIcons = [
    { url: "#", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>) }, // YouTube
    { url: "#", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>) }, // TikTok
    { url: "#", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>) }, // Facebook
    { url: "#", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.464 -2.464l6.768 -6.768" /></svg>) }, // X (Twitter)
    { url: "#", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>) } // Instagram
];

export default Footer;
