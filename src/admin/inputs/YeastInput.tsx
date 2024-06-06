import {
  AutocompleteInput,
  ReferenceInput,
  ReferenceInputProps,
} from "react-admin";

export const YeastInput = (
  props: Omit<ReferenceInputProps, "source" | "reference">,
) => (
  <ReferenceInput source="yeastId" reference="Yeasts" {...props}>
    <AutocompleteInput
      label="Yeast"
      optionText={(yeast) => yeast.name}
      fullWidth
    />
  </ReferenceInput>
);
