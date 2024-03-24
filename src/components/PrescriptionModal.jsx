import React from "react";
import medicine from "../assets/images/prescription-medicine.png";
import dosageImg from "../assets/vectors/dosage-calendar.svg";
import descriptionImg from "../assets/vectors/boarddescription.svg";
import instructionImg from "../assets/vectors/instructions.svg";

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";

export default function PrescriptionModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    // const [size, setSize] = React.useState("xl");
    const [size] = React.useState("xl");
    const [modalPlacement] = React.useState("top-center");

    return (
        <>
            <Button onPress={onOpen} className=" bg-transparent">
                View
            </Button>
            <Modal
                size={size}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement={modalPlacement}
                isDismissable={false}
                isKeyboardDismissDisabled={true}
            >
                <ModalContent className=" pt-2 pb-8">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <p>Prescription</p>
                                <h3 className="text-base">
                                    <span className=" font-normal">
                                        Written by{" "}
                                    </span>
                                    Dr Abel Johnson
                                </h3>
                            </ModalHeader>
                            <ModalBody>
                                <img src={medicine} alt="" />
                                <div className=" text-sm space-y-2 shadow-md hover:shadow-xl rounded-lg ">
                                    <div className="space-y-2 px-2 pb-5">
                                        <div>
                                            <h3 className=" text-lg font-medium">
                                                Amoxicillin
                                            </h3>
                                        </div>
                                        <div className=" space-y-1">
                                            <div className="flex flex-row space-x-1">
                                                <img src={dosageImg} alt="" />
                                                <h4 className=" font-medium">
                                                    Dosage and Duration:
                                                </h4>
                                            </div>
                                            <p>
                                                Take 500mg orally every 8 hours
                                                for 10 days.
                                            </p>
                                        </div>
                                        <div className=" space-y-1">
                                            <div className="flex flex-row space-x-1">
                                                <img
                                                    src={descriptionImg}
                                                    alt=""
                                                />
                                                <h4 className=" font-medium">
                                                    Description:
                                                </h4>
                                            </div>
                                            <p>
                                                Amoxicillin is a broad-spectrum
                                                antibiotic used to treat
                                                bacterial infections. It belongs
                                                to the penicillin class of
                                                antibiotics.
                                            </p>
                                        </div>
                                        <div className=" space-y-1">
                                            <div className="flex flex-row space-x-1">
                                                <img
                                                    src={instructionImg}
                                                    alt=""
                                                />
                                                <h4 className=" font-medium">
                                                    Instructions:
                                                </h4>
                                            </div>
                                            <p>
                                                Take with food to enhance
                                                absorption. Finish the entire
                                                course, even if symptoms improve
                                                earlier.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            {/* <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter> */}
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
