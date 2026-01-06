import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { socials } from '../data_new';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-8xl font-header font-bold text-white mb-8 tracking-tight uppercase"
                >
                    Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Create</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16"
                >
                    <a href="mailto:ianbensonm2@gmail.com" className="group flex items-center space-x-3 text-2xl text-gray-300 hover:text-accent transition-colors">
                        <Mail className="group-hover:scale-110 transition-transform" />
                        <span>ianbensonm2@gmail.com</span>
                    </a>
                    <a href="tel:+254795386144" className="group flex items-center space-x-3 text-2xl text-gray-300 hover:text-accent transition-colors">
                        <Phone className="group-hover:scale-110 transition-transform" />
                        <span>+254 795 386 144</span>
                    </a>
                </motion.div>

                {/* Socials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="flex justify-center gap-8 mb-16"
                >
                    {socials.map((social) => {
                        const Icon = LucideIcons[social.icon] || LucideIcons.Link;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:scale-110 border border-white/10 hover:border-accent/50"
                                aria-label={social.name}
                            >
                                <Icon className="w-6 h-6 text-gray-300 group-hover:text-accent transition-colors" />
                            </a>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <p className="text-gray-500 text-sm uppercase tracking-widest">
                        © {new Date().getFullYear()} Ian Benson Mokaya. All Rights Reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
