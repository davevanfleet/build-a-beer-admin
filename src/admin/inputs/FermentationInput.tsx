import { SelectInput, SelectInputProps } from "react-admin"

const FERMENTATION_OPTIONS = [
    {id: 'top', name: "Top"},
    {id: 'bottom', name: "Bottom"},
    {id: 'wild', name: "Wild"},
    {id: 'any', name: "Any"},
]

export const FermentationInput = (props: SelectInputProps) => {
    return <SelectInput {...props} choices={FERMENTATION_OPTIONS} />
}