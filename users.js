import React from 'react'
const props= {
    name:"Student 1",
    surname:"Ipsum",
    city:"Tirane",
    salary:500,
};

const Users = (props) => {
  return (
    <div>
      <p>Name: {props.name} </p>
      <p>Surname: {props.surname} </p>
      <p>City: {props.city} </p>
      <p>Salary: {props.salary} </p>
    </div>
  )
}

export default Users
 