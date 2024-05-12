import { List, Datagrid, TextField, FunctionField, ShowButton } from 'react-admin';

export const GrainList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="maltster" />
            <TextField source="lovibond" />
            <TextField source="fineGrindDryBasisPercentage" min={0} max={1} step={0.01} />
            <FunctionField source="suggestedMinimumUsage" label="Suggested usage" render={({suggestedMinimumUsage, suggestedMaximumUsage}: {suggestedMinimumUsage: number; suggestedMaximumUsage: number;}) => `${suggestedMinimumUsage}% - ${suggestedMaximumUsage}%`}/>
            <ShowButton />
        </Datagrid>
    </List>
);