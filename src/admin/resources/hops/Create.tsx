import { BooleanInput, Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const HopCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <BooleanInput source="forBittering" />
            <BooleanInput source="forFlavor" />
            <BooleanInput source="forAroma" />
            <BooleanInput source="forDryHopping" />
            <NumberInput source="typicalMinimumAlphaAcid" />
            <NumberInput source="typicalMaximumAlphaAcid" />
        </SimpleForm>
    </Create>
);