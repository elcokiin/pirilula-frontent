import '../assets/styles/inputForm.css'

const InputForm = ({ id, type, name, placeholder, label }) => (
    <>
        <label htmlFor={id} className="label-form">
            {label}
        </label>
        <input
            type={type ? type : "text"}
            name={name ? name : ''} 
            id={id ? id : ''}
            placeholder={placeholder ? placeholder : ''} 
            className="input-form"  />
    </>
)

export default InputForm