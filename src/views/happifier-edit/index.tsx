// material-ui
import Box from '@mui/material/Box';
import Loader from 'ui-component/Loader';
import Paper from '@mui/material/Paper';

// project imports
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { mapFrontToBack, useHappifierQuery } from './actions';
import useLocale from 'hooks/useLocale';
import EditForm from './EditForm';

const HappifierEdit = () => {
    const { id } = useParams();
    const locale = useLocale();

    const { loading, error, formFields } = useHappifierQuery(id);

    const handleSubmitForm = (newData: any) => {
        console.table(mapFrontToBack({ fields: newData, locale }));
    };

    const formActions = [
        {
            label: 'Save',
            props: {
                variant: 'contained',
                color: 'success',
                onClick: handleSubmitForm
            }
        },
        {
            label: 'Save and Add Another',
            props: {
                variant: 'contained',
                onClick: handleSubmitForm
            }
        },
        {
            label: 'Save and Continue Editing',
            props: {
                variant: 'contained',
                onClick: handleSubmitForm
            }
        },
        {
            label: 'Cancel',
            props: {
                variant: 'contained',
                color: 'error',
                href: '/happifier/list'
            }
        }
    ];

    return loading || error ? (
        <Loader />
    ) : (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2, p: 2 }}>
                <EditForm fields={formFields} actions={formActions} />
            </Paper>
        </Box>
    );
};

export default HappifierEdit;
