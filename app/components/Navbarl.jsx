import React from 'react';

const Navbarl = () => {
    return (
        <div>
            <header>
                <nav className="flex items-center justify-between px-6 py-6 md:px-16">

                    {/* Logo */}
                    <a href="#" className="text-2xl font-bold tracking-tight">
                        aura<span className="text-[#C08A6E]">.</span>
                    </a>

                    {/* Navigation Links */}
                    <div className="hidden items-center gap-8 md:flex">
                        <a href="#about" className="text-m text-[#8A857C] transition hover:text-[#C08A6E]">
                            About
                        </a>

                        <a href="#services" className="text-m text-[#8A857C] transition hover:text-[#C08A6E]">
                            Services
                        </a>

                        <a href="#contact" className="text-m text-[#8A857C] transition hover:text-[#C08A6E]">
                            Contact
                        </a>
                    </div>

                    {/* Contact Button */}
                    <a
                        href="#contact"
                        className="rounded-full border border-[#2B2925] px-5 py-2.5 text-sm transition hover:bg-[#2B2925] hover:text-[#F6F3ED]"
                    >
                        Let's Talk 
                    <span aria-hidden="true">↗</span>
                    </a>

                </nav>
            </header>

        </div>
    );
}

export default Navbarl;
