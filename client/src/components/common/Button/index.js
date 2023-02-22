const Button = ({type, text, disabled}) => {
  return (
    <button type="submit" className={`btn btn-${type}`} disabled={disabled}>
        {text}
    </button>
  );
}

export default Button;