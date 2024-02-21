// Home.js
import { Box } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../components/Header';
import CustomTab from '../../components/CustomTab';
import ProductCard from '../../components/productCard';


const Home = () => {

    const data = useLoaderData();

    const [item, setItem] = useState([]);
    const [select, setSelect] = useState(data?.data?.[0].table_menu_list?.[0]?.menu_category_id || null)

    const SelectTab = useCallback((value) => {
        setSelect(value);
    }, [select])

    useEffect(() => {
        if (select) {
            let find = data?.data?.[0].table_menu_list?.find((res) => res?.menu_category_id === select)
            setItem(find?.category_dishes)
        }
    }, [select])

    return (
        <Box px={ { xs: 5, sm: 5, md: 10, xl: 25, lg: 25, } } height={ '100dvh' }>
            <Box top={ 0 } left={ 0 } right={ 0 } zIndex={ 999 } position={ 'sticky' }>
                <Header item={ data } />
            </Box>

            <Box

                display="flex"
                alignItems="center"
                pt={ 3 }
                overflowX="scroll"
                justifyContent={ 'space-between' }
                sx={ {
                    overflowY: 'scroll',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                        whiteSpace: 'none'
                    },
                } }
            >
                { data?.data?.[0]?.table_menu_list?.map((res) => (
                    <CustomTab key={ res.menu_category_id } label={ res } selectTab={ SelectTab } active={ select } />
                )) }
            </Box>


            <Box my={ 5 }>
                { item?.map((res) => (
                    <ProductCard item={ res } />
                )) }
            </Box>

        </Box>
    )
}

export default Home;
