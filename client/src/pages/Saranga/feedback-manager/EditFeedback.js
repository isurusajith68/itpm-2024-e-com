import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import toast from "react-hot-toast";
const EditFeedback = ({ isOpen, onOpenChange, clickItem, setRefetch }) => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  useEffect(() => {
    setFeedback(clickItem?.feedback);
    setRating(clickItem?.rating);
  }, [clickItem]);

  const handleUpdate = async () => {
    if (feedback === "" || rating === 0) {
      toast.error("Please fill all the fields");
    } else {
      try {
        const response = await fetch(
          `http://localhost:5000/feedback/${clickItem?._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              feedback: feedback,
              rating: rating,
            }),
          }
        );
        const data = await response.json();
        console.log(data);
        toast.success("Feedback Update Successfully");
        setRefetch((prev) => !prev);
        onOpenChange(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h4>Edit Feedback</h4>
            </ModalHeader>
            <ModalBody>
              <Input
                label="Feedback"
                placeholder="Enter Feedback"
                type="text"
                onChange={(e) => {
                  setFeedback(e.target.value);
                }}
                value={feedback}
              />

              <ReactStars
                size={30}
                value={rating}
                onChange={(newRating) => setRating(newRating)}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={handleUpdate}>
                Update
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default EditFeedback;
