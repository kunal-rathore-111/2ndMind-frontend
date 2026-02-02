

import { motion } from 'framer-motion'
import { ArrowLeft, Brain } from 'lucide-react'
import { Link } from 'react-router-dom'


export function PrivacyPageNav() {
    return <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/85 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                <button onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-3 cursor-pointer ">
                    <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center transition-colors duration-300">
                        <Brain className="w-6 h-6 text-white dark:text-black" />
                    </div>
                    <span className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">2ndMind</span>
                </button>


                <div className="flex  gap-4 dark:text-white">


                    <Link to={'/'} className="flex gap-1 cursor-pointer hover:mr-4 transition-all duration-600 min-w-100 items-center justify-end">
                        <ArrowLeft className="w-4 h-4" /> Back to home
                    </Link>
                </div>
            </div>
        </div>
    </motion.nav>
}