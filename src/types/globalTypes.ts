import { UseFormRegister, FieldValues, FieldErrors, RegisterOptions } from "react-hook-form";

export interface ApiError {
    response?: {
        data?: {
            message: string;
        };
    };
}

export interface InputProps {
    type?: string;
    name: string;
    register: UseFormRegister<FieldValues>;
    validationSchema: RegisterOptions;
    errors?: FieldErrors<FieldValues>;
    placeholder: string;
}

export interface CreateProduct {
    title: string;
    price: number;
    description: string;
    categoryId: number;
}
