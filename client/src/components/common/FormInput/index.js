const FormInput = ({type, name, placeholder, onInputChange, error}) => {
    
    const _onChange = e => onInputChange(e.target.name, e.target.value)

    return (
        <>
            {error && <small className="text-danger">{error}</small>}
            <input
                className="form-control mt-1"
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={(e) => _onChange(e)}
            />
        </>
    );
}

export default FormInput;