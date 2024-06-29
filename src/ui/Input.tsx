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
        name={name}
        autoComplete='off'
        placeholder={placeholder}
      />
      {errors && errors[name] && (
        <span className='text-error block text-sm mt-3'>
          {errors[name]?.message as React.ReactNode}
        </span>
      )}
    </div>
  );
};

export default Input;