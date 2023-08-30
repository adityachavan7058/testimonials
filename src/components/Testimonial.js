
import React, { useState } from 'react'
import Card from './Card'


import {FiChevronLeft,FiChevronRight}  from 'react-icons/fi';
const Testimonial = (props) => {

    let review=props.review;

      let[index,setIndex]=useState(0);

      const leftShiftHandler=()=>{

            if(index-1 <0){

                 setIndex(review.length-1);
            }
            else{

                  setIndex(index-1);
            }
      }

      const rightShiftHandler=()=>{

             if(index+1 >=review.length){

                  setIndex(0);
             }
             else{
                 setIndex(index+1);
             }
      }

      const surpriseHandler=()=>{

              setIndex(Math.floor(Math.random()*review.length))
      }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
        <Card review={review[index]}/>
       

         <div className="flex text-3xl mt-5 gap-3 text-violet font-bold  justify-center mb-5">
            <button  className='cursor-pointer hover:text-violet-500' onClick={leftShiftHandler}>
                <FiChevronLeft></FiChevronLeft></button>

            <button className='cursor-pointer hover:text-violet-500' onClick={rightShiftHandler}><FiChevronRight></FiChevronRight></button>
         </div>

         <div className="">
            <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold ' onClick={surpriseHandler}>Suprise Me</button>
         </div>

       
    </div>
  )
}

export default Testimonial