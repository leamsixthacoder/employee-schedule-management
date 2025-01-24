import '../index.css'
import './Button.css'
interface Props {
    buttonText: string
    parentMethod: () => void
    isSelected?: boolean
    large?: boolean
    success?: boolean
    custom?:string 
}
export function Button ({buttonText, parentMethod, isSelected, large, success, custom}:Props) {
    return (
        <button className={`${custom ? `${custom}`: 'button'}  ${isSelected ? 'selected' : ''} ${large ? 'large':''}  ${success ? 'success': ''}`} onClick={parentMethod}>{buttonText}</button>
    )
}