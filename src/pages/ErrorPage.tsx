import { motion } from 'framer-motion'
import { Brain, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center transition-colors duration-300">
                        <Brain className="w-10 h-10 text-white dark:text-black" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h1 className="text-8xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                        404
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                        Page not found
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-3"
                >
                    <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
                        We couldn't find the page you're looking for. It might have been moved or deleted.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex gap-4 justify-center pt-4"
                >
                    <Link to="/">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-medium shadow-lg hover:shadow-2xl transition-all duration-800"
                        >
                            <Home className="w-5 h-5" />
                            Go Home
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}