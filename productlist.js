import React from 'react'

const Productlist = () => {
 const array=["product 1", "product 2"];

    return (
    <div>
      {array.map((arr)=>{
        return (
            <>
            <div>{arr}</div>
            <p>PROMOCION 15% ULJE</p>
            <button>Edit</button>
            </>
          );
        })}
       
      
    </div>
  )
}

export default Productlist;


