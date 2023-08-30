import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
const Card = (props) => {

    let review=props.review;
  return (
    <div className='flex flex-col md:relative'>
        <div className="absoulte top-[-7rem] z-[10] mx-auto mt-10">
            <img src={review.image}
              className='aspect-square rounded-full w-[140px] h-[140px] z-[25px]'
            />
            
        </div>

         <div className="text-center mt-7">
            <p  className='font-bold text-2xl capitalize'>{review.name}</p>
            <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
         </div>


         <div className=" text-center mt-7">
           
         </div>

         <div className="text-violet-400 mx-auto mt-5">
            <FaQuoteLeft></FaQuoteLeft>
         </div>

         <div className="text-center mt-4 text-slate-500">
            {review.text}  
         </div>

         <div className="text-violet-400 mx-auto mt-5">
            <FaQuoteRight></FaQuoteRight>
         </div>

       
    </div>
  )
}

export default Card