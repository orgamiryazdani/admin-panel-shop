import React from "react";
import { InputProps } from "../types/globalTypes";

const Input: React.FC<InputProps> = ({
  type = "text",
  name,
  register,
  validationSchema,
  errors,
  placeholder,
}) => {
  return (
    <div className='flex flex-col w-full'>
      <input
        {...register(name, validationSchema)}
        id={name}
        className='input'
        type={type}
        autoComplete='off'
        placeholder={placeholder}
      />
      {errors && errors[name] && (
        <span className='text-red-500 block text-sm mt-1'>
          {errors[name]?.message as React.ReactNode}
        </span>
      )}
    </div>
  );
};

export default Input;