import './Button.css'
interface Props {
    buttonText: string
    parentMethod: () => void
    isSelected?: boolean
    large?: boolean
    success?: boolean 
}
export function Button ({buttonText, parentMethod, isSelected, large, success}:Props) {
    return (
        <button className={`button ${isSelected ? 'selected' : ''} ${large ? 'large':''} ${success ? 'success': ''}`} onClick={parentMethod}>{buttonText}</button>
    )
}