export function SubmitButton({ buttonName }: { buttonName: string }) {
    return <div className="bg-black dark:bg-white text-white dark:text-black p-3 rounded-xl text-center transition-all duration-700 font-bold cursor-pointer text-lg w-full hover:bg-gray-800 dark:hover:bg-gray-200">
        <span className="transition-all duration-500 hover:scale-150">
            {buttonName}
        </span>
    </div>
}