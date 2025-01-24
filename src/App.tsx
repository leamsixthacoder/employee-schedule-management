/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Button, Dropdown, Header, Input, Switch, WeekCalendar, WeekShift } from './components'


function App() {
    const [isFingerPrint, setIsFingerPrint] = useState(false)
    const [loading, setLoading] = useState(false)
    const [overtime, setOvertime] = useState(false)
    const [selectedValue, setSelectedValue] = useState<any>(null);
    const [employee, setEmployee] = useState([])
    const [shift, setShift] = useState([])
    const [selectedEmployee, setSelectedEmployee] = useState<any>()
    const [selectedShift, setSelectedShift] = useState<any>()
    const [selectedDay, setSelectedDay] = useState(false)
    const handleSelectedDay = (selectedDays: number[]) => setSelectedDay(!selectedDay)


    useEffect(() => {

        const fetchEmployee = async () => {
            setLoading(true)
            try {
                const response = await fetch("http://localhost:5000/employees")
                if (!response.ok) throw new Error("Error al obtener datos")
                const jsonEmployee = await response.json()
                setEmployee(jsonEmployee)
            } catch (error) {
                console.error(error as string)
            } finally {
                setLoading(false)
            }
        }
        const fetchShift = async () => {
            setLoading(true)
            try {
                const response = await fetch("http://localhost:5001/shift")
                if (!response.ok) throw new Error("Error al obtener datos")
                const jsonShift = await response.json()
                setShift(jsonShift)
            } catch (error) {
                console.error(error as string)
            } finally {
                setLoading(false)
            }
        }
        fetchEmployee()
        fetchShift()

        
    }, [])
    const handleSelectEmployee = async (selectedOption: any) => {
        setSelectedEmployee(null)
        setSelectedShift(null)
        const newEmployee = employee.find((e: any) => e.employeeId === selectedOption.value)
        setSelectedEmployee(newEmployee)
        const newShift = shift.filter((s: any) => s.employeeId === selectedOption.value)
        console.log(newShift)
        setSelectedShift(newShift)
    }

    const options = () => {
        return employee.map((key: { employeeId: any; name: any; }) => ({
            value: key.employeeId,
            label: `${key.employeeId} - ${key.name}`

        }))
    }
    return (
        <>
            <Header headerText="Mantenimiento turno empleado" />
            <div className='employee-details'>
                <Dropdown label='Empleado' options={options()} selectedValue={selectedValue} setSelectedValue={setSelectedValue} isLoading={loading} onSelect={handleSelectEmployee} />
                <Input label='Posición' isDisable value={selectedEmployee?.position} />
            </div>
            <div className='switch-details'>
                <Switch label='Poncha reloj' isOn={isFingerPrint} onColor="rgb(47, 179, 68, 1)" handleToggle={() => setIsFingerPrint(!isFingerPrint)} iconType='finger' />
                <Switch label='Horas Extras' isOn={overtime} onColor="rgb(47, 179, 68, 1)" handleToggle={() => setOvertime(!overtime)} iconType='overtime' />
            </div>
            <div className='shift-details'>
                <WeekCalendar parentMethod={handleSelectedDay} label='Dias' selectedShift={selectedShift}/>
                {/* <div className='time'>
                    <WeekShift label='Hora' />
                </div> */}
            </div>

            <div className='actions-container'>
                <Button large buttonText='Cancelar' parentMethod={() => console.log()} />
                <Button success large buttonText='Guardar' parentMethod={() => console.log()} />
            </div>

        </>
    )

}

export default App
