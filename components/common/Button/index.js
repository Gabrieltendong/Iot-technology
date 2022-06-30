import styles from './style.module.scss'

const Button = ({style, onClick, text}) => {
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