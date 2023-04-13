import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

interface Props {
    options: any[];
    onChange: (event: any) => void;
    seletedValue: string;
}

export default function RadioButtonGroup({options, onChange, seletedValue}: Props) {
    return (
        <FormControl>
  <RadioGroup onChange={onChange} value={seletedValue}>
    {options.map(({value, label}) =>  (
    <FormControlLabel value={value} control={<Radio />} label={label} key={value} />
    ))}
  </RadioGroup>
</FormControl>
    )
}