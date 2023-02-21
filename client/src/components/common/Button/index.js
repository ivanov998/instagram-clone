const Button = ({type, text}) => {
  return (
    <button type="submit" className={`btn btn-${type}`}>
        {text}
    </button>
  );
}

export default Button;