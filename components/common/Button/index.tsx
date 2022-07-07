import { MouseEventHandler } from 'react';
import styles from './style.module.scss'

interface ButtonProps {
    style?: any,
    onClick?: MouseEventHandler,
    text: string
}

const Button = ({style, onClick, text}: ButtonProps): JSX.Element => {
    return(
        <button 
            className={`${styles.btn_wrapper} ${style}`} 
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;