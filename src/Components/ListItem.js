import React from 'react';
import styled from 'styled-components';
const List=styled.ul`
display:flex;
justyfy-content:space-around;
flex-wrap: wrap;
justify-content: space-around;
`;
const Item=styled.li`
width:300px;
height:155px;
background-image:${(props)=>`url(${props.img})`};
background-position:center;
background-size:cover;
margin:30px;
pading:15px;
border-radius:8px;
&:hover {
    box-shadow:inset 0 0 25px 25px rgba(100,55,0,0.5);
}
`;

export const ListItem=({itemList,setOpenItem})=>(
    <List>
{itemList.map(item=>(
    <Item key={item.id} img={item.img} onClick={()=>setOpenItem(item)}>
        <p>{item.name}</p>
        <p>{item.price.toLocaleString('ru-RU',{style:'currency',currency:'RUB'})}</p>
        </Item>
))}
    </List>
);