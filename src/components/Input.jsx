import { Input } from "@nextui-org/react";

const inputStyles = {
    input: ["text-black"],
    inputWrapper: [
        "border-solid",
        "border",
        "rounded-md",
        "border-teal-500",
        "focus:outline-none",
    ],
};

const CustomInput = (props) => {
    return (
        <Input size="md" color="success" classNames={inputStyles} {...props} />
    );
};

export default CustomInput;
