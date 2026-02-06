
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { FooterComp } from "../components/Shared/Footer";
import { ExtraPagesNav } from "../components/Shared/ExtraPagesNav";
import { useEffect } from "react";

export function ContactPage() {
    const socialLinks = [
        {
            name: "Email",
            description: "Send us an email anytime",
            value: "kunalworkspace111@gmail.com",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=kunalworkspace111@gmail.com",
            icon: Mail,
            color: "from-slate-600 to-slate-700",
            iconBg: "bg-slate-100 dark:bg-slate-800",
            iconColor: "text-slate-700 dark:text-slate-200",
        },
        {
            name: "GitHub",
            description: "Check out our open source code",
            value: "@2ndmind",
            href: "https://github.com/2ndmind",
            icon: Github,
            color: "from-slate-700 to-slate-900",
            iconBg: "bg-slate-100 dark:bg-slate-800",
            iconColor: "text-slate-800 dark:text-slate-100",
        },
        {
            name: "LinkedIn",
            description: "Connect with us professionally",
            value: "2ndMind",
            href: "https://linkedin.com/company/2ndmind",
            icon: Linkedin,
            color: "from-slate-600 to-slate-700",
            iconBg: "bg-slate-100 dark:bg-slate-800",
            iconColor: "text-slate-700 dark:text-slate-200",
        },
        {
            name: "Twitter",
            description: "Follow us for updates and tips",
            value: "@2ndmind",
            href: "https://twitter.com/2ndmind",
            icon: Twitter,
            color: "from-slate-600 to-slate-700",
            iconBg: "bg-slate-100 dark:bg-slate-800",
            iconColor: "text-slate-700 dark:text-slate-200",
        },
    ];

    useEffect(() => {
        scrollTo(0, 0)
    })
    return (
        <div className=" bg-white dark:bg-black transition-colors duration-300">

            <ExtraPagesNav navHeading="2ndMind" navSubHeading="Contact" useFor="others" />

            <div className="pt-32 pb-20 px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
                            Connect with us through any of these channels. We're always happy to hear from you!
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {socialLinks.map((link) => {
                            const Icon = link.icon;

                            return (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    whileHover={{ y: -2 }}
                                    className="group relative bg-white dark:bg-blue-900/20 rounded-2xl px-3 py-6 sm:p-8 border border-black/80 dark:border-white/80 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-500 shadow-sm hover:shadow-md"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />

                                    <div className="relative flex items-start gap-5">
                                        <div className={`w-14 h-14 ${link.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-105`}>
                                            <Icon className={`w-7 h-7 ${link.iconColor}`} />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                                                {link.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 transition-colors duration-300">
                                                {link.description}
                                            </p>
                                            <p className="text-base font-medium text-gray-900 dark:text-white transition-colors duration-300">
                                                {link.value}
                                            </p>
                                        </div>

                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-red-900 dark:bg-black/98 rounded-2xl p-8 text-white text-center transition-colors duration-500"
                    >
                        <h3 className="text-2xl font-semibold mb-3">Need Help?</h3>
                        <p className="text-gray-300 dark:text-gray-400 leading-relaxed mb-6">
                            For support inquiries, bug reports, or feature requests, please reach out via email
                            or open an issue on our GitHub repository. We typically respond within 24 hours.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=kunalworkspace111@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-white text-gray-900 rounded-xl font-medium hover:bg-gray-100 transition"
                            >
                                Email Support
                            </a>
                            <a
                                href="https://github.com/2ndmind/issues"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-gray-700 dark:bg-gray-600 text-white rounded-xl font-medium hover:bg-gray-600 dark:hover:bg-gray-500 transition"
                            >
                                Report an Issue
                            </a>
                        </div>
                    </motion.div>


                </div>
            </div>

            <FooterComp />
        </div>
    );
}