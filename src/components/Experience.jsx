import { motion } from 'framer-motion';
import { experience } from '../data_new';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-background border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-header text-white mb-2">Experience</h2>
                    <div className="h-1 w-20 bg-accent" />
                </motion.div>

                <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pb-12">
                    {experience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Node */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                <h3 className="text-2xl font-header text-white">{item.role}</h3>
                                <span className="text-accent font-bold font-header text-lg">{item.year}</span>
                            </div>

                            <h4 className="text-xl text-gray-400 mb-4 font-light">{item.company}</h4>

                            <div className="bg-white/5 p-6 rounded-sm border-l-2 border-white/10 hover:border-accent transition-colors">
                                <p className="text-white font-medium mb-2">{item.projects}</p>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
