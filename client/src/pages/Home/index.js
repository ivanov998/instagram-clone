import { connect } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Feed from "../../components/Feed";
import Suggestions from "../../components/Suggestions";
import "./styles.css";

const Home = (props) => {

    const { user } = props;

    return (
        <Row className="home-layout mx-auto mt-5">
            <Col md={8}>
                <Feed />
            </Col>
            <Col md={4}>
                <Suggestions user={user} />
            </Col>
        </Row>
    );
}

const mapStateToProps = (state) => ({
    user: state.authReducer.user
})

export default connect(mapStateToProps, {})(Home);