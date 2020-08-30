import React from 'react';
import styled from 'styled-components';
import dbmenu from './DBMenu';
import {ListItem} from './ListItem';
import {Banner} from './Banner';

const StyleMenu=styled.main`
    background-color:black;
    text-align:center;
    color:white;
    margin-left:380px;
`;
const SectionMenu=styled.section`
    padding:50px;
    color:blue;
    font-size:28px;
    text-shadow: 1px 1px white;
`;
const H2=styled.main`
    color:red;
    font-size:30px;
    font-family:Arial;
`;
export const Menu=({setOpenItem})=>(
    <StyleMenu>
        <Banner/>
        <SectionMenu>
            <H2>Бургеры</H2>
            <ListItem itemList={dbmenu.burger} setOpenItem={setOpenItem} />
            <H2>Закуски/Напитки</H2>
            <ListItem itemList={dbmenu.other} setOpenItem={setOpenItem}/>
        </SectionMenu>
    </StyleMenu>
);
