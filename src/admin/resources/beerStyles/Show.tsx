import { Show, SimpleShowLayout, TextField, FunctionField } from 'react-admin';

export const BeerStyleShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="bjcpCode" />
            <TextField source="overallImpression" />
            <TextField source="appearanceDescription" />
            <TextField source="aromaDescription" />
            <TextField source="flavorDescription" />
            <TextField source="mouthfeelDescription" />
            <TextField source="comments" />
            <TextField source="history" />
            <FunctionField label="IBU Range" source="ibuMinimum" render={({ibuMinimum, ibuMaximum}: {ibuMinimum: number; ibuMaximum: number}) => `${ibuMinimum} - ${ibuMaximum}`} />
            <FunctionField label="SRM Range" source="srmMinimum" render={({srmMinimum, srmMaximum}: {srmMinimum: number; srmMaximum: number}) => `${srmMinimum} - ${srmMaximum}`} />
            <FunctionField label="OG Range" source="originalGravityMinimum" render={({originalGravityMinimum, originalGravityMaximum}: {originalGravityMinimum: number; originalGravityMaximum: number}) => `${originalGravityMinimum} - ${originalGravityMaximum}`} />
            <FunctionField label="FG Range" source="finalGravityMinimum" render={({finalGravityMinimum, finalGravityMaximum}: {finalGravityMinimum: number; finalGravityMaximum: number}) => `${finalGravityMinimum} - ${finalGravityMaximum}`} />
            <FunctionField label="ABV Range" source="abvMinimum" render={({abvMinimum, abvMaximum}: {abvMinimum: number; abvMaximum: number}) => `${abvMinimum} - ${abvMaximum}`} />
            <TextField source="fermentation" />
        </SimpleShowLayout>
    </Show>
);