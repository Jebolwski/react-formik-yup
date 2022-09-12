import logo from "./logo.svg";
import "./App.css";
import React, { useRef } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as yup from "yup";
import { useFormik } from "formik";
import { BasicForm } from "./BasicForm";

function App() {
  return <BasicForm />;
}

export default App;
