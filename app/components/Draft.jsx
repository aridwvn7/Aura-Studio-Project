// for the hero
<div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#C08A6E]/30 blur-2xl" />

//  <div className="flex flex-col gap-5 text-sm text-[#777168] md:text-[17px]"></div>

import React from 'react';

const Navbarl = () => {
    return (
        // <header className='sticky top-0 z-50 bg-white/90 border-b '>
        <header className="sticky top-0 z-50 rounded-[1px] bg-white/70 shadow-sm backdrop-blur-md md:m-0">
            <nav className="flex items-center justify-between px-6 py-6 md:px-16">

                {/* Logo */}
                <a href="#" className="text-2xl font-bold tracking-tight">
                    aura<span className="text-[#C08A6E]">.</span>
                </a>

                {/* Navigation Links */}
                <div className="hidden items-center gap-8 md:flex">
                    <a href="#about" className="text-m text-[#8A857C] font-bold transition hover:text-[#C08A6E]">
                        About
                    </a>

                    <a href="#services" className="text-m text-[#8A857C] font-bold transition hover:text-[#C08A6E]">
                        Services
                    </a>

                    <a href="#contact" className="text-m text-[#8A857C] font-bold transition hover:text-[#C08A6E]">
                        Contact
                    </a>
                </div>

                {/* Contact Button */}
                <a
                    href="#contact"
                    className="rounded-full border border-[#2B2925] px-5 py-2.5 text-sm transition hover:bg-[#2B2925] hover:text-[#F6F3ED]"
                >
                    Let's Talk
                    <span aria-hidden="true" className='font-bold'>↗</span>
                </a>

                <div className='hidden'>
                    <img src="/image/ham.png" alt=""/>
                    <img src="/image/closeb.png" alt="" />
                </div>

            </nav>
        </header>
    );
}

export default Navbarl;
