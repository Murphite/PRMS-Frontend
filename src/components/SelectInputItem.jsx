import { SelectItem } from "@nextui-org/react";

const SelectInputItem = ({ label, ...props }) => {
    return <SelectItem {...props}>{label}</SelectItem>;
};

export default SelectInputItem;
