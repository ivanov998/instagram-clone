const FormGroup = ({ label, type, name, placeholder, onInputChange}) => {
    
    const _onChange = e => onInputChange(e.target.name, e.target.value)

    return (
        <div className="form-group mt-3">
            <label>{label}</label>
            <input
                className="form-control mt-1"
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={(e) => _onChange(e)}
            />
        </div>
    );
}

export default FormGroup;