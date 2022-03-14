// material-ui
import Checkbox from '@mui/material/Checkbox';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import { useState } from 'react';

const EditForm = ({ fields, actions }) => {
    const [state, setState] = useState(fields);

    const handleChange = (event, key) => {
        const newState = [...state];
        newState[key].value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setState(newState);
    };

    return (
        <FormGroup
            sx={{
                '& .MuiTextField-root': { mb: 2, mt: 2 }
            }}
        >
            {state.map((field, key) => {
                switch (field.type) {
                    case 'input':
                        return (
                            <TextField
                                key={key}
                                id={field.id}
                                label={field.label}
                                defaultValue={field.value}
                                onChange={(e) => {
                                    handleChange(e, key);
                                }}
                            />
                        );
                    case 'textarea':
                        return (
                            <TextField
                                key={key}
                                id={field.id}
                                label={field.label}
                                defaultValue={field.value}
                                multiline
                                maxRows={20}
                                onChange={(e) => {
                                    handleChange(e, key);
                                }}
                            />
                        );
                    case 'checkbox':
                        return (
                            <FormControlLabel
                                key={key}
                                control={
                                    <Checkbox
                                        checked={field.value}
                                        onChange={(e) => {
                                            handleChange(e, key);
                                        }}
                                    />
                                }
                                label={field.label}
                            />
                        );
                    case 'image':
                        return (
                            <TextField
                                key={key}
                                id={field.id}
                                label={field.label}
                                defaultValue={field.value}
                                onChange={(e) => {
                                    handleChange(e, key);
                                }}
                            />
                        );
                    case 'select':
                        return (
                            <div key={key}>
                                <InputLabel id={field.id}>{field.label}</InputLabel>
                                <Select
                                    labelId={field.id}
                                    id={`${field.id}-select`}
                                    value={field.value}
                                    label={field.label}
                                    sx={{ width: '25vw' }}
                                    onChange={(e) => {
                                        handleChange(e, key);
                                    }}
                                >
                                    {field.options.map((option, index) => (
                                        <MenuItem key={index} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                        );
                    default:
                        return <div key={key} />;
                }
            })}
            <Stack direction="row" spacing={2}>
                {actions.map((action, key) => {
                    const onClick = action.props.onClick ? () => action.props.onClick(state) : null;
                    return (
                        <Button {...action.props} onClick={onClick} key={key}>
                            {action.label}
                        </Button>
                    );
                })}
            </Stack>
        </FormGroup>
    );
};
export default EditForm;
