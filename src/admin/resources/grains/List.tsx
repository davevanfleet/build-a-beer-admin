import {
  List,
  Datagrid,
  TextField,
  FunctionField,
  ShowButton,
} from "react-admin";

export const GrainList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="maltster" />
      <TextField source="lovibond" />
      <TextField
        source="fineGrindDryBasisPercentage"
        min={0}
        max={1}
        step={0.01}
      />
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
