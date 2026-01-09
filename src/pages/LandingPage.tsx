


import { motion } from 'framer-motion'
import { Brain, ArrowRight, Bookmark, Check, Share2, Layers } from 'lucide-react';
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <LandingPageNav />
        <LandingHeroSection />
        <RemainingSections />
    </div>
}




function LandingPageNav() {
    return <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                <button onClick={() => { }}
                    className="flex items-center gap-3 cursor-pointer">
                    <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center transition-colors duration-300">
                        <Brain className="w-6 h-6 text-white dark:text-black" />
                    </div>
                    <span className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">2ndMind</span>
                </button>

                <div className="hidden md:flex items-center gap-10">
                    <button
                        onClick={() => { }}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition text-sm"
                    >
                        Features
                    </button>
                    <button
                        onClick={() => { }}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition text-sm">
                        How it Works
                    </button>
                    <button
                        onClick={() => { }}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition text-sm">
                        About
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <div className='text-amber-50'>
                        ThemeToggleIcon
                    </div>

                    <Link to="/signin">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-5 py-2.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition text-sm font-medium"
                        >
                            Sign In
                        </motion.button>
                    </Link>

                    <Link to="/signup">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
                        >
                            Get Started
                        </motion.button>
                    </Link>
                </div>
            </div>
        </div>
    </motion.nav>
}


function LandingHeroSection() {
    return <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-6 transition-colors duration-300">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300">
                                Your personal knowledge base</span>
                        </div>

                        <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6 transition-colors duration-300">
                            Organize your
                            <br />
                            digital life
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl transition-colors duration-300">
                            Save, organize, and share content from anywhere. Build your second brain with 2ndMind — a simple,
                            powerful knowledge management system.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap gap-4">
                        <Link to="/signup">
                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.2)" }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-medium shadow-lg hover:shadow-xl transition-colors duration-300"
                            >
                                Get Started Free
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>

                        <Link to="/signin">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-medium border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-300">
                                View Demo
                            </motion.button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex items-center gap-8 pt-4 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300"
                    >
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-600 dark:text-green-500" />
                            <span>Free forever</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-600 dark:text-green-500" />
                            <span>No credit card required</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative">
                    <div className="relative bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-2xl">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-gray-900 mb-1">Understanding React Hooks</h3>
                                        <p className="text-sm text-gray-500 line-clamp-2">Complete guide to modern React development</p>
                                        <div className="flex items-center gap-2 mt-3">
                                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">react</span>
                                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">tutorial</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-600"
                                            viewBox="0 0 24 24"
                                            fill="currentColor">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-gray-900 mb-1">
                                            Design Inspiration Thread</h3>
                                        <p className="text-sm text-gray-500 line-clamp-2">
                                            Collection of minimal UI patterns</p>
                                        <div className="flex items-center gap-2 mt-3">
                                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                                                design</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Bookmark className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-gray-900 mb-1">Productivity Tips Article</h3>
                                        <p className="text-sm text-gray-500 line-clamp-2">How to stay focused in 2024</p>
                                        <div className="flex items-center gap-2 mt-3">
                                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">productivity</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-white px-5 py-3 rounded-2xl shadow-xl border border-gray-200">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                <span className="font-semibold text-gray-900">
                                    250+ Saved</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
}


function RemainingSections() {
    const FeaturesArray = [
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
    return <section id="features" className="py-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
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
                {FeaturesArray.map((feature, index) => (
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

}