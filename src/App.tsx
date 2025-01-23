import { useState } from 'react'
import { Button, Dropdown, Header, Input, Switch, WeekCalendar, WeekShift } from './components'


function App() {
    const [isFingerPrint, setIsFingerPrint] = useState(false)
    const [overtime, setOvertime] = useState(false)
    const [selectedDay, setSelectedDay] = useState(false)
    const handleSelectedDay = (selectedDays: number[]) => setSelectedDay(!selectedDay)
    
    
    return (
        <>
            <Header headerText="Mantenimiento turno empleado" />
            <div className='employee-details'>
                <Dropdown label='Empleado' />
                <Input label='Posición' isDisable />
            </div>
            <div className='shift-details'>
                <WeekCalendar parentMethod={handleSelectedDay} label='Dias' />
                <div className='time'>
                    <WeekShift label='Hora' />
                </div>
            </div>
            <div className='switch-details'>
                <Switch label='Poncha reloj' isOn={isFingerPrint} onColor="rgb(47, 179, 68, 1)" handleToggle={() => setIsFingerPrint(!isFingerPrint)} iconType='finger' />
                <Switch label='Horas Extras' isOn={overtime} onColor="rgb(47, 179, 68, 1)" handleToggle={()=> setOvertime(!overtime)} iconType='overtime' />
            </div>
            <div className='actions-container'>
                <Button large buttonText='Cancelar' parentMethod={() =>console.log()} />
                <Button success large buttonText='Guardar' parentMethod={() =>console.log()} />
            </div>

        </>
    )

}

export default App
