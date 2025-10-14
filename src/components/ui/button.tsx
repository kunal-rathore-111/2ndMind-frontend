
interface buttonProps {
    variant: 'primary' | 'secondary',
    size: 'sm' | 'md' | 'lg',
    text: string,
    startIcon?: any,
    endIcon?: any,
    onClick: () => void;
}
const variants = {
    "primary": 'bg-purple-300',
    "secondary": 'bg-purple-600',

}
const defaultStyles = "rounded-md cursor";

const size = {
    "sm": "p-1",
    "md": "p-2",
    "lg": "p-4",
    "xl": "p-6",

}

export const Button = (props: buttonProps) => {
    return <button className={`${variants[props.variant]} ${defaultStyles} ${size[props.size]}`}>{props?.startIcon} {props.text} {props?.endIcon}</button>
}
