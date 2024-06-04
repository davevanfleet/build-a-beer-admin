import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';
import { FermentationInput } from '../../inputs/FermentationInput';

export const BeerStyleCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="imageUrl" />
            <TextInput source="bjcpCode" />
            <TextInput source="overallImpression" />
            <TextInput source="appearanceDescription" />
            <TextInput source="aromaDescription" />
            <TextInput source="flavorDescription" />
            <TextInput source="mouthfeelDescription" />
            <TextInput source="comments" />
            <TextInput source="history" />
            <NumberInput source="ibuMinimum" />
            <NumberInput source="ibuMaximum" />
            <NumberInput source="srmMinimum" />
            <NumberInput source="srmMaximum" />
            <NumberInput source="originalGravityMinimum" />
            <NumberInput source="originalGravityMaximum" />
            <NumberInput source="finalGravityMinimum" />
            <NumberInput source="finalGravityMaximum" />
            <NumberInput source="abvMinimum" />
            <NumberInput source="abvMaximum" />
            <NumberInput source="fermentation_bak" />
            <FermentationInput source="fermentation" />
        </SimpleForm>
    </Create>
);