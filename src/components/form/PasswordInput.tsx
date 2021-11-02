import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { FC, useState } from "react";
import TextInput from "./TextInput";

interface PasswordInputProps {
  name: string;
  label: string;
}

const PasswordInput: FC<PasswordInputProps> = ({ name, label }) => {
  const [visible, setVisible] = useState(false);

  return (
    <TextInput
      name={name}
      label={label}
      type={visible ? "text" : "password"}
      Icon={
        <>
          {visible ? (
            <VisibilityOutlinedIcon
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setVisible((isVisible) => !isVisible)}
            />
          ) : (
            <VisibilityOffOutlinedIcon
              className="opacity-25 absolute top-4 right-4 cursor-pointer"
              onClick={() => setVisible((isVisible) => !isVisible)}
            />
          )}
        </>
      }
    />
  );
};

export default PasswordInput;
