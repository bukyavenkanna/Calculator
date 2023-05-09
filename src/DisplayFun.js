import React, { useState } from "react"
const DisplayFun=(props)=>{
    const[name,setName]=useState("ram krishna")
    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}
export default DisplayFun