import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { FormikControl, TextError } from "components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignupForm = () => {
    const initialValues = {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
      };
    
    const [showPassword, setShowPassword] = useState();
    const navigate = useNavigate();

    const validationScheme = Yup.object({
        email: Yup.string()
          .email("Please enter a valid email address")
          .required("Please enter a valid email address"),
        password: Yup.string()
          .required("Password field can't be empty")
          .min(8, "Password is too short, minimum 8 characters required")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
            "Must have atleast one uppercase, one lowercase, One Number and one special character"
          ),
    
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), ""], "Passwords must match")
          .required("Confirm Password field Can't be empty"),
        firstName: Yup.string().required("FirstName field can't be empty"),
        lastName: Yup.string().required("LastName field can't be empty"),
    });

    const onSubmit = async (values) => {
        //   const link = await loginUser(values, navigate, dispatch, login);
        console.log("User Signed up..");
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationScheme}
            onSubmit={onSubmit}
        >
            {(formik) => {
                return (
                    <Form className="bg-whiteColor mx-auto flex h-fit sm:w-fit xxs:w-4/5 flex-col items-center rounded-md px-5 pb-6">
                        <h1 className="my-3 mt-5 px-8 xs:!text-3xl xxs:text-xl sm:text-start xxs:text-center font-bold text-black-200">
                            Create Account
                        </h1>
                        <p className="xs:text-start xxs:text-center px-8 font-semibold text-gray-500">
                            Already have an account?
                            <Link to="/login" className="font-semibold ml-1 text-tertiaryColor hover:underline">
                                Log in
                            </Link>
                        </p>
                        <p className="text-gray-500">or</p>
                        <div className="flex gap-3 ">
                            <FormikControl
                                control="input"
                                type="text"
                                label="First Name"
                                labelsOn={false}
                                name="firstName"
                                placeholder="First Name"
                            />
                            <FormikControl
                                control="input"
                                type="text"
                                label="Last Name"
                                name="lastName"
                                placeholder="Last Name"
                            />
                        </div>

                        <FormikControl
                            control="input"
                            type="email"
                            label="Email"
                            name="email"
                            placeholder="Email"
                        />

                        <div className="relative my-2 mb-3 flex h-14  w-full flex-col items-start justify-start">
                            <Field
                                className="relative flex w-full rounded-lg border border-slate-300 bg-white px-2 py-2 placeholder-slate-400 shadow-sm focus:border-primaryColor focus:outline-none focus:ring-1 focus:ring-primaryColor
                                focus:required:border-primaryColor focus:required:ring-primaryColor"
                                type={showPassword ? "text" : "password"}
                                label="Password"
                                name="password"
                                placeholder="Password"
                            />
                            <ErrorMessage name="password" component={TextError} />
                            <div className="absolute top-2 right-5">
                            {showPassword ? (
                                <FontAwesomeIcon icon={faEye} onClick={(e) => setShowPassword((prev) => !prev)} />
                            ) : (
                                <FontAwesomeIcon icon={faEyeSlash} onClick={(e) => setShowPassword((prev) => !prev)} />
                            )}
                            </div>
                        </div>

                        <div className="relative my-2 mb-3 flex h-14  w-full flex-col items-start justify-start">
                            <Field
                                className="relative flex w-full rounded-lg border border-slate-300 bg-white px-2 py-2 placeholder-slate-400 shadow-sm focus:border-primaryColor focus:outline-none focus:ring-1 focus:ring-primaryColor
                                focus:required:border-primaryColor focus:required:ring-primaryColor"
                                type={showPassword ? "text" : "password"}
                                label="Confirm Password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                            />
                            <ErrorMessage name="confirmPassword" component={TextError} />
                            <div className="absolute top-2 right-5">
                            { showPassword ? (
                                <FontAwesomeIcon icon={faEye} onClick={(e) => setShowPassword((prev) => !prev)} />
                            ) : (
                                <FontAwesomeIcon icon={faEyeSlash} onClick={(e) => setShowPassword((prev) => !prev)} />
                            )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={!formik.isValid}
                            className="my-3 flex w-full items-center justify-center gap-3 rounded-lg bg-primaryColor py-2 font-semibold text-white hover:bg-primaryColor-dark"
                        >
                            Sign Up
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
};

export { SignupForm };