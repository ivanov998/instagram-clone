const FormInput = ({type, name, placeholder, onInputChange}) => {
    
    const _onChange = e => onInputChange(e.target.name, e.target.value)

    return (
        <input
            className="form-control mt-1"
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={(e) => _onChange(e)}
        />
    );
}

export default FormInput;