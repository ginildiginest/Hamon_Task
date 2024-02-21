import { Avatar, Box, Button, Typography } from '@mui/material'
import React, { useCallback, useContext, useMemo } from 'react'
import { COLORS } from '../COLORS'
import CartContext from '../context/Cart'
const ProductCard = ({ item }) => {

    console.log({ item })

    // const IMAGE = {
    //   veg: '../assets/images/veg.png',
    //   nonVeg: '../assets/images/nonveg.png'
    // }

    const { cartItems, incrementItem, decrementItem } = useContext(CartContext);

    // console.log({ cartItems })

    const memoizedCartValue = useMemo(() => ({
        cartItems,
        incrementItem,
        decrementItem
    }), [cartItems, incrementItem, decrementItem]);

    const { cartItems: memoCartItems, incrementItem: memoIncrementItem, decrementItem: memoDecrementItem } = memoizedCartValue;

    const cartItem = memoCartItems.find(cartItem => cartItem.id === item.dish_id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const handleIncrement = useCallback((itemId) => {
        memoIncrementItem(itemId);
    }, [memoIncrementItem]);

    const handleDecrement = useCallback((itemId) => {
        memoDecrementItem(itemId);
    }, [memoDecrementItem]);


    return (
        <Box
            minHeight={ 130 }
            display={ 'flex' }
            justifyContent={ 'space-between' }
            alignItems={ 'center' }
            my={ 3 }
            borderBottom={ `1px solid ${COLORS.bottomLine}` }  >
            <Box>
                <Box>
                    {/* <Avatar src={ item?.dish_name.includes } /> */ }
                    <Typography style={ { color: COLORS.heading, fontSize: 16 } }>{ item?.dish_name }</Typography>
                </Box>

                <Typography
                    style={ { color: COLORS.heading, fontSize: 14 } }
                >{ item?.dish_currency }{ ' ' }{ item?.dish_price }</Typography>
                <Box py={ 1 }>
                    <Typography
                        sx={ { color: COLORS.paragraph, fontSize: 14, maxWidth: '80%' } }
                    >{ item?.dish_description }</Typography>
                </Box>
                { item?.dish_Availability ?
                    <Box
                        my={ 2 }
                        sx={ { backgroundColor: COLORS.button, width: 140 } }
                        display={ 'flex' }
                        alignItems={ 'center' }
                        justifyContent={ 'center' }
                        borderRadius={ 10 }>

                        <Button
                            sx={ { color: COLORS.heading } }
                            onClick={ () => handleDecrement(item?.dish_id) }>-</Button>
                        <Typography sx={ { color: COLORS.heading, fontSize: 18 } }>{ quantity }</Typography>
                        <Button sx={ { color: COLORS.heading } } onClick={ () => handleIncrement(item?.dish_id) }>+</Button>
                    </Box> : <Box my={ 1 } display={ 'flex' } alignItems={ 'center' } >
                        <Typography style={ { color: COLORS.border, fontSize: 16, } }>{ 'Not Availible' }</Typography>
                    </Box> }
                { item?.addonCat?.length > 0 && <Box my={ 1 } display={ 'flex' } alignItems={ 'center' } >
                    <Typography style={ { color: COLORS.border, fontSize: 16, } }>{ 'Customizations available' }</Typography>
                </Box> }

            </Box>
            <Box height={ 120 } borderRadius={ 10 } display={ 'flex' } alignItems={ 'center' } gap={ { xs: 1, sm: 1, md: 2 } }>
                <Typography sx={ { color: COLORS.heading, fontSize: { xs: 11, sm: 11, md: 12, lg: 14, xl: 14 }, width: { xs: 80, sm: 100, md: 'unset', lg: 'unset', xl: 'unset' } } }>{ item?.dish_calories }{ ' ' }{ 'Calories' }</Typography>
                <Avatar src={ item?.dish_image } sx={ { height: '100%', width: { xs: 120, sm: 100, md: 150, lg: 150, xl: 150 }, borderRadius: 2 } } variant='square' />
            </Box>
        </Box>
    )
}

export default ProductCard