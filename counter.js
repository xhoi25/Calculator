import React, {useState}from 'react';
import Add_btn from './Add_btn';

const Counter = (props) => {
 
    const {productName, price}=props.productData;
    console.log(props);
    const [count, setCount] = useState(0);
    const addMore = () =>{
        setCount(count + 1)
    }
  return (
   <div>
    <Add_btn addMore={addMore}/> 
    <h1>{productName}</h1>
    <h1>Add</h1>
    <h1>{count}</h1>
    <button onClick={addMore}>ADD</button>
   </div>


  )
}

export default Counter

