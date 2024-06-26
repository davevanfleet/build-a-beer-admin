import {
  BooleanInput,
  Create,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const HopCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <BooleanInput source="forBittering" />
      <BooleanInput source="forFlavor" />
      <BooleanInput source="forAroma" />
      <BooleanInput source="forDryHopping" />
      <NumberInput source="minimumTypicalAlphaAcid" />
      <NumberInput source="maximumTypicalAlphaAcid" />
    </SimpleForm>
  </Create>
);
