

import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LandingPageNav() {
    return <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                <button onClick={() => { }} className="flex items-center gap-3 cursor-pointer">
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
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition text-sm"
                    >
                        How it Works
                    </button>
                    <button
                        onClick={() => { }}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition text-sm"
                    >
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