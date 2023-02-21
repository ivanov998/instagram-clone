import Container from "react-bootstrap/Container";

const ContainerFluid = ({children}) => {
  return (
    <Container fluid>
        {children}
    </Container>
  )
}
export default ContainerFluid