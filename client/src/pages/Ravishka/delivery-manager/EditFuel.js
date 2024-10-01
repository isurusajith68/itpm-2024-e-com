import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const EditFuel = ({ isOpen, onOpenChange, clickItem, setRefetch }) => {
  const [distance, setDistance] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setDistance(clickItem?.distance);
    setCost(clickItem?.cost);
    const formattedDate = clickItem?.date
      ? new Date(clickItem.date).toISOString().split("T")[0]
      : "";
    setDate(formattedDate);
  }, [clickItem]);

  console.log(clickItem);
  const handleUpdate = async () => {
    if (distance === "" || cost === "" || date === "") {
      toast.error("Please fill all the fields");
    } else {
      try {
        const response = await fetch(
          `http://localhost:5000/fuel-rqst/${clickItem?._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              distance: distance,
              cost: cost,
              date: date,
            }),
          }
        );
        const data = await response.json();
        console.log(data);
        toast.success("Fuel Request Update Successfully");
        setRefetch((prev) => !prev);
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
              <h4>Edit Discount</h4>
            </ModalHeader>
            <ModalBody>
              <Input
                label="Distance"
                placeholder="Enter Distance"
                type="number"
                onChange={(e) => {
                  setDistance(e.target.value);
                }}
                value={distance}
              />
              <Input
                label="Cost"
                placeholder="Enter Cost"
                type="number"
                onChange={(e) => {
                  setCost(e.target.value);
                }}
                value={cost}
              />

              <Input
                label="Date"
                placeholder="Enter Date"
                type="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                value={date}
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
export default EditFuel;
