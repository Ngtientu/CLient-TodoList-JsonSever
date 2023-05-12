import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const UsersEdit = (props) => {
  return (
    <Edit title="Edit a User" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Edit>
  );
};

export default UsersEdit;
