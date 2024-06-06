import {
  AutocompleteInput,
  ReferenceInput,
  ReferenceInputProps,
} from "react-admin";

export const HopInput = (
  props: Omit<ReferenceInputProps, "source" | "reference">,
) => (
  <ReferenceInput source="hopId" reference="Hops" {...props}>
    <AutocompleteInput label="Hop" optionText={(hop) => hop.name} fullWidth />
  </ReferenceInput>
);
