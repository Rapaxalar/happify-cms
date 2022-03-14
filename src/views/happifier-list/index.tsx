// material-ui
import Box from '@mui/material/Box';
import Loader from 'ui-component/Loader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSharp from '@mui/icons-material/EditSharp';
import Chip from '@mui/material/Chip';

// project imports
import * as React from 'react';
import { useQuery, gql } from '@apollo/client';

// ==============================|| SAMPLE PAGE ||============================== //
type Translations = {
    de_DE: string;
    en_US: string;
    es_US: string;
};

type Happifier = {
    id: number;
    happifierType: string;
    humanUrl: string;
    titleTranslations: Translations;
    isEnabled: boolean;
    isSponsored: boolean;
    availableLocales: string[];
    createdAt: string;
    modifiedAt: string;
};

type Edge = {
    node: Happifier;
};

type Data = {
    allHappifiers: {
        edges: Edge[];
    };
};

const HAPPIFIERS = gql`
    {
        allHappifiers {
            edges {
                node {
                    id
                    happifierType
                    humanUrl
                    titleTranslations
                    isEnabled
                    isSponsored
                    availableLocales
                    createdAt
                    modifiedAt
                }
            }
        }
    }
`;

const getHappifiers = (data: Data) => data?.allHappifiers?.edges.map((edge) => edge.node);

const HappifierList = () => {
    const { loading, error, data } = useQuery(HAPPIFIERS);
    const rows = getHappifiers(data);
    const currentLang = 'en_US';

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return loading || error ? (
        <Loader />
    ) : (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Happifier Type</TableCell>
                                <TableCell>Human Url</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Is Enabled</TableCell>
                                <TableCell>Is Sponsored</TableCell>
                                <TableCell>Available Locales</TableCell>
                                <TableCell>Created At</TableCell>
                                <TableCell>Modified At</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell>{row.happifierType}</TableCell>
                                    <TableCell>{row.humanUrl}</TableCell>
                                    <TableCell>{row.titleTranslations[currentLang]}</TableCell>
                                    <TableCell>
                                        <Checkbox checked={row.isEnabled} disabled />
                                    </TableCell>
                                    <TableCell>
                                        <Checkbox checked={row.isSponsored} disabled />
                                    </TableCell>
                                    <TableCell>
                                        {row.availableLocales.map((locale, key) => (
                                            <Chip key={key} label={locale} size="small" sx={{ m: 0.125 }} />
                                        ))}
                                    </TableCell>
                                    <TableCell>{row.createdAt.split('.')[0].replace('T', ' ')}</TableCell>
                                    <TableCell>{row.modifiedAt.split('.')[0].replace('T', ' ')}</TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={0}>
                                            <IconButton aria-label="delete" color="primary">
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton aria-label="edit" color="primary" href={`/happifier/edit/${row.id}`}>
                                                <EditSharp />
                                            </IconButton>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}

                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 53 * emptyRows
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 50]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
};

export default HappifierList;
