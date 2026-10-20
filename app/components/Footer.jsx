

const Footer = () => {
    return (
        <footer className="border-t border-[#D9D2C7] bg-[#EFEAE2] px-6 py-10 md:px-16">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between gap-3">

                {/* Brand */}
                <div>
                    <a href="#" className="text-2xl font-semibold tracking-tight md:text-[35px]">
                        aura<span className="text-[#C08A6E]">.</span>
                    </a>

                    <p className="mt-2 max-w-xs text-sm leading-6 text-[#8A857C] md:text-[20px] ">
                        Thoughtful design. Meaningful experiences.
                    </p>
                </div>

                {/* Footer Navigation */}
                <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#777168] md:text-[17px]">
                    <a href="#about" className="transition hover:text-[#C08A6E]">
                        About
                    </a>
                    <a href="#services" className="transition hover:text-[#C08A6E]">
                        Services
                    </a>
                    <a href="#contact" className="transition hover:text-[#C08A6E]">
                        Contact
                    </a>
                </nav>


                {/* Social Links */}
                <div className="flex flex-wrap items-start gap-x-5 gap-y-6 text-sm text-[#777168] md: text-[17px]">
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-[#C08A6E]"
                    >
                        Instagram ↗
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-[#C08A6E]"
                    >
                        LinkedIn ↗
                    </a>

                    <a
                        href="#top"
                        className="fixed bottom-15 mt-8 right-6 z-50 rounded-full border border-white/30 bg-white/70 px-5 py-3 text-sm text-[#2B2925] shadow-lg backdrop-blur-md transition hover:bg-[#C08A6E] hover:text-white md:bottom-15 md:right-8"
                    >
                        Back to Top ↑
                    </a>
                </div>


            </div>

            {/* Copyright */}
            <div className="mt-10 flex flex-col gap-2 border-t border-[#D9D2C7] pt-5 text-xs text-[#8A857C] sm:flex-row sm:items-center sm:justify-between md:text-[17px]">
                <p> @ 2026. Copyrights All rights reserved.</p>
                <p>Developed by <span className="text-[#c08a6e]">RAVD Tech</span>.</p>

            </div>
        </footer>
    );
};

export default Footer;