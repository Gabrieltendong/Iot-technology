import { ChangeEventHandler, KeyboardEventHandler, LegacyRef } from 'react';
import styles from './style.module.scss'

interface InputProps{
    style?: any,
    label: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    inputRef?: LegacyRef<HTMLInputElement>,
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>
}

const Input = ({ style, label, onChange, inputRef, onKeyDown }: InputProps): JSX.Element => {
    return (
        <div
            className={`${styles.input_wrapper} ${style}`}
        >
            <label>{label}</label>
            <input
                onChange={onChange}
                ref={inputRef}
                onKeyDown={onKeyDown}
            />
        </div>
    )
}

export default Input;