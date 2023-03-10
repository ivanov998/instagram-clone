import CreatePostModal from "./CreatePostModal";
import { connect } from "react-redux";

import actions from "../../actions";

const Modals = (props) => {

    const { 
        isModalOpen,
        closeModal
    } = props;

    return (
        <>
            <CreatePostModal show={isModalOpen} onHide={closeModal} />
        </>
    );
}

const mapStateToProps = (state) => ({
    isModalOpen: state.post.isModalOpen
})

export default connect(mapStateToProps, actions)(Modals);