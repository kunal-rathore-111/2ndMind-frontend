
interface InputsDTO {
    title: string,
    holder: string
}
export function SignInput({ title, holder }: InputsDTO) {
    return <span className="flex flex-col">
        <span className="text-sm mb-1 text-gray-900 dark:text-white transition-colors duration-300">{title}</span>
        <input type="text" className="border-1 rounded-lg p-1.5 pl-4 border-slate-400 dark:border-slate-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-colors duration-300" placeholder={`${holder}`} />
    </span>
}