import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

const MALTSTER_CHOICES = [{ id: "Briess", name: "Briess" }];

export const MaltExtractCreate = () => (
  <Create>
    <SimpleForm>
      <SelectInput source="maltster" choices={MALTSTER_CHOICES} />
      <TextInput source="name" />
      <NumberInput source="lovibond" />
      <NumberInput
        source="fermentabilityPercentage"
        min={0}
        max={1}
        step={0.01}
      />
    </SimpleForm>
  </Create>
);
