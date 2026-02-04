import { motion } from 'framer-motion'
import { Brain, LogOut, Plus, Share2 } from 'lucide-react'
import { BackToHome } from '../Button/BackToHome'

interface NavDTO {
    useFor: "dashboard" | "others"
}

export function ExtraPagesNav({ useFor }: NavDTO) {
    return <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/85 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">

        <div className="max- mx-auto px-6 pt-2 lg:px-22">
            <div className="flex items-center justify-between h-20">
                <button onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-3 cursor-pointer ">
                    <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center transition-colors duration-300">
                        <Brain className="w-6 h-6 text-white dark:text-black" />
                    </div>
                    <span className='flex flex-col items-start'>
                        <span className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">2ndMind</span>
                        {useFor === "dashboard" ? <span className='text-white text-sm'>Dashboard</span>
                            : ""}
                    </span>
                </button>


                {useFor === "others" ? <div className="flex gap-4 dark:text-white">
                    <BackToHome />
                </div>
                    : <DashboardNavComps />
                }

            </div>
        </div>
    </motion.nav>
}

function DashboardNavComps() {
    return <div className='flex dark:text-white gap-4 items-center'>
        <span className='flex gap-2 items-center cursor-pointer py-1.5 px-3 rounded-xl border-1 border-white hover:bg-white hover:text-black text-[14px] transition-all duration-900'><Share2 className='w-4 h-4' /> <span className='hidden md:inline'>Share</span></span>

        <span className='flex md:gap-2 items-center cursor-pointer py-1.5 px-3 rounded-xl border  dark:bg-white text-[14px] dark:text-black 
        hover:bg-black hover:text-white  transition-all duration-900
        '><Plus className='w-4 h-4' /> <span className='hidden md:inline'>Add Content</span></span>

        <motion.span
            className='cursor-pointer'
            whileHover={{ x: 8 }}
            transition={{ duration: 0.7 }}
        >
            <LogOut className='w-5 h-5' />
        </motion.span>
    </div>
}