import { useState } from "react";

const Display = () => {
    // const createdijits =() => {
    //     const dijits=[];
    //     for(let i=9;i>=1;i--){
    //         dijits.push(
    //         <button onClick={()=> update(i.toString())}>{i}</button>
    //         )
    //     }
    //     return dijits;
    // }
    const [cal,setCalc]=useState('');
    const [result,setResult] = useState('');
    const ops = ['+','-','*','/','.'];

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
       setResult(result.toString());
    }
    const del=()=>{
        if(cal ===''){
            return;
        }
        const value = cal.slice(0,-1);
        setCalc(value);
    }
    const clear =()=>{
        setResult('');
        setCalc('');
    }

    return ( 
        <div className="container">
            <h2>Calculator</h2>
            <div className="res">{cal ? <span>{cal}</span>:''}</div>
            <div className="textfeild">
            {/* {result ? <span>({result})</span>:''} */}
            {result || "0"}
            </div>
            {/* <div className="operators">
                <button onClick={()=>{update('+')}}>+</button>
                <button onClick={()=>{update('-')}}>-</button>
                <button onClick={()=>{update('*')}}>*</button>
                <button onClick={()=>{update('/')}}>/</button>
                <button onClick={del}>Del</button>
                
            </div> */}
            <div className="dijits">
            {/* {createdijits()} */}
            <button onClick={()=>{update('')}}>nul</button>
            <button onClick={()=>{update('')}}>nul</button>
            <button onClick={del}>Del</button>
            <button onClick={()=>{update('/')}}>/</button>
            <button onClick={()=>{update('7')}}>7</button>
            <button onClick={()=>{update('8')}}>8</button>
            <button onClick={()=>{update('9')}}>9</button>
            <button onClick={()=>{update('*')}}>*</button>
            <button onClick={()=>{update('4')}}>4</button>
            <button onClick={()=>{update('5')}}>5</button>
            <button onClick={()=>{update('6')}}>6</button>
            <button onClick={()=>{update('-')}}>-</button>
            <button onClick={()=>{update('1')}}>1</button>
            <button onClick={()=>{update('2')}}>2</button>
            <button onClick={()=>{update('3')}}>3</button>
            <button onClick={()=>{update('+')}}>+</button>
            <button onClick={clear}>C</button>
            <button onClick={()=>{update('0')}}>0</button>
            <button onClick={()=>{update('.')}}>.</button>
            <button onClick={calculate}>=</button>
            
            </div>
        </div>
     );
}
 
export default Display;