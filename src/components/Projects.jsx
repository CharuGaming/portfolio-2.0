import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'MindSpace LMS',
            description:
                'MindSpace is a full stack LMS built with the MERN stack, featuring role-based access (Student, Teacher, Admin), course management, payment slip based enrollment, and AI-powered study tools.',
            image:
                'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
            tags: ['MongoDB', 'Express', 'React', 'Node.js', 'AI'],
            links: {
                demo: '#',
                github: '#',
            },
        },
        // Add more projects here as needed
    ];

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4 relative inline-block">
                        ONGOING PROJECTS
                        <span className="absolute -bottom-2 right-1/2 transform -translate-x-1/2 md:translate-x-0 md:right-0 w-24 h-1 bg-primary rounded-full"></span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="flex flex-col lg:flex-row group gap-8 border border-white glass bg-white/40 rounded-3xl overflow-hidden hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500"
                        >
                            {/* Project Image */}
                            <div className="lg:w-1/2 overflow-hidden relative border-r border-gray-100">
                                <div className="absolute inset-0 bg-black/5 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover min-h-[300px] transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>

                            {/* Project Info */}
                            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">


                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-poppins group-hover:text-primary transition-colors duration-300 relative z-10">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 text-lg leading-relaxed mb-8 font-inter relative z-10">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-8 relative z-10">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-white border border-gray-200 shadow-sm rounded-md text-sm text-gray-700 font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center gap-4 mt-auto relative z-10">
                                    <motion.a
                                        href={project.links.demo}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-black text-white rounded-lg font-medium shadow-md transition-colors cursor-pointer group/btn"
                                    >
                                        <span>View Project</span>
                                        <ExternalLink size={18} className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </motion.a>
                                    <motion.a
                                        href={project.links.github}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 shadow-sm rounded-lg font-medium transition-colors cursor-pointer group/btn2"
                                    >
                                        <Github size={18} className="transform group-hover/btn2:scale-110 transition-transform" />
                                        <span>Source Code</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
