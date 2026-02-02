export function SubmitButton({ buttonName }: { buttonName: string }) {
    return <div className="bg-black text-white p-3 rounded-xl text-center transition-all duration-700 font-bold cursor-pointer text-lg w-full">
        <span className="transition-all duration-500 hover:scale-150">
            {buttonName}
        </span>
    </div>
}