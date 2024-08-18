import styles from './Select.module.css'

function Select ({text, name, options, handleonChange, value}){
    return(
        <div className = {styles.form_control}>
            <label htmlFor={name}>{text}:</label>
        <select>
        name={name}
        id={name}
        <options>Selecione uma opção</options>
        </select>
        </div>
    )
}

export default Select