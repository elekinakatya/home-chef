import styles from "./RegisterPage.module.css";
import { registerSchema } from "../../entities/user/lib/validation";
import type { RegisterFormData } from "../../entities/user/lib/validation";
import {useFormValidation} from "@/hooks/useFormValidation.ts";

export const RegisterPage = () => {
    const { values, errors, handleChange, handleSubmit } = useFormValidation<RegisterFormData>(
        registerSchema,
        {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    );
    const onSubmit = (data: RegisterFormData) => {
        console.log("Registered user:", data);
    };

    return (
        <div className={styles.page}>
            <div className={styles.centerPage}>
                <h1 className={styles.title}>Register</h1>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Name"
                        value={values.name}
                        onChange={(e) => handleChange("name",e.target.value)}
                    />
                    {errors.name && <p className={styles.error}>{errors.name}</p>}

                    <input
                        className={styles.input}
                        type="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={(e) => handleChange("email",e.target.value)}
                    />
                    {errors.email && <p className={styles.error}>{errors.email}</p>}

                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={(e) => handleChange("password",e.target.value)}
                    />
                    {errors.password && <p className={styles.error}>{errors.password}</p>}

                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Confirm password"
                        value={values.confirmPassword}
                        onChange={(e) => handleChange("confirmPassword",e.target.value)}
                    />
                    {errors.confirmPassword && (
                        <p className={styles.error}>{errors.confirmPassword}</p>
                    )}

                    <button className={styles.button} type="submit">
                        Register
                    </button>

                </form>
            </div>
        </div>
    );
};