
import React, { useState } from 'react';
const Button =()=>{
   
     const [value, setValue]= useState(" ");
const [input , setInput]= useState(" ");
const handleonClick =(value)=>{
    setInput (input + value);
}
 const handleChange=(event)=>{
     setInput(event.target.value);
 };
 const Clear=()=>{
     setInput(" ");
     setValue(" ");
 };
 const backspace=()=>{
    setInput(input.slice(0,-1));
    setValue(" ");
 }
 const handleEqualClick=()=>{
    try {
         //Evalute the input String (e.g )
          setValue(eval(input));
}
catch{
    setValue("error)");
}
     
 }
 
  return(
         <div className=' bg-gray-500 m-100 mt-25 inline absolute h-143 w-90  rounded'>
        <div>
        <input className=' bg-blue-50 py-5 px-5 m-5 border-white-3  rounded w-80' onChange={handleChange}   value={ input}></input>
            </div>
            <div> Result :{  value}</div>
          
                    
         <button  className='bg-blue-500 py-5 px-5 m-5 hover:bg-red-500 rounded  text-white-500 justify-right  size-12'  onClick={()=> Clear ("AC")}  > Ac</button>
                      
            <button  className='bg-blue-500 py-5 px-5 m-5 hover:bg-red-500 rounded  text-white-500 justify-right  size-12'  onClick={()=> handleonClick (" &")}  > &</button>
                      
                                
            <button  className='bg-blue-500 py-5 px-5 m-5 hover:bg-red-500 rounded  text-white-500 justify-right  size-12'  onClick={()=> handleonClick ("R")}  > R</button>
            <button  className='bg-blue-500 py-5 px-5 m-5 hover:bg-red-500 rounded  text-white-500 justify-right  size-12'  onClick={()=> backspace ("Del")}  >Del </button>
            <button  className='bg-blue-500 py-5 px-5 m-5 hover:bg-red-500 rounded  text-white-500 justify-right  size-12'  onClick={()=> handleEqualClick ("=")}   > =</button>
            <button  className='bg-blue-500 py-5 px-5 m-5 hover:bg-red-500 rounded  justify-right  size-12'   onClick={()=> handleonClick("*")}> *</button>
         <button  className='bg-blue-500 py-5 px-5 m-5 hover:bg-red-500 rounded  justify-right  size-12'  onClick={()=>handleonClick("%")}  > %</button>
         <button  className='bg-blue-500 py-5 px-5 m-5 hover:bg-red-500 rounded  justify-right  size-12'   onClick={()=> handleonClick ("0")} > 0</button>
          <button  className='bg-blue-500 py-5 px-5 m-5 hover:bg-red-500 rounded  justify-right  size-12'  onClick={()=> handleonClick (" -")}  > -</button>
          
           <button  className='bg-blue-500  py-5 px-5 m-5  hover:bg-red-500 rounded    size-12'   onClick={ ()=>handleonClick ("9")} > 9</button>
            <button  className='bg-blue-500  py-5 px-5  m-5  hover:bg-red-500 rounded    size-12'  onClick={()=>handleonClick ("8")}  > 8</button>
             
             <button  className='bg-blue-500  py-5 px-5  m-5 hover:bg-red-500 rounded    size-12'  onClick={ ()=>{handleonClick("7")}}  > 7</button>
             <button  className='bg-blue-500  py-5 px-5  m-5 hover:bg-red-500 rounded    size-12'  onClick={()=>handleonClick ("+")}  > +</button>
             <button  className='bg-blue-500  py-5 px-5  m-5 hover:bg-red-500 rounded    size-12'  onClick={ ()=>handleonClick ("6")}  > 6</button>
             <button  className='bg-blue-500  py-5 px-5  m-5 hover:bg-red-500 rounded    size-12' onClick={()=>handleonClick("5")}   > 5</button>
             <button  className='bg-blue-500  py-5 px-5  m-5 hover:bg-red-500 rounded    size-12'   onClick={()=> handleonClick ("4")}  > 4</button>
             <button  className='bg-blue-500  py-5 px-5  m-5 hover:bg-red-500 rounded    size-12'  onClick={ ()=> handleonClick (".")}  > .</button>
             <button  className='bg-blue-500  py-5 px-5  m-5 hover:bg-red-500 rounded    size-12'  onClick={ ()=> handleonClick ("3")}  > 3</button>
             <button  className='bg-blue-500  py-5 px-5  m-5 hover:bg-red-500 rounded    size-12'  onClick={()=> handleonClick ("2")}  > 2</button>
             <button  className='bg-blue-500  py-5 px-5  m-5 hover:bg-red-500 rounded    size-12'   onClick={()=> handleonClick("1")} > 1</button>
      

      </div>


    );
}


export default Button;
