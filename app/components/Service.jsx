import React from 'react';

const Service = () => {
    return (
        <div>
            <section
                id="services"
                className="border-t border-[#D9D2C7] px-6 py-20 md:px-16 md:py-28"
            >
                {/* Section Heading */}
                <div className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
                    <div>
                        <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#C08A6E] md:text-[19px] uppercase tracking-[0]">
                            What We Do
                        </p>

                        <h2 className="text-5xl tracking-tight sm:text-6xl md:text-7xl">
                            Our <span className="font-serif italic">services.</span>
                        </h2>
                    </div>

                    <p className="max-w-md text-base leading-7 text-[#8A857C] md:justify-self-end text-[20px]">
                        Thoughtful creative solutions that help brands communicate clearly,
                        connect with people, and grow with confidence.
                    </p>
                </div>

                {/* Service Rows */}
                <div>
                    {/* Service 01 */}
                    <a
                        href="#contact"
                        className="group grid gap-4 border-t border-[#D9D2C7] py-8 transition-colors hover:bg-[#EFEAE2] sm:grid-cols-[70px_1fr_auto] sm:items-center sm:px-4"
                    >
                        <span className="text-sm text-[#C08A6E] md:text-[20px]">01</span>

                        <div>
                            <h3 className="text-3xl tracking-tight transition-colors group-hover:text-[#C08A6E] sm:text-4xl md:text-5xl">
                                Branding
                            </h3>
                            <p className="mt-3 max-w-lg text-sm leading-6 text-[#8A857C] sm:text-base md:text-[17px]">
                                Distinctive brand identities, visual systems, and guidelines that
                                make your business memorable.
                            </p>
                        </div>

                        <span className="text-2xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                            ↗
                        </span>
                    </a>

                    {/* Service 02 */}
                    <a
                        href="#contact"
                        className="group grid gap-4 border-t border-[#D9D2C7] py-8 transition-colors hover:bg-[#EFEAE2] sm:grid-cols-[70px_1fr_auto] sm:items-center sm:px-4"
                    >
                        <span className="text-sm text-[#C08A6E] md:text-[20px]">02</span>

                        <div>
                            <h3 className="text-3xl tracking-tight transition-colors group-hover:text-[#C08A6E] sm:text-4xl md:text-5xl">
                                UI/UX Design
                            </h3>
                            <p className="mt-3 max-w-lg text-sm leading-6 text-[#8A857C] sm:text-base md:text-[17px]">
                                Intuitive digital experiences designed around real people,
                                usability, and clarity.
                            </p>
                        </div>

                        <span className="text-2xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                            ↗
                        </span>
                    </a>

                    {/* Service 03 */}
                    <a
                        href="#contact"
                        className="group grid gap-4 border-y border-[#D9D2C7] py-8 transition-colors hover:bg-[#EFEAE2] sm:grid-cols-[70px_1fr_auto] sm:items-center sm:px-4"
                    >
                        <span className="text-sm text-[#C08A6E] md:text-[20px]">03</span>

                        <div>
                            <h3 className="text-3xl tracking-tight transition-colors group-hover:text-[#C08A6E] sm:text-4xl md:text-5xl">
                                Web Design
                            </h3>
                            <p className="mt-3 max-w-lg text-sm leading-6 text-[#8A857C] sm:text-base md:text-[17px]">
                                Modern, responsive websites that bring your brand to life and
                                turn visitors into customers.
                            </p>
                        </div>

                        <span className="text-2xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                            ↗
                        </span>
                    </a>
                </div>
            </section>

            {/* Creative Statement Section */}
            <section className="bg-[#2B2925] px-6 py-24 text-[#F6F3ED] md:px-16 md:py-36">

                <div className="mx-auto max-w-5xl">

                    {/* Small Label */}
                    <p className="mb-10 text-xs uppercase tracking-[0.25em] text-[#C08A6E] md:text-[17px] uppercase tracking-[1]">
                        Our Creative Philosophy
                    </p>

                    {/* Main Statement */}
                    <h2 className="text-4xl leading-tight tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
                        Good design doesn't just look beautiful.
                        <span className="font-serif italic text-[#C08A6E]">
                            {" "}It makes people feel something.
                        </span>
                    </h2>

                    {/* Bottom Content */}
                    <div className="mt-12 flex flex-col justify-between gap-6 border-t border-white/20 pt-6 sm:flex-row sm:items-end">

                        <p className="max-w-md text-sm leading-7 text-white/60 md:text-base md:text-[20px]">
                            We believe meaningful design goes beyond appearance. It creates
                            connections, communicates purpose, and leaves a lasting impression.
                        </p>

                        <span className="text-sm uppercase tracking-widest text-white/60 md:text-[17px]">
                            Thoughtfully made · Intentionally designed
                        </span>

                    </div>

                </div>

            </section>
        </div>
    );
}

export default Service;
