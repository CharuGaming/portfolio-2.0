import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            institution: 'WAYAMBA UNIVERSITY OF SRI LANKA',
            degree: 'Undergraduate | BSc in Applied Sciences',
            status: 'Ongoing',
            icon: <GraduationCap size={24} />,
            color: 'bg-primary'
        },
        {
            institution: 'ANANDA COLLEGE',
            degree: 'Secondary Education',
            status: 'Completed',
            icon: <School size={24} />,
            color: 'bg-gray-800'
        },
        {
            institution: 'Rajasinghe Central College',
            degree: 'Primary Education',
            status: 'Completed',
            icon: <BookOpen size={24} />,
            color: 'bg-gray-900'
        },
    ];

    return (
        <section id="education" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4 relative inline-block">
                        EDUCATION
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>

                    <div className="space-y-12 md:space-y-0">
                        {educationData.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center justify-between w-full md:mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Icon */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-gray-50 bg-white shadow-sm z-10 items-center justify-center text-gray-700"
                                >
                                    {item.icon}
                                </motion.div>

                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10 text-left md:text-right'
                                        }`}
                                >
                                    <div className="glass bg-white/60 p-8 rounded-2xl border border-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] relative hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 group">
                                        {/* Background glow block */}
                                        <div className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>

                                        {/* Mobile Icon */}
                                        <div className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center mb-4 ${item.color} text-white shadow-sm`}>
                                            {item.icon}
                                        </div>

                                        <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                            {item.institution}
                                        </h3>
                                        <p className="text-gray-600 font-medium font-inter mb-4">
                                            {item.degree}
                                        </p>
                                        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${item.status === 'Ongoing'
                                            ? 'bg-black text-white'
                                            : 'bg-gray-100 text-gray-600 border border-gray-200'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </div>
                                </motion.div>

                                {/* Spacer for the other side */}
                                <div className="hidden md:block w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
