import React from 'react';

const About = () => {
    return (
        <div>
            <section
                id="about"
                className="border-t border-[#D9D2C7] px-6 py-20 md:px-16 md:py-28"
            >
                <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">

                    {/* Section Label */}
                    <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-[#C08A6E] md:text-[19px]">
                            A Little About Us
                        </p>

                        <p className="mt-4 text-sm text-[#8A857C] md:text-[16px]">
                            Independent by nature.
                            <br />
                            Creative by design.
                        </p>
                    </div>

                    {/* About Content */}
                    <div>
                        <h2 className="max-w-2xl text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
                            We create with{" "}
                            <span className="font-serif italic text-[#C08A6E]">
                                purpose.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-2xl text-base leading-8 text-[#777168] md:text-lg">
                            Aura Studio is an independent creative studio focused on building
                            meaningful brands and thoughtful digital experiences. We bring
                            strategy, design, and technology together to help ambitious ideas
                            become something people remember.
                        </p>

                        {/* Studio Values */}
                        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-[#D9D2C7] pt-6 sm:grid-cols-3">
                            <div>
                                <span className="text-s text-[#C08A6E] md:text-[20px]">01</span>
                                <h3 className="mt-3 text-lg font-medium">Thoughtful</h3>
                                <p className="mt-2 text-sm leading-6 text-[#8A857C] md:text-[16px]">
                                    Every detail has a reason.
                                </p>
                            </div>

                            <div>
                                <span className="text-s text-[#C08A6E] md:text-[20px]">02</span>
                                <h3 className="mt-3 text-lg font-medium">Intentional</h3>
                                <p className="mt-2 text-sm leading-6 text-[#8A857C] md:text-[16px]">
                                    Design built around your goals.
                                </p>
                            </div>

                            <div>
                                <span className="text-s text-[#C08A7E] md:text-[20px]">03</span>
                                <h3 className="mt-3 text-lg font-medium">Collaborative</h3>
                                <p className="mt-2 text-sm leading-6 text-[#8A857C] md:text-[16px]">
                                    Better ideas, built together.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default About;
