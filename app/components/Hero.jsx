import React from 'react';

const Hero = () => {
    return (
        <section className="px-6 pb-12 pt-12 md:px-16 md:pt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-10">

                {/* Left Side: Headline and CTA */}
                <div>
                    <p className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-[#8A857C]">
                        London · Creative Studio · 2026
                    </p>

                    <h1 className="text-6xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl xl:text-9xl">
                        Bringing
                        <br />
                        Ideas to
                        <br />
                        <span className="font-serif italic text-[#C08A6E]">
                            Life.
                        </span>
                    </h1>

                    <div className="mt-10 border-t border-[#D9D2C7] pt-7">
                        <p className="max-w-md text-base leading-7 text-[#8A857C] md:text-lg">
                            We transform ambitious ideas into meaningful brand identities,
                            thoughtful digital experiences, and beautiful websites.
                        </p>

                        <a
                            href="#services"
                            className="group mt-7 inline-flex items-center gap-4 rounded-full bg-[#2B2925] px-7 py-4 text-sm text-[#F6F3ED] transition hover:bg-[#C08A6E]"
                        >
                            Explore Our Work
                            <span className="transition-transform group-hover:translate-x-1">
                                ↗
                            </span>
                        </a>
                    </div>
                </div>

                {/* Right Side: Creative Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">

                    {/* Large Branding Tile */}
                    <div className="relative flex min-h-64 items-center justify-center overflow-hidden border-2 border-[#E5D5C0] p-5 sm:min-h-80">

                        <div className="relative flex aspect-[4/5] w-full max-w-64 -rotate-8 items-center justify-center bg-[#F6F3ED] shadow-xl">
                            <div className="border border-[#D9D2C7] px-6 py-10 text-center">
                                <span className="font-serif text-3xl italic text-[#C08A6E] sm:text-4xl">
                                    aura.
                                </span>
                                <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-[#8A857C]">
                                    Made with intention
                                </p>
                            </div>
                        </div>

                        <span className="absolute bottom-4 left-4 text-[15px] uppercase  text-[#625449]">
                            01 — Branding
                        </span>
                    </div>

                    {/* Studio Tile */}
                    <div className="flex min-h-44 flex-col justify-between bg-[#DED5C7] p-5 sm:min-h-56 sm:p-6">
                        <span className="text-xs uppercase tracking-widest text-[#766D61]">
                            Our philosophy
                        </span>

                        <div>
                            <span className="font-serif text-3xl italic sm:text-4xl">
                                Less,
                                <br />
                                but better.
                            </span>
                            <div className="mt-5 h-px w-12 bg-[#C08A6E]" />
                        </div>
                    </div>

                    {/* Round Circle Design Tile */}
                    <div className="flex min-h-44 items-center justify-center overflow-hidden bg-[#C08A6E] p-5 sm:min-h-56">
                        <div className="relative flex aspect-square w-full max-w-40 items-center justify-center rounded-full border border-[#F6F3ED]/70">
                            <div className="absolute h-[50px] w-34 rounded-full border border-[#F6F3ED]/30" />
                            <span className="font-serif text-4xl italic text-[#F6F3ED]">
                                A.
                            </span>
                        </div>
                    </div>

                    {/* Digital Design Tile */}
                    <div className="flex min-h-44 flex-col justify-between bg-[#E9E2D7] p-5 sm:min-h-56 sm:p-6">
                        <span className="text-[15px] uppercase text-[#8A857C]">
                            02 — Digital
                        </span>

                        <div>
                            <div className="mb-4 flex gap-2">
                                <span className="h-7 w-7 rounded-full bg-[#C08A6E]" />
                                <span className="h-7 w-7 rounded-full bg-[#2B2925]" />
                                <span className="h-7 w-7 rounded-full border border-[#8A857C]" />
                            </div>

                            <p className="font-serif text-2xl italic sm:text-3xl">
                                Design with purpose.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Label */}
            <div className="mt-16 flex flex-col gap-3 border-t border-[#D9D2C7] pt-5 text-[10px] uppercase tracking-[0.2em] text-[#8A857C] sm:flex-row sm:items-center sm:justify-between md:text-[15px]">
                <span>Independent Creative Studio</span>
                <span>Branding · Design · Web</span>
                <a href="#about" className="transition hover:text-[#C08A6E]">
                    Scroll to Explore ↓
                </a>
            </div>
        </section>
    );
}

export default Hero;
