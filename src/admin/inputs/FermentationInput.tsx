import { SelectInput, SelectInputProps } from "react-admin"

const FERMENTATION_OPTIONS = [
    {id: 1, name: "Ale"},
    {id: 2, name: "Lager"},
    {id: 3, name: "Any"},
]

export const FermentationInput = (props: SelectInputProps) => {
    return <SelectInput {...props} choices={FERMENTATION_OPTIONS} />
}