import { motion } from 'framer-motion';
import { skills } from '../data_new';
import { Camera, Monitor, Cpu, Layers } from 'lucide-react';

const TechStack = () => {
    return (
        <section id="skills" className="py-24 bg-neutral-900/30">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-header text-white mb-4">Technical Arsenal</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Industry standard equipment and software for high-end production.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Gear */}
                    <SkillCard
                        title="Camera Gear"
                        items={skills.gear}
                        icon={<Camera size={32} className="text-accent" />}
                        delay={0}
                    />

                    {/* Software */}
                    <SkillCard
                        title="Post-Production"
                        items={skills.software}
                        icon={<Monitor size={32} className="text-accent" />}
                        delay={0.1}
                    />

                    {/* Core Skills */}
                    <SkillCard
                        title="Core Competencies"
                        items={skills.core}
                        icon={<Layers size={32} className="text-accent" />}
                        delay={0.2}
                    />
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ title, items, icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-background border border-white/5 p-8 hover:border-accent/50 transition-colors group"
    >
        <div className="mb-6 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <h3 className="text-2xl font-header text-white mb-6 group-hover:text-accent transition-colors">{title}</h3>
        <ul className="space-y-3">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-400 border-b border-white/5 pb-2 last:border-0 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    {item}
                </li>
            ))}
        </ul>
    </motion.div>
);

export default TechStack;
