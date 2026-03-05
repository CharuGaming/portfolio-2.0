import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, Mail } from 'lucide-react';

const SocialSidebar = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: <Linkedin size={20} />,
            url: 'https://linkedin.com/in/binojcharuka',
            color: 'hover:text-black hover:border-black',
        },
        {
            name: 'GitHub',
            icon: <Github size={20} />,
            url: 'https://github.com/binojcharuka',
            color: 'hover:text-black hover:border-black',
        },
        {
            name: 'Instagram',
            icon: <Instagram size={20} />,
            url: 'https://instagram.com/binojcharuka',
            color: 'hover:text-black hover:border-black',
        },
        {
            name: 'Email',
            icon: <Mail size={20} />,
            url: 'mailto:hello@example.com',
            color: 'hover:text-primary hover:border-primary',
        },
    ];

    return (
        <div className="fixed left-6 bottom-0 z-40 hidden lg:flex flex-col items-center">
            <div className="flex flex-col space-y-4 mb-6">
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                            delay: 0.5 + index * 0.1,
                        }}
                        className={`p-3 rounded-full border border-gray-200 text-gray-400 glass transition-all duration-300 ${link.color} hover:shadow-lg`}
                        aria-label={link.name}
                    >
                        {link.icon}
                    </motion.a>
                ))}
            </div>
            {/* Vertical Line */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: 96 }}
                transition={{ duration: 1, delay: 1 }}
                className="w-px bg-gray-300 block"
            ></motion.div>
        </div>
    );
};

export default SocialSidebar;
