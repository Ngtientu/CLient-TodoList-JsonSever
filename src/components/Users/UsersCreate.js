import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  EmailField,
} from "react-admin";

const UsersCreate = (props) => {
  return (
    <Create title="Create a Users" {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Create>
  );
};

export default UsersCreate;
