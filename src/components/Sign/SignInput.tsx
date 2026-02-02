
interface InputsDTO {
    title: string,
    holder: string
}
export function SignInput({ title, holder }: InputsDTO) {
    return <span className="flex flex-col">
        <span className="text-sm mb-1">{title}</span>
        <input type="text" className="border-1 rounded-lg p-1.5 pl-4 border-slate-400" placeholder={`${holder}`} />
    </span>
}