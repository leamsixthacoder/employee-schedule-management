/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRepeat } from "react-icons/fa6";
import { Button } from "../Button/Button";

import './WeekCalendar.css'
import { useEffect, useState } from "react";
import { TimePicker } from "../TimePicker/TimePicker";
interface Props {
    label: string
    parentMethod: (selectedDays: number[]) => void
    selectedShift: any
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
export function WeekCalendar({ label, parentMethod, selectedShift }: Props) {
    const [selectedDays, setSelectedDays] = useState<number[]>([]);

    const [times, setTimes] = useState<Record<number, any>>({}); // Holds time data for each day


    useEffect(() => {
        const mappingDays = selectedShift?.map((shift: any) => {
            return {
                ShiftDay: shift.ShiftDay,
                HourBeg: shift.HourBeg,
                HourEnd: shift.HourEnd,
                HourTsBeg: shift.HourTsBeg,
                HourTsEnd: shift.HourTsEnd,
            }
        })

        const initialTimes = mappingDays?.reduce((acc: Record<number, any>, day: any) => {
            return acc[day.ShiftDay] = {
                HourBeg: day.HourBeg,
                HourEnd: day.HourEnd,
                HourTsBeg: day.HourTsBeg,
                HourTsEnd: day.HourTsEnd,
            }

        }, {})

        setSelectedDays(mappingDays?.map((day: any) => day.ShiftDay))
        setTimes(initialTimes)
    }, [selectedShift])

    const handleDayClick = (dayId: number) => {
        const isAlreadySelected = selectedDays?.includes(dayId);

        // Toggle the day in the selectedDays array
        const updatedSelectedDays = isAlreadySelected
            ? selectedDays.filter((id) => id !== dayId) // Remove day if already selected
            : [...selectedDays, dayId]; // Add day if not selected

        setSelectedDays(updatedSelectedDays);
        parentMethod(updatedSelectedDays);
    };

    const handleTimeChange = (dayId: number, field: string, value: string) => {
        setTimes((prevTimes) => ({
            ...prevTimes,
            [dayId]: {
                ...prevTimes[dayId],
                [field]: value, // Update specific time field for the given day
            },
        }));
        // parentMethod(selectedDays, {
        //     ...times,
        //     [dayId]: {
        //         ...times[dayId],
        //         [field]: value,
        //     },
        // }); // Pass updated times to the parent
    }

    // Utility function to parse ISO-like time
    const parseTime = (isoTime: string): string => {
        const date = new Date(isoTime);
        const hour = date.getHours() % 12 || 12; // Convert to 12-hour format
        const minute = date.getMinutes().toString().padStart(2, "0");
        const period = date.getHours() < 12 ? "AM" : "PM";
        return `${hour}:${minute} ${period}`;
    };

    return (
        <div className="container">
            <label className="label" htmlFor="">{label}</label>
            <FaRepeat className="icon" />
            <div className="week-container">
                {
                    days?.map(day => (
                        <>
                            <div key={day.id} className="shift-container">
                                <div className="day-container">
                                    <Button
                                        buttonText={day.name}
                                        isSelected={selectedDays?.includes(day.id)}
                                        parentMethod={() => handleDayClick(day.id)}
                                    />
                                </div>

                                {selectedDays?.includes(day.id) && (
                                    <div className="time-inputs">
                                        <TimePicker label='Entrada' initialTime={parseTime(times.HourBeg)}/>
                                        <TimePicker label='Salida' initialTime={parseTime(times.HourEnd)}/>
                                        <TimePicker label='Ent. almuerzo' initialTime={parseTime(times.HourTsBeg)}/>
                                        <TimePicker label='Sal. almuerzo' initialTime={parseTime(times.HourTsEnd)}/>
                                    </div>
                                )

                                }
                            </div>




                        </>

                    ))
                }

            </div>

        </div>
    )
}