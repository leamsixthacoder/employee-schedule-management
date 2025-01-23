import Select from "react-select";
import { FaCircleUser} from "react-icons/fa6";
import '../index.css'
interface Props {
    label: string
}
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
export function Dropdown({ label }: Props) {
    return (
        <div className="container">
            <label className="label" htmlFor="" >{label}</label>
            <FaCircleUser className="icon"/>
            <div className="input-container">
                <Select
                    options={options}
                    className="input"
                    onChange={() => console.log()}
                    isDisabled={false}
                    isLoading={false}
                />
            </div>
        </div>
    )
}