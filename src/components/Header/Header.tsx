import { FaXmark, FaTrash, FaCalendarWeek } from 'react-icons/fa6'
import './Header.css'
interface Props {
    headerText: string
}
export function Header({ headerText }: Props) {
    return (
        <div className="container-header">
            <div className="left-content">
                <FaCalendarWeek className='icon' />
                <h3 className='header-text'>{headerText}</h3>
            </div>
            <div className="right-content">
                <FaTrash className='close'/>
                <a><FaXmark className='close'/></a>
            </div>
        </div>
    )
}

