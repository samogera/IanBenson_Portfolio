import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '../data_new';
import { Play, X, ExternalLink } from 'lucide-react';

const Showcase = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="work" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 border-l-4 border-accent pl-6"
                >
                    <h2 className="text-4xl md:text-6xl font-header text-white mb-2">Selected Work</h2>
                    <p className="text-gray-400">Cinematic narrative & high-pressure broadcast</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            onClick={() => setSelectedProject(study)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative overflow-hidden bg-gray-900 rounded-sm cursor-pointer block ${index === 0 ? 'md:col-span-2' : ''
                                }`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                                style={{ backgroundImage: `url(${study.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-center space-x-2 text-accent text-sm font-bold uppercase tracking-widest mb-2">
                                    <span>{study.category}</span>
                                    <span className="w-1 h-1 bg-white rounded-full" />
                                    <span>{study.role}</span>
                                </div>
                                <h3 className="text-3xl font-header text-white mb-2">{study.title}</h3>
                                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-sm line-clamp-4">
                                    {study.description}
                                </p>
                            </div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                                <div className="w-16 h-16 rounded-full bg-accent/90 backdrop-blur flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                                    <Play className="text-white fill-white" size={24} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-sm border border-white/10 shadow-2xl scrollbar-hide"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative aspect-video w-full bg-black">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${selectedProject.videoId}?autoplay=1&rel=0&modestbranding=1`}
                                    title={selectedProject.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0"
                                ></iframe>
                            </div>

                            <div className="p-8 flex flex-col md:flex-row justify-between items-start gap-8 bg-neutral-900">
                                <div className='flex-1'>
                                    <h3 className="text-3xl font-header text-white mb-2">{selectedProject.title}</h3>
                                    <div className="flex items-center space-x-3 text-accent text-sm font-bold uppercase tracking-widest mb-4">
                                        <span>{selectedProject.category}</span>
                                        <span className="w-1 h-1 bg-white rounded-full" />
                                        <span>{selectedProject.role}</span>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed max-w-2xl text-lg">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <a
                                    href={`https://www.youtube.com/watch?v=${selectedProject.videoId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 flex items-center space-x-2 px-6 py-3 bg-white/5 hover:bg-accent text-white font-header font-bold uppercase tracking-wide transition-colors rounded-sm"
                                >
                                    <span>Watch on YouTube</span>
                                    <ExternalLink size={18} />
                                </a>
                            </div>

                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-accent rounded-full text-white transition-colors z-10"
                                aria-label="Close modal"
                            >
                                <X size={24} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Showcase;
