import { MouseEventHandler } from 'react';
import styles from './style.module.scss'

interface ButtonProps {
    style?: any,
    onClick?: MouseEventHandler,
    text: string,
    type?: "submit",
    isLoading?: boolean
}

const Button = ({style, onClick, text, type, isLoading}: ButtonProps): JSX.Element => {
    return(
        <button 
            className={`${styles.btn_wrapper} ${style}`} 
            onClick={onClick}
            type={type}
        >
            {
                !isLoading?
                text
                :
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
        </button>
    )
}

export default Button;