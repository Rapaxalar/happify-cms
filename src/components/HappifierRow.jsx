import { TextField, FormGroup, FormControlLabel, Checkbox, FormControl, FormLabel, RadioGroup, Radio, Switch } from "@mui/material";


export const HappifierRow = ({field}) => {

  const Input = ({type, id}) => {
    switch (type) {
      case 'text':
        return <TextField id={field.id} label={field.label} variant="outlined" fullWidth defaultValue={field.value} multiline={field.multiline} 
        rows={6}/>
      case 'switch':
        return <FormGroup><FormControlLabel control={<Switch defaultChecked={field.value} />} label={field.label} /></FormGroup>
      case 'checkbox':
        return <FormGroup><FormControlLabel control={<Checkbox defaultChecked={field.value} />} label={field.label} /></FormGroup>
      case 'radio':
        return <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">{field.label}</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={field.value}
                  name={`${id}-radio-buttons-group`}
                >
                  {field.options.map((option, index) => <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} />)}
                </RadioGroup>
              </FormControl>
      default:
        return null
    }
  }

  return (
    <tr>
      <td>
        <Input type={field.type} id={field.id}/>
      </td>
    </tr>
  );
}
