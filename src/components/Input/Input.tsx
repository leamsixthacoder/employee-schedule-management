import { FaUserPlus } from "react-icons/fa6";
import '../index.css'
import './Input.css'
interface Props {
    label: string
    placeholder?: string
    isDisable: boolean
}
export function Input({ label, placeholder, isDisable }: Props) {
    return (
        <div className="container">
            <label className="label" htmlFor="">{label}</label>
            <FaUserPlus className="icon"/>
            <div className="input-container">
                <input disabled={isDisable} className="input input-plus" placeholder={placeholder} />
            </div>
        </div>
    )
}