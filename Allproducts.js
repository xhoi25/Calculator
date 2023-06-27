import React from 'react'
import styled from 'styled-components';
import {theme} from "material-ui/core/styles";



const Wrapper=styled.div 
max-width:1200 px;
text-align:center;
padding:20px;
> a{
    color#000;
    text-decoration:none;
}
 const Spacer=styled.span
 margin:0 10px;
 color:{props=>props.color}
 ;


 const Allproducts = () => {
  return (
    <Wrapper>
      <Spacer color= {theme.palette.Secondary.main}></Spacer>
    </Wrapper>
  )
}

export default Allproducts
