import type { ReactElement } from "react"

interface ButtonTypes {
    variant: "primary" | "secondary",
    title: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick?: () => void,
}
const onVariantStyle = {
    "primary": "bg-purple-400",
    "secondary": "bg-blue-200"
}

const defaultStyles = "text p-2 rounded-md cursor-pointer flex items-center gap-1 "

export const ButtonComp = (props: ButtonTypes) => {

    return <span
        className={`${defaultStyles} ${onVariantStyle[props.variant]} `}
    >
        {props.startIcon}  {props.title}
    </span>
}