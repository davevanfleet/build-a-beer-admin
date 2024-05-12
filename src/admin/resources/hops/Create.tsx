import { Create, SimpleForm, TextInput } from 'react-admin';

export const HopCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);