import { FC } from "react";

interface IButtons{
    onClick : ()=>void
    label:string
    className ?: string
}
const Buttons : FC<IButtons> = (props)=>{
    const { label,onClick, className} = props
    return(
        <button onClick={onClick} className={className} type="button">
            {label}
        </button>
    )
}
export default Buttons