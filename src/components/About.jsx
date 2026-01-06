import { motion } from 'framer-motion';
import { Award, Camera, Clapperboard, Film, User, Briefcase, MapPin, Monitor, Heart, Coffee } from 'lucide-react';
import { profileInfo, experience, skills } from '../data_new';

const About = () => {
    return (
        <div className="bg-background min-h-screen text-text pt-24 font-sans selection:bg-accent selection:text-white">
            {/* Background Texture - adding film grain or subtle texture concept */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* Hero Section - Personal Statement */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-6xl md:text-9xl font-header font-bold mb-8 text-white uppercase tracking-tighter leading-[0.85]">
                            I See <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-600">The Frame</span>
                        </h1>
                        <div className="h-2 w-32 bg-accent mb-10" />

                        <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed font-light">
                            "It's not just about recording an event; it's about capturing the <span className="text-white font-medium italic">emotion</span> that makes it unforgettable."
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-12 gap-12 items-center mt-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="md:col-span-7 prose prose-lg prose-invert text-gray-400"
                        >
                            <p className="mb-6">
                                I'm <strong className="text-white">Ian Benson Mokaya</strong>, a specialized videographer based in <strong className="text-white">Nairobi, Kenya</strong>.
                                My journey didn't start in a classroom; it started with a curiosity for how the world looks through a lens.
                            </p>
                            <p className="mb-6">
                                From the high-stakes, split-second action of the <strong className="text-accent">Safari 7s</strong> to the meticulous framing required for <strong className="text-accent">premium live coverage</strong>, I've honed a style that balances technical precision with raw storytelling. I don't just operate a camera; I anticipate the moment.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-8 border-l-2 border-accent/20 pl-6 py-2">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Heart className="w-5 h-5 text-accent" />
                                    <span>Fuelled by narrative cinema</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <MapPin className="w-5 h-5 text-accent" />
                                    <span>Nairobi, Global Mindset</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="md:col-span-5 relative"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {/* Personalized Image Container */}
                            <div className="relative z-10 group">
                                <div className="absolute inset-0 bg-accent/20 translate-x-3 translate-y-3 rounded-sm z-0 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
                                <div className="absolute inset-0 bg-white/5 border border-white/10 -translate-x-3 -translate-y-3 rounded-sm z-0 transition-transform group-hover:-translate-x-4 group-hover:-translate-y-4" />

                                <div className="relative rounded-sm overflow-hidden aspect-[4/5] border border-white/10 bg-background">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-10" />

                                    <img
                                        src="/ian-benson.jpg"
                                        alt="Ian Benson Mokaya - Videographer"
                                        className="w-full h-full object-cover transition-all duration-700 filter grayscale-[20%] group-hover:grayscale-0 scale-100 group-hover:scale-110"
                                    />

                                    <div className="absolute bottom-6 left-6 z-20">
                                        <div className="overflow-hidden">
                                            <h3 className="text-white font-header text-4xl uppercase leading-none drop-shadow-md translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                                Visual<br />Artist
                                            </h3>
                                        </div>
                                        <div className="h-1 w-0 group-hover:w-16 bg-accent mt-3 shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-700 delay-100" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Dynamic Stats / Philosophy Section */}
            <section className="py-20 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                        {[
                            { label: "Years Experience", value: "5+" },
                            { label: "Broadcast Events", value: "20+" },
                            { label: "Narrative Projects", value: "10+" },
                            { label: "Location", value: "Nairobi" }
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-4"
                            >
                                <div className="text-4xl md:text-5xl font-header font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-sm font-mono text-accent uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Timeline - Netflix/Cinematic Style */}
            <section className="py-24 px-6 relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-header font-bold text-white mb-20 md:mb-32 text-center uppercase tracking-widest"
                    >
                        The Journey
                    </motion.h2>

                    <div className="space-y-24 relative">
                        {/* Center Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" />

                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 align-top ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-black border-2 border-accent z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                                <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                                    <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-accent mb-4 border border-white/5">{job.year}</span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{job.role}</h3>
                                    <h4 className="text-lg text-gray-400 mb-6">{job.company}</h4>

                                    {/* Mobile only description */}
                                    <div className="md:hidden text-gray-400 text-sm leading-relaxed border-l border-white/10 pl-4 py-2">
                                        {job.description}
                                        <div className="mt-2 text-xs text-accent font-mono uppercase">{job.projects}</div>
                                    </div>
                                </div>

                                <div className={`flex-1 hidden md:block pl-16 ${index % 2 === 0 ? 'text-left' : 'text-right pr-16 pl-0'}`}>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-4">
                                        {job.description}
                                    </p>
                                    <div className="text-sm font-bold text-accent font-header uppercase tracking-wider">{job.projects}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Arsenal - Cards */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-header font-bold text-white mb-16 text-center uppercase"
                    >
                        Arsenal
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Gear', icon: Camera, items: skills.gear },
                            { title: 'Workflow', icon: Clapperboard, items: skills.core },
                            { title: 'Software', icon: Monitor, items: skills.software }
                        ].map((category, idx) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-black p-10 overflow-hidden border border-white/10 transition-all hover:border-accent/40"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <category.icon size={100} />
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-header font-bold text-white mb-8 flex items-center gap-3">
                                        <category.icon className="w-5 h-5 text-accent" />
                                        {category.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {category.items.map(item => (
                                            <span key={item} className="text-sm font-mono text-gray-400 border-b border-white/10 pb-1">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
