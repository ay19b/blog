import React from 'react';
import './world.css';
import i1 from '../../images/world/i1.jpg'
import i2 from '../../images/world/i2.jpg'
import i3 from '../../images/world/i3.jpg'
import i4 from '../../images/world/i4.jpg'
import i5 from '../../images/world/i5.jpg'

export default function World() {
  return (
    <div className='world'>
       <div className='head'>
         <h3>World News</h3>
         <h5>View all</h5>
       </div>
       <div className='line'></div>
      <div className='inf-world'>
       <div className='worldMain'>
        <img src={i1} />
        <div className='overlay'>
         <div className='contentOverlay'>
          <span>apple</span>
          <h2>11 of Best Laptops Evaluated Based on Budget</h2>
          <h5>by John Doe- August 02, 2021</h5>
         </div>  
        </div>
       </div>

       <div className='worldAside'>
          <div className='item'>
            <img src={i2} />
            <div className='itemCont'>
              <h6>How We Know Disinfectants Should Kill the Covid-19</h6>
              <span>August 02, 2021</span>
            </div>
          </div>
          <div className='item'>
            <img src={i3} />
            <div className='itemCont'>
              <h6>How We Know Disinfectants Should Kill the Covid-19</h6>
              <span>August 02, 2021</span>
            </div>
          </div>
          <div className='item'>
            <img src={i4} />
            <div className='itemCont'>
              <h6>How We Know Disinfectants Should Kill the Covid-19</h6>
              <span>August 02, 2021</span>
            </div>
          </div>
          <div className='item'>
            <img src={i5} />
            <div className='itemCont'>
              <h6>How We Know Disinfectants Should Kill the Covid-19</h6>
              <span>August 02, 2021</span>
            </div>
          </div>
       </div>
       </div>
    </div>
  )
}
