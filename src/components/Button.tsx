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

const defaultStyles = "text p-2 rounded-md cursor-pointer flex items-center justify-around gap-1"

export const ButtonComp = (props: ButtonTypes) => {

    return <span onClick={props.onClick}
        className={`${defaultStyles} ${onVariantStyle[props.variant]} `}
    >
        {props.startIcon ? props.startIcon : null} {props.title}
    </span>
}