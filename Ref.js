import React,{useRef} from 'react'

const Ref = () => {
    const countRef=useRef(0);
    const handle=() =>{
        countRef.current++;
        console.log(' clicked ${countRef.current} times')
    }
  return (
    <div>
      <button onClick={handle}>click</button>
      </div>
    
  )
}

export default Ref
