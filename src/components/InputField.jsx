const InputField = ({type, label, id}) => {
    return ( 
        <div className="input-field">
            <label htmlFor={id} className="input-label">{label}</label>
            <input type={type} id={id} className="input-box" />
        </div>
     );
}
 
export default InputField;