import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const OrganizationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};