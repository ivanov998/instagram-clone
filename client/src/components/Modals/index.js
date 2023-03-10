import CreatePostModal from "./CreatePostModal";
import { connect } from "react-redux";

import actions from "../../actions";

const Modals = (props) => {

    const { 
        isPostModalOpen,
        closePostModal,
        postModalFormChange
    } = props;

    return (
        <>
            <CreatePostModal 
                show={isPostModalOpen} 
                onHide={closePostModal} 
                handleInputChange={postModalFormChange}    
            />
        </>
    );
}

const mapStateToProps = (state) => ({
    isPostModalOpen: state.post.isPostModalOpen
})

export default connect(mapStateToProps, actions)(Modals);