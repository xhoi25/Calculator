import React, {useState} from 'react'

const Steptrack = () => {
    const [steps,setSteps] = useState(0);
    function increment(){
       setSteps(prevState=>prevState+1) 
    }
  return (
    <div>
    You have taken {steps}
      <button onClick={increment}>another step</button></div>
  )
    
    
}

export default Steptrack
