import { Brain } from "lucide-react";
import { Link } from "react-router-dom";


export function LandingFooter() {
    return <footer className="py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3  cursor-pointer"
                    onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
                    <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center transition-colors duration-300">
                        <Brain className="w-5 h-5 text-white dark:text-black" />
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                        2ndMind
                    </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                    © 2026 2ndMind. Your second brain.
                </p>

                <div className="flex gap-8">
                    {[
                        { to: '/privacy', label: 'Privacy' },
                        { to: '/terms', label: 'Terms' },
                        { to: '/contact', label: 'Contact' }
                    ].map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition text-sm"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </footer>
}