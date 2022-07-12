import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextError } from "components";

const Input = (props) => {
  const { label, name, labelsOn, ...rest } = props;
  return (
    <div className="relative my-2 mb-3 flex h-14  w-full flex-col items-start justify-start">
      {labelsOn ? (
        <label htmlFor={name} className="text-md rounded-lg px-3">
          {label}
        </label>
      ) : null}
      <Field
        id={name}
        name={name}
        {...rest}
        className="relative flex w-full rounded-lg border border-slate-300 bg-white px-2 py-2 placeholder-slate-400 shadow-sm focus:border-primaryColor focus:outline-none focus:ring-1 focus:ring-primaryColor
        focus:required:border-primaryColor focus:required:ring-primaryColor"
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export { Input };