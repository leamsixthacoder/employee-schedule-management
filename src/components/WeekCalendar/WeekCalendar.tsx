import { FaRepeat } from "react-icons/fa6";
import { Button } from "../Button/Button";
import './WeekCalendar.css'
import { useState } from "react";
interface Props {
    label: string
    parentMethod: (selectedDays: number[]) => void;
}
const days = [
    { id: 1, name: "Domingo" },
    { id: 2, name: "Lunes" },
    { id: 3, name: "Martes" },
    { id: 4, name: "Miércoles" },
    { id: 5, name: "Jueves" },
    { id: 6, name: "Viernes" },
    { id: 7, name: "Sábado" },
];
export function WeekCalendar({ label, parentMethod }: Props) {
    const [selectedDays, setSelectedDays] = useState<number[]>([]);
    const handleDayClick = (dayId: number) => {
        const isAlreadySelected = selectedDays.includes(dayId);

        // Toggle the day in the selectedDays array
        const updatedSelectedDays = isAlreadySelected
            ? selectedDays.filter((id) => id !== dayId) // Remove day if already selected
            : [...selectedDays, dayId]; // Add day if not selected

        setSelectedDays(updatedSelectedDays);
        parentMethod(updatedSelectedDays);
    };
    return (
        <div className="container">
            <label className="label" htmlFor="">{label}</label>
            <FaRepeat className="icon" />
            <div className="week-container">
                <div className="button-container">
                    {
                        days.map(day => (
                            <Button key={day.id} buttonText={day.name} isSelected={selectedDays.includes(day.id)} parentMethod={() => handleDayClick(day.id)} />
                        ))
                    }

                </div>
            </div>

        </div>
    )
}