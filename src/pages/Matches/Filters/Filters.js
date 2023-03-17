import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


const Filters = ({ teams, team, setTeam }) => {
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setTeam(event.target.value);
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
        SELECT <span className='fw-bold'>TEAM</span>
      </Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel sx={{ color: '#fff' }} id="demo-controlled-open-select-label">Team </InputLabel>
        <Select
          sx={{ color: '#fff' }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={team}
          label="Team"
          onChange={handleChange}
        >
          <MenuItem value="all">
            <em>All Teams</em>
          </MenuItem>
          {teams.map(team => <MenuItem key={team[1]} value={team[1]}>{team[0]}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}


export default Filters