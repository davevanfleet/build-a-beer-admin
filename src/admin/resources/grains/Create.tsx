import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

const MALTSTER_CHOICES = [
  { id: "Briess", name: "Briess" },
  { id: "Dingemans", name: "Dingemans" },
  { id: "Weyermann", name: "Weyermann" },
];

export const GrainCreate = () => (
  <Create>
    <SimpleForm>
      <SelectInput source="maltster" choices={MALTSTER_CHOICES} />
      <TextInput source="name" />
      <NumberInput source="lovibond" />
      <NumberInput
        source="fineGrindDryBasisPercentage"
        min={0}
        max={1}
        step={0.01}
      />
      <NumberInput source="suggestedMaximumUsage" />
    </SimpleForm>
  </Create>
);
