import React from "react";
import * as yup from "yup";
import "./BasicForm.css";
import { useFormik } from "formik";
import { FaBeer } from "react-icons/fa";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { ReactComponent as YourSvg } from "./iconSvg.svg";
export const BasicForm = () => {
  const validator = yup.object().shape({
    username: yup.string().max(30).required("Username is required."),
    email: yup
      .string()
      .email("Please enter a valid email.")
      .required("Email is required."),
    password: yup
      .string()
      .min(6, "Password must be longer than 6 letters.")
      .max(24, "Password must be shorter than 24 letters.")
      .required("Password is required."),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match.")
      .required("Confirm Password is required."),
  });

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
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
    onSubmit,
  });

  return (
    <div className="block">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-evenly">
          <div className="col-10 col-md-5 col-lg-7">
            <h2 className="mt-4">Register</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
              <h6 className="mt-4">Username</h6>
              <div className="form-item position-relative">
                <input
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                  name="username"
                  onBlur={handleBlur}
                  className={`form-control shadow-sm ps-5 ${
                    errors.username && touched.username ? "input-error" : null
                  } ${
                    !errors.username && touched.username
                      ? "input-success"
                      : null
                  }`}
                />
                <AiOutlineUser
                  className="position-absolute start-0 top-0 mt-2 ms-3"
                  size={24}
                  color="black"
                />
                <AiFillMinusCircle
                  color="red"
                  size={22}
                  className={`position-absolute end-0 top-0 mt-2 me-2 ${
                    errors.username && touched.username ? "" : "d-none"
                  }`}
                />
                <TiTick
                  color="green"
                  size={22}
                  className={`position-absolute end-0 top-0 mt-2 me-2 ${
                    !errors.username && touched.username ? "" : "d-none"
                  }`}
                />
              </div>

              <p
                className={`text-danger ${
                  errors.username && touched.username ? "" : "opacity-0"
                }`}
              >
                {errors.username && touched.username
                  ? errors.username
                  : "11111111111"}
              </p>

              <h6 className="mt-4">Email</h6>
              <div className="form-item position-relative">
                <input
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  className={`form-control shadow-sm ps-5 ${
                    errors.email && touched.email ? "input-error" : null
                  } ${!errors.email && touched.email ? "input-success" : null}`}
                />
                <AiOutlineMail
                  className="position-absolute start-0 top-0 mt-2 ms-3"
                  size={24}
                  color="black"
                />
                <AiFillMinusCircle
                  color="red"
                  size={22}
                  className={`position-absolute end-0 top-0 mt-2 me-2 ${
                    errors.email && touched.email ? "" : "d-none"
                  }`}
                />
                <TiTick
                  color="green"
                  size={22}
                  className={`position-absolute end-0 top-0 mt-2 me-2 ${
                    !errors.email && touched.email ? "" : "d-none"
                  }`}
                />
              </div>
              <p
                className={`text-danger ${
                  errors.email && touched.email ? "" : "opacity-0"
                }`}
              >
                {errors.email && touched.email ? errors.email : "11111111111"}
              </p>

              <h6 className="mt-4">Password</h6>
              <div className="form-item position-relative">
                <input
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  className={`form-control shadow-sm ps-5 ${
                    errors.password && touched.password ? "input-error" : null
                  } ${
                    !errors.password && touched.password
                      ? "input-success"
                      : null
                  }`}
                />
                <RiLockPasswordLine
                  className="position-absolute start-0 top-0 mt-2 ms-3"
                  size={24}
                  color="black"
                />
                <AiFillMinusCircle
                  color="red"
                  size={22}
                  className={`position-absolute end-0 top-0 mt-2 me-2 ${
                    errors.password && touched.password ? "" : "d-none"
                  }`}
                />
                <TiTick
                  color="green"
                  size={22}
                  className={`position-absolute end-0 top-0 mt-2 me-2 ${
                    !errors.password && touched.password ? "" : "d-none"
                  }`}
                />
              </div>
              <p
                className={`text-danger ${
                  errors.password && touched.password ? "" : "opacity-0"
                }`}
              >
                {errors.password && touched.password
                  ? errors.password
                  : "11111111111"}
              </p>

              <h6 className="mt-4">Confirm Password</h6>
              <div className="form-item position-relative">
                <input
                  type="password"
                  value={values.passwordConfirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="passwordConfirm"
                  className={`form-control shadow-sm ps-5 ${
                    errors.passwordConfirm && touched.passwordConfirm
                      ? "input-error"
                      : null
                  } ${
                    !errors.passwordConfirm && touched.passwordConfirm
                      ? "input-success"
                      : null
                  }`}
                />
                <RiLockPasswordLine
                  className="position-absolute start-0 top-0 mt-2 ms-3"
                  size={24}
                  color="black"
                />
                <AiFillMinusCircle
                  color="red"
                  size={22}
                  className={`position-absolute end-0 top-0 mt-2 me-2 ${
                    errors.passwordConfirm && touched.passwordConfirm
                      ? ""
                      : "d-none"
                  }`}
                />
                <TiTick
                  color="green"
                  size={22}
                  className={`position-absolute end-0 top-0 mt-2 me-2 ${
                    !errors.passwordConfirm && touched.passwordConfirm
                      ? ""
                      : "d-none"
                  }`}
                />
              </div>
              <p
                className={`text-danger ${
                  errors.passwordConfirm && touched.passwordConfirm
                    ? ""
                    : "opacity-0"
                }`}
              >
                {errors.passwordConfirm && touched.passwordConfirm
                  ? errors.passwordConfirm
                  : "11111111111"}
              </p>

              <div className="text-center">
                <input
                  type="submit"
                  value="Register"
                  className="submit-button mt-3"
                />
              </div>
            </form>
          </div>
          <div className="col-10 col-md-5 col-lg-4 d-none d-md-inline-block">
            <YourSvg className="col-10" />
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};
