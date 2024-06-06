import {
  Show,
  SimpleShowLayout,
  TextField,
  NumberField,
  ArrayField,
  Datagrid,
} from "react-admin";

export const RecipeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="postBoilGallons" />

      <ArrayField source="recipeGrains">
        <Datagrid bulkActionButtons={false}>
          <TextField source="grainId" />
          <TextField source="grain.name" />
          <NumberField source="weightInPounds" />
        </Datagrid>
      </ArrayField>

      <ArrayField source="recipeHops">
        <Datagrid bulkActionButtons={false}>
          <TextField source="hopId" />
          <TextField source="hop.name" />
          <NumberField source="weightInOunces" />
          <NumberField source="boilTimeMinutes" />
          <NumberField source="alphaAcidPercent" />
        </Datagrid>
      </ArrayField>

      <TextField source="yeast.name" />
    </SimpleShowLayout>
  </Show>
);
