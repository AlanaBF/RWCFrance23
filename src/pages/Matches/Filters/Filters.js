import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


const Filters = ({ filterOptions, option, setOption, title }) => {
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div >
      <Button sx={{ display: 'block', mt: 2, color: '#fff' }} onClick={handleOpen}>
        SELECT <span className='fw-bold'>{title}</span>
      </Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel sx={{ color: '#000', background: '#fff', padding: '3px', borderRadius: '3px' }} id="demo-controlled-open-select-label">{title} </InputLabel>
        <Select
          sx={{ color: '#000', background: '#fff' }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={option}
          label="Team"
          onChange={handleChange}
        >
          <MenuItem value="all">
            <em>All {title}s</em>
          </MenuItem>
          {filterOptions.map(option => <MenuItem key={option[0]} value={option[1] || option[0]}>{option[0]}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}


export default Filters