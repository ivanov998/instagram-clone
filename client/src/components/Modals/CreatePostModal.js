import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormInput from "../common/FormInput"

const CreatePostModal = ({show, onHide, handleInputChange}) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormInput 
          type="text"
          name="caption"
          placeholder="Caption"
          onInputChange={(name, value) => handleInputChange(name, value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreatePostModal;