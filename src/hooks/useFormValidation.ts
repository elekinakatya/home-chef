import { useState } from "react";
import type {ZodSchema} from "zod";

export const useFormValidation = <T extends Record<string, unknown>>(
    schema: ZodSchema<T>,
    initialValues: T
) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

    const handleChange = (field: keyof T, value: string) => {
        setValues((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    const validate = () => {
        const result = schema.safeParse(values);

        if (!result.success) {
            const fieldErrors: Partial<Record<keyof T, string>> = {};

            result.error.issues.forEach((issue) => {
                const field = issue.path[0] as keyof T;
                fieldErrors[field] = issue.message;
            });

            setErrors(fieldErrors);
            return false;
        }

        setErrors({});
        return true;
    };

    const handleSubmit = (callback: (data: T) => void) => {
        return (e: React.FormEvent) => {
            e.preventDefault();

            if (validate()) {
                callback(values);
            }
        };
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit
    };
};