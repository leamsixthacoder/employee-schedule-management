import { FaClock } from "react-icons/fa6"
import { TimePicker } from "../TimePicker/TimePicker"
import './WeekShift.css'
interface Props {
    label: string
}
export function WeekShift({ label }: Props) {
    return (
        <div className="container">
            <label className="label" htmlFor="">{label}</label>
            <FaClock className="icon" />
            <div className="input-container">
                <div className="time-inputs">
                    <TimePicker label='Entrada' />
                    <TimePicker label='Salida' />
                    <TimePicker label='Almuerzo entrada' />
                    <TimePicker label='Almuerzo salida' />
                </div>

            </div>
        </div>
    )
}