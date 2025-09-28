// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';



function App(){
   const[count, new_value] = useState(0);

function incrementHandler(){
   new_value(count+1);
}

function decrementHandler(){
      new_value(count-1);
}

function resetHandler(){
   new_value(0);
}

   return (
    <div className='flex flex-col bg-gradient-to-r from-sky-300 justify-center items-center w-full h-screen gap-10'>
     <h1 className='text-blue-600 font-bold text-2xl '>Increment and Decrement</h1>
      <div className='flex bg-white gap-5 justify-center items-center'> 
         <div className='border border-r-black px-6 py-1 text-4xl cursor-pointer' onClick={incrementHandler} >+</div>
         <div className=' px-4 py-1 text-3xl '> {count} </div>
         <div className='border border-l-black px-6 py-1 text-5xl cursor-pointer' onClick={decrementHandler} >-</div>
      </div>
      <button className='bg-blue-900 text-white w-[100px] h-[50px] text-2xl font-bold rounded-lg ' onClick={resetHandler}>Reset</button>
      </div>
   );

}




export default App;
