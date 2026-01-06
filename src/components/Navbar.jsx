import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cvLink } from '../data_new';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Work', href: '/#showcase' }, // Changed to hash link for home page sections
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/#contact' }
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-xl md:text-2xl font-header font-bold text-white tracking-widest uppercase z-50">
                    Ian Benson <span className="text-accent">Mokaya</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href.startsWith('/#') && location.pathname === '/' ? link.href.substring(1) : link.href} // Handle hash interaction
                            onClick={(e) => {
                                if (link.href.startsWith('/#') && location.pathname === '/') {
                                    e.preventDefault();
                                    const element = document.querySelector(link.href.substring(1));
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className={`text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors ${location.pathname === link.href ? 'text-accent' : 'text-gray-300'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={cvLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 border border-accent text-accent px-4 py-2 rounded hover:bg-accent hover:text-white transition-all duration-300 uppercase text-sm font-bold tracking-wider"
                    >
                        <FileText size={16} />
                        <span>Resume</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href.startsWith('/#') && location.pathname === '/' ? link.href.substring(1) : link.href}
                                    onClick={(e) => {
                                        if (link.href.startsWith('/#') && location.pathname === '/') {
                                            e.preventDefault();
                                            const element = document.querySelector(link.href.substring(1));
                                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                        setIsMenuOpen(false);
                                    }}
                                    className="text-3xl font-header font-bold text-white uppercase tracking-widest hover:text-accent transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href={cvLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-accent border border-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition-all"
                            >
                                <FileText size={20} />
                                <span>Download Resume</span>
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
