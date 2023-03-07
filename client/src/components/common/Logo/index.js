import "./styles.css";

const Logo = ({className}) => {

    // TODO: find a better way to concat default and added classnames;
    const defaultClassNames = "logo ";

    return (
        <div className={defaultClassNames + className}>
            <h1>Instaclone</h1>
        </div>
    );
}
export default Logo;