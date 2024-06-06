import {
  AutocompleteInput,
  ReferenceInput,
  ReferenceInputProps,
} from "react-admin";

export const GrainInput = (
  props: Omit<ReferenceInputProps, "source" | "reference">,
) => (
  <ReferenceInput source="grainId" reference="Grains" {...props}>
    <AutocompleteInput
      label="Grain"
      optionText={(grain) => `${grain.name} (${grain.maltster})`}
      fullWidth
    />
  </ReferenceInput>
);
