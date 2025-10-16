import type { ReactElement } from "react"


interface ButtonInterface {
    variant: 'primary' | 'secondary'
    text: string,
    size: 'sm' | 'md' | 'lg',
    onClick: () => void,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
}

const defaultStyles = "flex rounded-md cursor-pointer items-center gap-1"

const size = {
    'sm': 'p-3',
    'md': 'p-5',
    'lg': 'p-7',
}

const variants = {
    'primary': "bg-purple-500",
    'secondary': "bg-purple-400",
}

export const Button = (props: ButtonInterface) => {

    return <button className={`${size[props.size]} ${variants[props.variant]} ${defaultStyles}`}>{props?.startIcon}{props.text} {props?.endIcon}</button>
}

