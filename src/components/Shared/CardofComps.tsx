import type { LucideIcon } from "lucide-react"

const colorMap: Record<string, string> = {
    'yellow-300': '#ffe047',
    'blue-400': '#38bdf8',
    'green-400': '#22c55e',
    'red-400': '#ff4d6d',
    'purple-400': '#a855f7',
    'cyan-400': '#06f7ff',
}



export function Card({ Icon, title, description, points, classname }: { Icon?: LucideIcon, title: string, description: string, points?: string[], classname: string }) {

    const color = colorMap[classname] || "#ffffff"

    return <div className="group flex flex-col m-3 px-7 py-6 rounded-2xl bg-black/80 gap-5 border border-white/10 hover:border-white/20 hover:bg-black/70 transition-all duration-700">
        <div className="flex items-center gap-3">
            {Icon ? <div>
                <span className="flex p-3 rounded-lg transition-colors duration-700" style={{ backgroundColor: `${color}15` }}>
                    <Icon className={`h-7 w-7 `} style={{ color }} />
                </span>
            </div> : null}
            <h1 className="font-bold text-3xl text-white/90 group-hover:text-white transition-colors duration-700">{title}</h1>

        </div>
        <p className="text-white/70 text-base leading-relaxed group-hover:text-white/80 transition-colors duration-700">{description}</p>
        {
            points ?
                points.map(x =>
                    <span className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-700" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                        <p className="text-white/70 text-base group-hover:text-white/80 transition-colors duration-700">{x}</p>
                    </span>)
                :
                ""
        }
    </div >
}