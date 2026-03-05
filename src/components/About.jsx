import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4 relative inline-block">
                        ABOUT ME
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 md:-translate-x-0 md:left-0 w-16 h-1 bg-primary rounded-full"></span>
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row items-stretch gap-12 lg:gap-20">
                    {/* Left Side: Photo Container */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="w-full md:w-5/12 lg:w-4/12 flex justify-center items-end"
                    >
                        <div className="relative w-full h-full flex justify-center items-end">
                            <img
                                src="/6.png"
                                alt="About Binoj"
                                className="w-full h-auto max-w-[80%] md:max-w-[100%] max-h-full object-contain object-bottom"
                            />
                        </div>
                    </motion.div>

                    {/* Right Side: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        className="w-full md:w-7/12 lg:w-8/12 flex items-stretch"
                    >
                        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden h-full flex flex-col justify-center w-full">

                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6 font-inter relative z-10">
                                I'm a Computer Science undergraduate at Wayamba University,
                                passionate about building web applications and UI/UX design using
                                Figma. My focus is the <span className="text-gray-900 font-semibold">MERN stack</span> - MongoDB,
                                Express, React, and Node.js and I love exploring how AI can
                                supercharge development workflows.
                            </p>

                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 font-inter relative z-10">
                                Beyond coding, I run a YouTube channel. I believe creativity and
                                code aren't separate - they push each other forward.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-6 relative z-10">
                                {['MERN Stack', 'UI/UX Design', 'Content Creation'].map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-gray-700 text-sm font-medium tracking-wide shadow-sm"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
