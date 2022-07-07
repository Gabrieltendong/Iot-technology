import { ChangeEventHandler } from 'react';
import styles from './style.module.scss'

interface InputProps{
    style?: any,
    label: string,
    onChange?: ChangeEventHandler
}

const Input = ({ style, label, onChange }: InputProps): JSX.Element => {
    return (
        <div
            className={`${styles.input_wrapper} ${style}`}
        >
            <label>{label}</label>
            <input
                onChange={onChange}
            />
        </div>
    )
}

export default Input;