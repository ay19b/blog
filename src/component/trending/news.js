import React, { useEffect, useState } from 'react'
import {MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight} from "react-icons/md"
import './news.css'



export default function News() {
  const [text,setText] = useState('Apple Watch Series 5 is the Best One Yet By Consumer');
  const [counter,setCounter] = useState(0);
  const news =[
    'Apple Watch Series 5 is the Best One Yet By Consumer',
    'Great Local Multiplayer Games to Play on PS5',
    'How to Get COVID-19 Related Alerts on Your Phone',
    '11 of Best Laptops Evaluated Based on Budget',
    'The Best Xbox 360 Co-Op Offline Split-Screen Games',
    'Great Local Multiplayer Games to Play on PS5',
   ];

   const nextNews = () => {
    setCounter(counter + 1)
    setText(news[counter])
  };

  const prevNews = () => {
    setCounter(counter - 1)
    setText(news[counter])
  };

  if(counter>5){
    setCounter(0)
   }

   if(counter<0){
    setCounter(5)
   }

   

  useEffect(() => {
    const intervalId = setInterval(()=>{
      setCounter(counter+1)
      setText(news[counter])
    },3000)
    return () => {
      clearInterval(intervalId);
    };
  },)

  
  return (
    <div className='news'>
      <div className='container'>
        <div className='content'>
            <div className='leftContent'>
                <div className='point'></div>
                <span>TRENDING<MdOutlineKeyboardArrowRight /></span>
                <h5>{text}</h5>
            </div>
            <div className='rightContent'>
              <MdOutlineKeyboardArrowLeft onClick={prevNews}/>
              <MdOutlineKeyboardArrowRight onClick={nextNews}/>
            </div>
        </div>
      </div>
    </div>
  )
}
