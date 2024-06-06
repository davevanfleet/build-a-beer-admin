import { List, Datagrid, TextField, ShowButton } from "react-admin";

export const RecipeList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <ShowButton />
    </Datagrid>
  </List>
);
