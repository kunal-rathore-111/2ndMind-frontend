
interface InputCompInterface {
    placeholder: string,
    reference?: any
}

export const InputComponent = ({ placeholder, reference }: InputCompInterface) => {
    return <div className="my-2">
        < input placeholder={placeholder} type="text" className="px-4 py-2 border" ref={reference} />
    </div >
}