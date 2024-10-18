import React from "react";
import Input from "/components/form/Input";
import Title from "/components/ui/Title";
import { useFormik } from "formik";
import { passwordSchema } from "/schema/password";
const Password = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: passwordSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];
  return (
    <form
      className="lg:p-4 flex-1 flex flex-col gap-y-6"
      onSubmit={handleSubmit}
    >
      <Title addClass="text-4xl">Password Settings</Title>
      <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
      </div>
      <button className="btn-primary" type="submit">
        Update
      </button>
    </form>
  );
};

export default Password;
