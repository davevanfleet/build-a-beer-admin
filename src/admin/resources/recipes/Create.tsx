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
} from "react-admin";

export const RecipeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" fullWidth />
      <TextInput source="description" multiline fullWidth />

      <NumberInput source="postBoilGallons" />

      <ArrayInput source="recipeGrains" fullWidth>
        <SimpleFormIterator inline>
          <GrainInput />
          <NumberInput source="weightInPounds" />
        </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="recipeHops" fullWidth>
        <SimpleFormIterator inline>
          <HopInput />
          <NumberInput source="weightInPounds" />
          <NumberInput source="boilTimeMinutes" />
          <NumberInput source="alphaAcidPercent" />
        </SimpleFormIterator>
      </ArrayInput>

      <YeastInput />
    </SimpleForm>
  </Create>
);
