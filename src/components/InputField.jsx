const InputField = ({type, label, id}) => {
    return ( 
        <div className="inputField">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} />
        </div>
     );
}
 
export default InputField;