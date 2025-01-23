/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaBusinessTime, FaFingerprint } from 'react-icons/fa6';
import './Switch.css';

interface Props {
    label: string
    isOn: boolean
    handleToggle: any
    onColor: any
    iconType: string
}
export function Switch({ label, isOn, handleToggle, onColor, iconType }: Props) {
    return (
        <div className="container">
            <label className="label" htmlFor="">{label}</label>
            {iconType === 'overtime' ? <FaBusinessTime className="icon" /> : <FaFingerprint className="icon" />}
            <div className='input-container'>
                <div className='switch'>
                    <input
                        checked={isOn}
                        onChange={ handleToggle}
                        className="react-switch-checkbox"
                        id={`react-switch-${iconType}`}
                        type="checkbox"
                    />
                    <label
                        style={{ background: isOn && onColor }}
                        className="react-switch-label"
                        htmlFor={`react-switch-${iconType}`}
                    >
                        <span className={`react-switch-button`} />
                    </label>
                </div>

            </div>
        </div>
    )
};

