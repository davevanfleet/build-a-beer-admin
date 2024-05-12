import { List, Datagrid, TextField, FunctionField, ShowButton } from 'react-admin';

export const YeastList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <FunctionField label="Temperature Range" source="minimumTemperature" render={({minimumTemperature, maximumTemperature}: {minimumTemperature: number; maximumTemperature: number}) => `${minimumTemperature} - ${maximumTemperature}`} />
            <TextField source="attenuation" />
            <TextField source="fermentation" />
            <ShowButton />
        </Datagrid>
    </List>
);