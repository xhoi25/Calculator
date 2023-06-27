import React, { Component } from 'react'
import {render} from "react-dom";


export default class Api extends Component {
    state={
        people:[]
    };
    loadData=async()=>{
        const response=await fetch("https://randomuser.me/api?results=5");
        const data= await response.json();
       this.setState({
            people:data.results
        })


    }
  render() {
    const { people }=this.state;
    return (
      <div>
        <button onClick={this.loadData}>load data</button>
        {people.map((x) => (
            <div key={x.name.first}>{x.name.first}</div>
         ))}
      </div>
    )
  }
}

