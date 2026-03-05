import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
        >
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-12 lg:gap-8">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center lg:text-left z-10"
                >

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold font-poppins text-gray-900 mb-6 leading-tight"
                    >
                        Hi, I'm <br />
                        <span className="text-gray-900">
                            Binoj Charuka
                        </span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-3xl text-gray-600 font-medium mb-8"
                    >
                        Developer <span className="text-gray-300 px-2">|</span> Creator{' '}
                        <span className="text-gray-300 px-2">|</span> Learner
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-gray-500 max-w-lg mx-auto lg:mx-0 text-lg mb-10 leading-relaxed font-inter"
                    >
                        Building modern, responsive web applications with a focus on seamless
                        user experiences and clean, glassy design aesthetics.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                className="block w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-black shadow-lg cursor-pointer text-center transition-colors"
                            >
                                View My Work
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="flex-1 flex justify-center lg:justify-center z-10 w-full max-w-md lg:max-w-none"
                >
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]"
                    >


                        {/* Image Container */}
                        <div className="relative w-full h-full z-10 flex justify-center items-center">
                            <img
                                src="/5.png"
                                alt="Binoj Charuka"
                                className="w-full h-auto max-w-[80%] md:max-w-[100%] object-contain drop-shadow-lg"
                            />
                        </div>


                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
            >
                <span className="text-xs text-gray-400 mb-2 uppercase tracking-widest font-semibold">
                    Scroll Down
                </span>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-8 h-12 border-2 border-gray-300 glass rounded-full flex justify-center p-2 hover:border-gray-400 transition-colors"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                            className="w-1 h-2.5 bg-gray-400 rounded-full"
                        />
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
