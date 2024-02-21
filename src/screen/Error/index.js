import { Box, Typography } from '@mui/material'
import React from 'react'
import { COLORS } from '../../COLORS'

const Error = () => {
  return (
    <Box sx={ { height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 5 } }>
      <Typography sx={ { color: COLORS.heading, fontSize: 35 } }>Something went wrong</Typography>
      <Typography sx={ { color: COLORS.heading, fontSize: 30 } }>Page Not Found!!!</Typography>
    </Box>
  )
}

export default Error