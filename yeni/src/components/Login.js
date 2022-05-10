import React, { useState, useContext } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { StoreContext } from "../store";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const context = useContext(StoreContext);
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name."),
    phoneNumber: Yup.string().required("Please enter your phone number"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
    confirmPassword: Yup.string()
      .required("Please enter your password again")
      .oneOf([Yup.ref("password")], "Please fields don't match"),
  });
  const onSubmit = (values) => {
    //console.log(values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("İşlem başarılı");
    }, 1500);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <h2>{context.count}</h2>
      <Form.Group
        className="mb-3"
        value={context.name}
        onChange={(e) => context.setName(e.target.value)}
      >
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("firstName")}
          isInvalid={formik.touched.firstName && !!formik.errors.firstName}
          isValid={formik.touched.firstName && !formik.errors.firstName}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("lastName")}
          isInvalid={formik.touched.lastName && !!formik.errors.lastName}
          isValid={formik.touched.lastName && !formik.errors.lastName}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("phoneNumber")}
          isInvalid={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
          isValid={formik.touched.phoneNumber && !formik.errors.phoneNumber}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          {...formik.getFieldProps("email")}
          isInvalid={formik.touched.email && !!formik.errors.email}
          isValid={formik.touched.email && !formik.errors.email}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          {...formik.getFieldProps("password")}
          isInvalid={formik.touched.password && !!formik.errors.password}
          isValid={formik.touched.password && !formik.errors.password}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          type="password"
          {...formik.getFieldProps("confirmPassword")}
          isInvalid={
            formik.touched.confirmPassword && !!formik.errors.confirmPassword
          }
          isValid={
            formik.touched.confirmPassword && !formik.errors.confirmPassword
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={loading}>
        {loading && <Spinner animation="border" size="md" />}
        Register
      </Button>
    </Form>
  );
};
export default Login;
