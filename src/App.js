import React,{useState} from 'react';
import './App.css';
const App =()=>{
    const[data,setData]=useState("")
    const Handier=e=>{
        setData(e.target.value)
    }
    const[result,setResult]=useState(0)
    return(
        <div>
            <center>
                <input type="text" value={data} name="data" onChange={Handier}/>
                <button onClick={()=>setResult(eval(data))}>Result</button>

                <h1 style={{color:"green"}}>Result is: {result}</h1><br/>
                <button onClick={()=>setData(data+'1')}>1</button>
                <button onClick={()=>setData(data+'2')}>2</button>
                <button onClick={()=>setData(data+'3')}>3</button>
                <button onClick={()=>setData(data+'4')}>4</button>
                <button onClick={()=>setData(data+'5')}>5</button><br/>
                <button onClick={()=>setData(data+'6')}>6</button>
                <button onClick={()=>setData(data+'7')}>7</button>
                <button onClick={()=>setData(data+'8')}>8</button>
                <button onClick={()=>setData(data+'9')}>9</button>
                <button onClick={()=>setData(data+'0')}>0</button><br/>
                <button onClick={()=>setData(data+'-')}>-</button>
                <button onClick={()=>setData(data+'+')}>+</button>
                <button onClick={()=>setData(data+'*')}>*</button>
                <button onClick={()=>setData(data+'/')}>/</button>
                <button onClick={()=>setData('')}>Clr</button>
                
            </center>
        </div>
    )
}
export default App;