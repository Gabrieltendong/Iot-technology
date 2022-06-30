import styles from './style.module.scss'

const Input = ({style, label, onChange}) => {
    return(
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