const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-gray-200 glass mt-auto text-center">
            <div className="container mx-auto px-6 max-w-7xl">
                <p className="text-gray-600 font-inter text-sm md:text-base">
                    &copy; {currentYear} Binoj Charuka. All Rights Reserved.
                </p>
                <p className="text-gray-500 font-inter text-xs mt-2 font-medium tracking-wide">
                    Designed with <span className="text-primary font-bold px-1">&lt;/&gt;</span> and React.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
