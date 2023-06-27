import React, { Fragment } from 'react'
import styled from 'styled-components';
import Paper from 'mui/material';

const Hero=styled.div
height:400px;
width:1200px;
background-image:url("")
background-size:cover;
align-items.center;
display:block;
;

const Landing = () => {
  return (
    <Fragment>
      <Hero>
        <div className="herotitle"> 
        <h1>Welcome to E-shop</h1>
        </div>
      </Hero>
      <Paper></Paper>

    </Fragment>
  )
}

export default Landing
