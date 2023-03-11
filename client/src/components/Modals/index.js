import CreatePostModal from "./CreatePostModal";
import { connect } from "react-redux";

import actions from "../../actions";

const Modals = (props) => {

    const { 
        isPostModalOpen,
        closePostModal,
        postModalFormChange,
        postModalHandleSubmit
    } = props;

    return (
        <>
            <CreatePostModal 
                show={isPostModalOpen} 
                onHide={closePostModal} 
                handleInputChange={postModalFormChange}
                handleSubmit={postModalHandleSubmit}
            />
        </>
    );
}

const mapStateToProps = (state) => ({
    isPostModalOpen: state.post.isPostModalOpen
})

export default connect(mapStateToProps, actions)(Modals);