import { useState } from "react";

const Display = () => {
    const createdijits =() => {
        const dijits=[];
        for(let i=0;i<10;i++){
            dijits.push(
            <button onClick={()=> update(i.toString())}>{i}</button>
            )
        }
        return dijits;
    }
    const [cal,setCalc]=useState('');
    const [result,setResult] = useState('');
    const ops = ['+','-','*','/'];

    const update =(value)=>{
       if (
           ( ops.includes(value)&& cal ==='' ) || (ops.includes(value) && ops.includes(cal.slice(-1))))
        return ;
        setCalc(cal+value)
        if(!ops.includes(value)){
            setResult(eval(cal +  value).toString())
        }
    }
    const calculate =()=>{
       setCalc(result.toString());
    }
    const del=()=>{
        if(cal ===''){
            return;
        }
        const value = cal.slice(0,-1);
        setCalc(value);
    }

    return ( 
        <div className="container">
            <h2>Calculator</h2>
            <div className="textfeild">
            {result ? <span>({result})</span>:''}
            {cal || "0"}
            </div>
            <div className="operators">
                <button onClick={()=>{update('+')}}>+</button>
                <button onClick={()=>{update('-')}}>-</button>
                <button onClick={()=>{update('*')}}>*</button>
                <button onClick={()=>{update('/')}}>/</button>
                <button onClick={del}>Del</button>
            </div>
            <div className="dijits">
            {createdijits()}
            <button onClick={()=>{update('.')}}>.</button>
            <button onClick={calculate}>=</button>
            </div>
        </div>
     );
}
 
export default Display;