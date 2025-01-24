/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from "react-select";
import { FaCircleUser } from "react-icons/fa6";
import '../index.css'
interface Props {
    label: string
    options: any[]
    selectedValue: any,
    onSelect: (selectedOption: any) => void
    setSelectedValue: any
    isLoading: boolean
}


export function Dropdown({ label, options, selectedValue, onSelect, setSelectedValue, isLoading }: Props) {
    const handleSelected = (selectedOption: any) => {
        onSelect(selectedOption)
        setSelectedValue(selectedOption);
    }
    return (
        <div className="container">
            <label className="label" htmlFor="" >{label}</label>
            <FaCircleUser className="icon" />
            <div className="input-container">
                <Select
                    options={options}
                    value={selectedValue}
                    className="input"
                    onChange={handleSelected}
                    isDisabled={false}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}