import React from 'react'
import image1 from "../../images/p1.jpg";
import "./review.css"
import r1 from "../../images/review/r1.jpg";
import r2 from "../../images/review/r2.jpg";
import r3 from "../../images/review/r3.jpg";
import r4 from "../../images/review/r4.jpg";
import r5 from "../../images/review/r5.jpg";
import r6 from "../../images/review/r6.jpg";

export default function Review() {
  return (
    <div className='review'>
       <div className='head'>
         <h3>Review</h3>
         <h5>View all</h5>
       </div>
       <div className='line'></div>

       <div className='inf-review'>
         <div className='item-rew'>
            <img src={r1} />
            <h4>The Best Xbox 360 Co-Op Offline Split-Screen Games</h4>
            <span>July 31, 2021</span>
         </div>
         <div className='item-rew'>
            <img src={r2} />
            <h4>The Best Xbox 360 Co-Op Offline Split-Screen Games</h4>
            <span>July 31, 2021</span>
         </div>
         <div className='item-rew'>
            <img src={r3} />
            <h4>The Best Xbox 360 Co-Op Offline Split-Screen Games</h4>
            <span>July 31, 2021</span>
         </div>
         <div className='item-rew'>
            <img src={r4} />
            <h4>The Best Xbox 360 Co-Op Offline Split-Screen Games</h4>
            <span>July 31, 2021</span>
         </div>
         <div className='item-rew'>

            <img src={r5} />
            <h4>The Best Xbox 360 Co-Op Offline Split-Screen Games</h4>
            <span>July 31, 2021</span>
         </div>
         <div className='item-rew'>
            <img src={r6} />
            <h4>The Best Xbox 360 Co-Op Offline Split-Screen Games</h4>
            <span>July 31, 2021</span>
         </div>
       </div>
    </div>
  )
}
