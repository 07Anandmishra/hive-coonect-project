import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, Popover } from '@mui/material';

const ColumnSelector = ({ columns, columnVisibility, handleColumnVisibilityChange ,disable}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const openColumnSelector = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeColumnSelector = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button 
        style={{ float: 'right', marginTop: '20px' }} 
        variant="contained" 
        onClick={openColumnSelector}
        disabled={disable}
      >
        Show Columns
      </Button>
      
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={closeColumnSelector}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
          {columns.map((column) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={columnVisibility[column.id]}
                  onChange={() => handleColumnVisibilityChange(column.id)}
                />
              }
              label={column.name}
              key={column.id}
            />
          ))}
        </div>
      </Popover>
    </>
  );
};

export default ColumnSelector;