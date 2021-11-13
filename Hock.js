import React,{useState} from 'react'

function Hock() {
    let [age,setAge]=useState(20)
    return (
        <div>
            <h1  onMouseOver={()=>{setAge(21)}}
            onMouseleave={()=>{setAge(20)}}>Guna age is {age}</h1>
        </div>
    )
}

export default Hock


