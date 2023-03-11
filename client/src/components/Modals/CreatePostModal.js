import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import FormInput from "../common/FormInput"

const CreatePostModal = ({show, onHide, handleInputChange, handleSubmit}) => {

  const _handleSubmit = (e) => {
      e.preventDefault();
      handleSubmit();
  }

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
          Create new post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={_handleSubmit}>
          <FormInput 
            type="text"
            name="caption"
            placeholder="Caption"
            onInputChange={(name, value) => handleInputChange(name, value)}
          />
          <Button variant="primary" type="submit" className="w-100 py-1">Create</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreatePostModal;