import '../assets/styles/inputForm.css'

const InputFrom = ({ id, type, name, placeholder, className, text }) => (
    <>
        <label htmlFor={id} className="label-form">
            {text}
        </label>
        <input
            type={type ? type : "text"}
            name={name ? name : ''} 
            id={id ? id : ''}
            placeholder={placeholder ? placeholder : ''} 
            className={`input-form ${className ? className : ''}`} />
    </>
)

export default InputFrom