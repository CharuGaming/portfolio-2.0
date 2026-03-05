import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { User, Briefcase, GraduationCap, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About Me', label: 'About', to: 'about', icon: User },
        { name: 'Projects', label: 'Projects', to: 'projects', icon: Briefcase },
        { name: 'Education', label: 'Education', to: 'education', icon: GraduationCap },
        { name: 'Skills', label: 'Skills', to: 'skills', icon: Star },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
                    {/* Logo/Brand */}
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="text-2xl font-bold font-poppins cursor-pointer text-gray-900 tracking-wider flex items-center gap-2"
                    >
                        <span className="text-primary">&lt;</span>
                        BC
                        <span className="text-primary">/&gt;</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="text-primary before:w-full"
                                className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors relative group font-medium"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                        <motion.a
                            href="mailto:hello@example.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2.5 rounded-full font-medium transition-colors duration-300 bg-gray-900 text-white hover:bg-black shadow-md hover:shadow-lg"
                        >
                            Let's Talk
                        </motion.a>
                    </div>

                    {/* Mobile Menu Toggle (Removed) */}
                </div>

            </nav>

            {/* Mobile Bottom Navigation Dock (iOS Style) */}
            <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[100] pointer-events-auto w-[92%] max-w-[400px]">
                <div className="flex items-center justify-between px-2 py-2 bg-white/95 backdrop-blur-2xl border border-gray-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[2rem]">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="active-dock-item"
                                className="group relative flex flex-col items-center justify-center cursor-pointer w-[76px] h-[64px] rounded-[1.5rem] transition-all duration-300"
                            >
                                {/* Active Background Pill */}
                                <div className="absolute inset-0 bg-gray-100/90 rounded-[1.5rem] opacity-0 group-[.active-dock-item]:opacity-100 transition-opacity duration-300 -z-10"></div>

                                {/* Icon */}
                                <div className="flex items-center justify-center transition-all duration-300 text-gray-500 group-hover:text-gray-700 group-[.active-dock-item]:text-gray-900 mb-1 pointer-events-none">
                                    <Icon size={24} strokeWidth={2} />
                                </div>

                                {/* Text */}
                                <span className="text-[11px] font-semibold tracking-wide text-gray-500 group-hover:text-gray-700 group-[.active-dock-item]:text-gray-900 transition-colors duration-300 pointer-events-none">
                                    {link.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Navbar;
