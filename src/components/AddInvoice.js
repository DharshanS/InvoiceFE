import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [status, setStatus] = React.useState('');

    const handleStatus = (event) => {
        setStatus(event.target.value);
    };

    return (
        <div>
            <Button variant='contained' color="success" onClick={handleOpen}><AddIcon />Add New Invoice</Button>
    
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                        <FormControl fullWidth>
                            <TextField id="invoiceNo" label="Invoice Number " variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                        <FormControl fullWidth>
                            <TextField id="cutomer" label="Customer" variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                            <TextField id="email" label="Email " variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Invoice Date"></DatePicker>
                            </LocalizationProvider>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="status-select-label">Staus</InputLabel>
                                <Select
                                    labelId="status-select-label"
                                    id="status-select"
                                    value={status}
                                    label="Status"
                                    onChange={handleStatus}
                                >
                                    <MenuItem value={10}>Pending</MenuItem>
                                    <MenuItem value={20}>Paid</MenuItem>
                                    <MenuItem value={30}>Unpaid</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={6}>
                        <FormControl>
                            <Button variant='contained' color="success"><AddIcon /> Add Invoice </Button>
                        </FormControl>
                        </Grid>

                    </Grid>


                </Box>

            </Modal>

        </div>
    );
}

