const InputField = ({type, label, id, name}) => {
    return ( 
        <div className="input-field">
            <label htmlFor={id} className="input-label">{label}</label>
            <input type={type} id={id} name={name} className="input-box" required/>
        </div>
     );
}
 
export default InputField;