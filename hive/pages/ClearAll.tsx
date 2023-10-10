import { Button } from '@mui/material'
import React from 'react'

const ClearAll = ({clearAll}) => {
  return (
    <div>
        <Button variant="outlined" onClick={clearAll}>Clear filter/sort</Button>
    </div>
  )
}

export default ClearAll