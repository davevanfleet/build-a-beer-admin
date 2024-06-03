import { SelectInput, SelectInputProps } from "react-admin"

const FERMENTATION_OPTIONS = [
    {id: 'top', name: "Ale"},
    {id: 'bottom', name: "Lager"},
    {id: 'any', name: "Any"},
]

export const FermentationInput = (props: SelectInputProps) => {
    return <SelectInput {...props} choices={FERMENTATION_OPTIONS} />
}