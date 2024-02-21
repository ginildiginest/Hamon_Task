// CustomTab.js
import { Box, Typography } from '@mui/material';
import React, { memo } from 'react';
import { COLORS } from '../COLORS';

const CustomTab = ({ label, selectTab, active }) => {
  const handleClick = (value) => {
    selectTab(value)
  }

  return (
    <Box
      width={ { xs: 200, sm: 200, md: 200, lg: 'unset', xl: 'unset' } }
      height={ 40 }

      onClick={ () => handleClick(label?.menu_category_id) }
      sx={ {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: `3px solid ${active === label?.menu_category_id ? COLORS.border : 'transparent'}`,
        cursor: 'pointer',
      } }
    >
      <Typography
        sx={ {
          width: { xs: 200, sm: 200, md: 200, lg: 'unset', xl: 'unset' },
          letterSpacing: 1,
          color: active === label?.menu_category_id ? COLORS.border : COLORS.heading,
          fontSize: active === label?.menu_category_id ? { xs: 16, sm: 16, md: 18 } : { xs: 14, sm: 14, md: 16 },
          fontWeight: 'bold',
          marginBottom: 2,
        } }
      >
        { label?.menu_category }
      </Typography>
    </Box>
  )
}

export default memo(CustomTab);
