"use client";

import React from 'react';

const Contact = () => {
    return (
        <div className='bg-[#f6f3d]'>
            <section
                id="contact"
                className="px-6 py-20 md:px-16 md:py-28"
            >
                <div className="grid gap-14 md:grid-cols-2 md:gap-20">

                    {/* Left Side */}
                    <div>
                        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#C08A6E] md:text-[17px] uppercase tracking-[1]">
                            Get in Touch
                        </p>

                        <h2 className="max-w-lg text-5xl leading-tight tracking-tight sm:text-6xl md:text-7xl">
                            Have an idea?
                            <br />
                            <span className="font-serif italic text-[#C08A6E]">
                                Let's talk.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-md text-base leading-7 text-[#8A857C] md:text-[19px]">
                            Have a project in mind or want to explore what's possible?
                            We'd love to hear from you. Tell us a little about your idea
                            and let's make something meaningful together.
                        </p>

                        <div className="mt-10 border-t border-[#D9D2C7] pt-6">
                            <p className="text-xs uppercase tracking-widest text-[#8A857C] md:text-[16px]">
                                Based in
                            </p>

                            <p className="mt-2 text-lg">
                                London, United Kingdom
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        className="flex flex-col gap-6 rounded-2xl border border-[#D9D2C7] bg-white/60 p-6 transition-all duration-300 hover:border-[#C08A6E] hover:shadow-xl hover:shadow-[#C08A6E]/10 sm:p-8 md:p-10"
                        onSubmit={(event) => {
                            event.preventDefault();
                            alert("Thank you for reaching out to Aura Studio!");
                        }}
                    >

                        {/* Name */}
                        <div className=''>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-3 block text-sm"
                                >
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full rounded-xl border border-[#D9D2C7] bg-[#F6F3ED] px-4 py-4 text-sm outline-none transition-all duration-300 placeholder:text-[#AAA399] hover:border-[#C08A6E] focus:border-[#C08A6E] focus:ring-2 focus:ring-[#C08A6E]/20"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-3 mt-3 block text-sm"
                                >
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    className="w-full rounded-xl border border-[#D9D2C7] bg-[#F6F3ED] px-4 py-4 text-sm outline-none transition-all duration-300 placeholder:text-[#AAA399] hover:border-[#C08A6E] focus:border-[#C08A6E] focus:ring-2 focus:ring-[#C08A6E]/20"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-3 mt-3 block text-sm"
                                >
                                    Tell us about your project
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="A few words about your idea..."
                                    required
                                    className="w-full resize-y rounded-xl border border-[#D9D2C7] bg-[#F6F3ED] px-4 py-4 text-sm outline-none transition-all duration-300 placeholder:text-[#AAA399] hover:border-[#C08A6E] focus:border-[#C08A6E] focus:ring-2 focus:ring-[#C08A6E]/20"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="group flex w-fit items-center gap-5 rounded-full bg-[#2B2925] px-7 py-4 text-sm text-[#F6F3ED] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C08A6E] hover:shadow-lg hover:shadow-[#C08A6E]/20"
                        >
                            Send Message

                            <span className="transition-transform group-hover:translate-x-1">
                                ↗
                            </span>
                        </button>
                    </form>

                </div>
            </section>
        </div>
    );
}

export default Contact;
