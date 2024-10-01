import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import axios from "axios";

const DeleteFuelModel = ({ isOpen, onOpenChange, setRefetch, clickItemId }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h4>Delete Supplier</h4>
            </ModalHeader>
            <ModalBody>
              <p>
                Are you sure you want to delete this
                <span className="text-danger"> Fuel Request</span>
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                color="primary"
                disabled={!clickItemId}
                onClick={async () => {
                  if (clickItemId) {
                    try {
                      await axios.delete(
                        `http://localhost:5000/fuel-rqst/${clickItemId}`
                      );
                      setRefetch((prev) => !prev);
                    } catch (error) {
                      console.log(error);
                    }
                  }
                  onClose();
                }}
              >
                Delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default DeleteFuelModel;
