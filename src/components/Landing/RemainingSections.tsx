import { motion } from 'framer-motion'
import { Bookmark, Layers, Share2, ArrowRight, Users, Library, Link2, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const FEATURES = [
    {
        icon: Bookmark,
        title: 'Save Anything',
        description: 'Capture content from YouTube, Twitter, articles, and any website. One place for everything.',
    },
    {
        icon: Layers,
        title: 'Smart Organization',
        description: 'Tag and categorize your content. Find what you need instantly with powerful search.',
    },
    {
        icon: Share2,
        title: 'Easy Sharing',
        description: 'Create shareable collections and collaborate with others. Your knowledge, amplified.',
    },
]

const HOW_IT_WORKS_STEPS = [
    { number: '01', title: 'Sign Up', description: 'Create your free account in seconds. No credit card needed.' },
    { number: '02', title: 'Add Content', description: 'Save videos, articles, tweets with one click. Tag and organize.' },
    { number: '03', title: 'Share & Grow', description: 'Create collections and share your knowledge with the world.' },
]

const STATS = [
    { number: '10K+', label: 'Active Users', icon: Users, color: 'blue' as const },
    { number: '500K+', label: 'Items Saved', icon: Library, color: 'purple' as const },
    { number: '50K+', label: 'Collections Shared', icon: Link2, color: 'green' as const },
    { number: '100%', label: 'Free Forever', icon: Sparkles, color: 'yellow' as const },
]

const COLOR_CLASSES = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
}




export function RemainingSections() {
    return (
        <div>
            <FeaturesSection />
            <HowItWorksSection />
            <AboutSection />
            <HowItWorksSection />
            <CTASection />
        </div>
    )
}


function FeaturesSection() {
    return (
        <section id="features" className="py-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                        Everything you need
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
                        Simple yet powerful features to organize your digital knowledge
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {FEATURES.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                                <feature.icon className="w-7 h-7 text-white dark:text-black" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-32 dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                        Simple to get started
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
                        Three steps to build your knowledge base
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {HOW_IT_WORKS_STEPS.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="text-center"
                        >
                            <div className="text-6xl font-bold text-gray-200 dark:text-gray-800 mb-6 transition-colors duration-300">{step.number}</div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{step.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function AboutSection() {
    return (
        <section id="about" className="py-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                            About 2ndMind
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                            2ndMind was created to solve a simple problem: we consume amazing content every day — videos,
                            articles, tweets, threads — but most of it gets lost in the noise. We forget where we saw
                            it, or we lose the link forever.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                            Your brain is amazing at thinking, connecting ideas, and creating — not at storing endless
                            links and information. That's where 2ndMind comes in. We built a simple, beautiful tool to
                            be your digital knowledge base — your second brain.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                            With 2ndMind, you can save anything from anywhere, organize it with tags, search through
                            it instantly, and share your collections with the world. It's free, it's simple, and it's
                            designed to help you build your knowledge base effortlessly.
                        </p>

                        <div className="pt-4">
                            <Link to="/signup">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                                    Start Your Journey
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {STATS.map((stat, index) => {
                                const Icon = stat.icon
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -3 }}
                                        className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 text-center"
                                    >
                                        <div className={`w-10 h-10 ${COLOR_CLASSES[stat.color]} rounded-lg flex items-center justify-center mx-auto mb-3 transition-colors duration-300`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">{stat.number}</div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300">{stat.label}</div>
                                    </motion.div>
                                )
                            })}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 text-white transition-colors duration-300"
                        >
                            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                            <p className="text-gray-300 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                                To empower everyone to build their personal knowledge base and make information
                                work for them — not the other way around.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function CTASection() {
    return (
        <section className="py-32 bg-gray-900 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-bold text-white mb-6">
                        Start organizing today
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Join thousands of users building their second brain with 2ndMind
                    </p>

                    <Link to="/signup">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition"
                        >
                            Get Started for Free
                            <ArrowRight className="w-6 h-6" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
