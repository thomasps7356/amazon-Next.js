import { useField } from "formik";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { errorAnimation } from "utils/animations";

interface TextFieldProps {
  name: string;
  label: string;
  type: string;
}

const TextField: React.FC<TextFieldProps> = ({ name, label, ...props }) => {
  const [field, { touched, error, value }] = useField(name);

  return (
    <div className="relative mt-4 group">
      <input
        {...field}
        {...props}
        name={name}
        className={`border-none
      bg-[#fafafa] rounded-lg pt-6 pb-2 px-3 shadow-inner drop-shadow-md
      outline-none w-80 font-bold transition-all duration-200 focus:shadow-lg
      hover:shadow-lg ${error && "ring-1 ring-[#dc143c]"}`}
      />
      <label
        htmlFor={name}
        className={`absolute left-4 top-4 text-base opacity-75
        transition-all duration-200 group-focus-within:active_label
        group-hover:active_label ${value != "" && "active_label"}`}
      >
        {label}
      </label>

      {touched && error && (
        <motion.p
          initial="initial"
          animate="in"
          exit="out"
          variants={errorAnimation}
          className="py-1 px-2 text-[#dc143c] text-sm"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default TextField;
