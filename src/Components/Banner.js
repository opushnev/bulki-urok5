import React from 'react';
import styled from 'styled-components';
import LogoBanner from '../image/banner.png';
const Bannerstyle=styled.div`
    width:100%;
    height:200px;
    background-size:cover;
    background-position:center;
    `;
export const Banner=()=>(
    <Bannerstyle>
      <img src={LogoBanner} alt="banner"></img>  
    </Bannerstyle>
    
);