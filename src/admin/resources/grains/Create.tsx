import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const GrainCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="lovibond" />
            <NumberInput source="fineGrindDryBasisPercentage" min={0} max={1} step={0.01} />
            <NumberInput source="suggestedMinimumUsage" />
            <NumberInput source="suggestedMaximumUsage" />
        </SimpleForm>
    </Create>
);