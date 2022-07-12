import React from "react";
import { Input, TextArea } from "components";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return (
        <Input {...rest} />
      );
    case "textarea":
      return (
        <TextArea {...rest} />
      );
    default:
      return null;
  }
};

export { FormikControl };