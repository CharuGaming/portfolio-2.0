import { motion } from 'framer-motion';
import { Palette, Code2, Film, Type, Video } from 'lucide-react';

const Skills = () => {
    const skills = [
        { title: 'UI/UX DESIGN', icon: <Palette size={32} /> },
        { title: 'FULL STACK DEVELOPER', icon: <Code2 size={32} /> },
        { title: 'VIDEO EDITING', icon: <Film size={32} /> },
        { title: 'TYPE SETTING', icon: <Type size={32} /> },
        { title: 'CONTENT CREATOR', icon: <Video size={32} /> },
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4 relative inline-block">
                        SKILLS
                        <span className="absolute -bottom-2 right-1/2 transform translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -8, scale: 1.05 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.1,
                                type: 'spring',
                                stiffness: 200,
                                damping: 15
                            }}
                            className="glass bg-white/60 border border-white rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-gray-200 hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] group transition-all cursor-default"
                        >
                            <div className="text-gray-400 group-hover:text-primary transition-colors duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold font-poppins text-gray-700 group-hover:text-gray-900 transition-colors duration-300 tracking-wide">
                                {skill.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
