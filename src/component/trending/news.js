import React, { useEffect, useState } from 'react'
import {MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight} from "react-icons/md"
import './news.css'



export default function News() {
  const [text,setText] = useState('');
  const news =[
    'Apple Watch Series 5 is the Best One Yet By Consumer',
    'Great Local Multiplayer Games to Play on PS5',
    ' How to Get COVID-19 Related Alerts on Your Phone',
    '11 of Best Laptops Evaluated Based on Budget',
    'The Best Xbox 360 Co-Op Offline Split-Screen Games',
    'Great Local Multiplayer Games to Play on PS5',
   ];

   
   
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
              <MdOutlineKeyboardArrowLeft />
              <MdOutlineKeyboardArrowRight />
            </div>
        </div>
      </div>
    </div>
  )
}
