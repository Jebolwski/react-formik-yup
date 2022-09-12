import React from "react";
import * as yup from "yup";
import "./BasicForm.css";
import { useFormik } from "formik";
export const BasicForm = () => {
  const passwordRegex =
    "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*s).{6,24}$";

  const validator = yup.object().shape({
    username: yup.string().max(30).required("Username is required."),
    email: yup
      .string()
      .email("Please enter a valid email.")
      .required("Email is required."),
    password: yup
      .string()
      .min(6)
      .max(24)
      .matches(passwordRegex, { message: "Please enter stronger password." })
      .required("Password is required."),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match.")
      .required("Confirm Password is required."),
  });

  const on_submit = () => {
    console.log("Submitted.");
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: validator,
    on_submit,
  });

  console.log(errors);

  return (
    <div className="bg-dark block">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="container">
          <br />
          <h5 className="mt-4">Username</h5>
          <input
            type="text"
            value={values.username}
            onChange={handleChange}
            name="username"
            className={`form-control shadow-sm ${
              errors.username ? "input-error" : null
            }`}
          />
          {errors.username && <p className="text-danger">{errors.username}</p>}
          <h5 className="mt-4">Email</h5>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            name="email"
            className={`form-control shadow-sm ${
              errors.email ? "input-error" : null
            }`}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
          <h5 className="mt-4">Password</h5>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            name="password"
            className={`form-control shadow-sm ${
              errors.password ? "input-error" : null
            }`}
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}
          <h5 className="mt-4">Confirm Password</h5>
          <input
            type="password"
            value={values.passwordConfirm}
            onChange={handleChange}
            name="passwordConfirm"
            className={`form-control shadow-sm ${
              errors.passwordConfirm ? "input-error" : null
            }`}
          />
          {errors.passwordConfirm && (
            <p className="text-danger">{errors.passwordConfirm}</p>
          )}
        </div>
      </form>
    </div>
  );
};
