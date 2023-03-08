import { connect } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Feed from "../../components/Feed";
import Suggestions from "../../components/Suggestions";
import "./styles.css";

const Home = (props) => {

    const { user } = props;

    // TODO: Find a better way to hide the right column
    return (
        <Row className="home-layout mx-auto mt-5">
            <Col lg={8} md={12}>
                <Feed />
            </Col>
            <Col lg={4} className="d-none d-lg-block">
                <Suggestions user={user} />
            </Col>
        </Row>
    );
}

const mapStateToProps = (state) => ({
    user: state.auth.user
})

export default connect(mapStateToProps, {})(Home);