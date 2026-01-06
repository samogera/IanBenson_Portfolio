import { motion } from 'framer-motion';
import { profileInfo } from '../data_new';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-black/40 z-0" />
                {/* Placeholder for Video Background - Darker, grittier */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale contrast-125" />
            </div>

            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center md:items-start text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='mb-2 overflow-hidden'
                >
                    <h2 className="text-accent font-header text-lg md:text-xl tracking-[0.3em] uppercase">
                        {profileInfo.title}
                    </h2>
                </motion.div>

                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-5xl sm:text-7xl md:text-[10rem] font-header font-bold text-white uppercase leading-none tracking-tighter mix-blend-difference"
                    >
                        {profileInfo.heroHeadingPrimary || "PRECISION"}
                    </motion.h1>
                </div>

                <div className="overflow-hidden mb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="text-5xl sm:text-7xl md:text-[10rem] font-header font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-white md:ml-24 uppercase leading-none tracking-tighter"
                    >
                        {profileInfo.heroHeadingSecondary || "IN CHAOS"}
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-xl text-gray-400 text-lg md:text-xl font-light leading-relaxed md:ml-12 border-l-2 border-accent pl-6"
                >
                    {profileInfo.heroSubtext}
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-gray-500 cursor-pointer hover:text-accent transition-colors"
                onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
