
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



function LoginModal({ setIsModalOpen,showModal}) {

  const handleClose = () => setIsModalOpen(!showModal);

  return (
    <>
      <Modal show={showModal} onHide={handleClose} bg="bg-danger" className="text-danger ">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Пользователя с таким именем не существует! Попробуйте еще раз.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
