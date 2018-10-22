import React from "react";
import { Form, Label } from "semantic-ui-react";

function TextArea({
  input,
  rows,
  type,
  placeholder,
  meta: { touched, error }
}) {
  return (
    <Form.Field eror={touched && !!error}>
      <textarea {...input} placeholder={placeholder} rows={rows} />
      {touched &&
        error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
    </Form.Field>
  );
}

export default TextArea;
