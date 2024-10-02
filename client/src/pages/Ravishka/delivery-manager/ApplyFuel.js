import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";
import toast from "react-hot-toast";
const ApplyFuel = ({ isOpen, onOpenChange }) => {
  const [distance, setDistance] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = async () => {
    if (distance === "" || cost === "" || date === "") {
      toast.error("Please fill all the fields");
    } else {
      try {
        const response = await fetch("http://localhost:5000/fuel-rqst", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            distance: distance,
            cost: cost,
            date: date,
          }),
        });
        const data = await response.json();
        console.log(data);
        toast.success("Fuel Request Added Successfully");
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
              <h4>Add Discount</h4>
            </ModalHeader>
            <ModalBody>
              <Input
                label="Distance"
                placeholder="Enter Distance"
                type="number"
                onChange={(e) => {
                  setDistance(e.target.value);
                }}
              />
              <Input
                label="Cost"
                placeholder="Enter Cost"
                type="number"
                onChange={(e) => {
                  setCost(e.target.value);
                }}
              />

              <Input
                label="Date"
                placeholder="Enter Date"
                type="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={handleAdd}>
                Submit
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default ApplyFuel;
