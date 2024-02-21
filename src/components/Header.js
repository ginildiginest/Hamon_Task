import { Badge, Box, Typography } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React, { useContext } from 'react'
import { COLORS } from '../COLORS'
import CartContext from '../context/Cart';

const Header = ({ item }) => {
    const { cartItems } = useContext(CartContext);
    return (
        <Box height={ 80 } sx={ { backgroundColor: COLORS.primary, display: 'flex', justifyContent: 'space-between', alignItems: 'center', } } >
            <Box>
                <Typography style={ { color: COLORS.heading, fontFamily: 18, fontWeight: 'bold', letterSpacing: 1 } }>{ item?.data?.[0]?.restaurant_name ?? "Restaurant" }</Typography>
            </Box>
            <Box display={ 'flex' } justifyContent={ 'center' } alignItems={ 'center' } gap={ 1 }>
                <Typography style={ { color: COLORS.heading, fontFamily: 18 } }>My Orders</Typography>
                <Badge badgeContent={ cartItems?.length } color="error">
                    <ShoppingCartOutlinedIcon sx={ { color: COLORS.heading, fontSize: 26 } } />
                </Badge>

            </Box>
        </Box>
    )
}

export default Header