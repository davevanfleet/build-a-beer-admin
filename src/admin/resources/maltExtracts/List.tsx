import {
  List,
  Datagrid,
  TextField,
  FunctionField,
  ShowButton,
} from "react-admin";

export const MaltExtractList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="maltster" />
      <TextField source="lovibond" />
      <TextField source="fermentabilityPercentage" />
      <FunctionField
        source="suggestedMaximumUsage"
        label="Suggested max usage"
        render={({
          suggestedMaximumUsage,
        }: {
          suggestedMaximumUsage: number;
        }) => `${suggestedMaximumUsage}%`}
      />
      <ShowButton />
    </Datagrid>
  </List>
);
