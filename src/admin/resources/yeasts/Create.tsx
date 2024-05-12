import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const YeastCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="minimumTemperature" />
            <NumberInput source="maximumTemperature" />
            <NumberInput source="attenuation" step={0.01} />
            <NumberInput source="fermentation" />
        </SimpleForm>
    </Create>
);