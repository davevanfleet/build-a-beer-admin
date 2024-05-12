import { List, Datagrid, TextField, FunctionField, ShowButton } from 'react-admin';

export const BeerStyleList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="bjcpCode" />
            <FunctionField label="IBU Range" source="ibuMinimum" render={({ibuMinimum, ibuMaximum}: {ibuMinimum: number; ibuMaximum: number}) => `${ibuMinimum} - ${ibuMaximum}`} />
            <FunctionField label="SRM Range" source="srmMinimum" render={({srmMinimum, srmMaximum}: {srmMinimum: number; srmMaximum: number}) => `${srmMinimum} - ${srmMaximum}`} />
            <FunctionField label="OG Range" source="originalGravityMinimum" render={({originalGravityMinimum, originalGravityMaximum}: {originalGravityMinimum: number; originalGravityMaximum: number}) => `${originalGravityMinimum} - ${originalGravityMaximum}`} />
            <FunctionField label="FG Range" source="finalGravityMinimum" render={({finalGravityMinimum, finalGravityMaximum}: {finalGravityMinimum: number; finalGravityMaximum: number}) => `${finalGravityMinimum} - ${finalGravityMaximum}`} />
            <FunctionField label="ABV Range" source="abvMinimum" render={({abvMinimum, abvMaximum}: {abvMinimum: number; abvMaximum: number}) => `${abvMinimum} - ${abvMaximum}`} />
            <TextField source="fermentation" />
            <ShowButton />
        </Datagrid>
    </List>
);