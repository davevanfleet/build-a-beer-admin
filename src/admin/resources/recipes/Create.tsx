import { GrainInput } from "@/admin/inputs/GrainInput";
import { HopInput } from "@/admin/inputs/HopInput";
import { YeastInput } from "@/admin/inputs/YeastInput";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
  ReferenceInput,
  AutocompleteInput,
} from "react-admin";

export const RecipeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" fullWidth />
      <TextInput source="description" multiline fullWidth />
      <NumberInput source="postBoilGallons" />
      <ArrayInput source="recipeMaltExtracts" fullWidth>
        <SimpleFormIterator inline>
          <ReferenceInput
            source="maltExtractId"
            reference="MaltExtracts"
            sort={{ field: "name", order: "ASC" }}
          >
            <AutocompleteInput
              label="Malt Extract"
              optionText={(grain) => `${grain.name} (${grain.maltster})`}
              fullWidth
            />
          </ReferenceInput>
          <NumberInput source="weightInPounds" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="recipeGrains" fullWidth>
        <SimpleFormIterator inline>
          <ReferenceInput
            source="grainId"
            reference="Grains"
            sort={{ field: "name", order: "ASC" }}
          >
            <AutocompleteInput
              label="Grain"
              optionText={(grain) => `${grain.name} (${grain.maltster})`}
              fullWidth
            />
          </ReferenceInput>
          <NumberInput source="weightInPounds" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="recipeHops" fullWidth>
        <SimpleFormIterator inline>
          <ReferenceInput
            source="hopId"
            reference="Hops"
            sort={{ field: "name", order: "ASC" }}
          >
            <AutocompleteInput
              label="Hop"
              optionText={(hop) => hop.name}
              fullWidth
            />
          </ReferenceInput>
          <NumberInput source="weightInOunces" />
          <NumberInput source="boilTimeMinutes" />
          <NumberInput source="alphaAcidPercent" />
        </SimpleFormIterator>
      </ArrayInput>
      <YeastInput />
    </SimpleForm>
  </Create>
);
