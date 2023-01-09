import React from 'react'
import './popular.css'
import image1 from "../../images/p1.jpg"

export default function Popular() {
  return (
    <div className='popular'>
       <div className='head'>
         <h3>Popular</h3>
       </div>
       <div className='line'></div>
       <div className='inf-pop'>
          <div className='articl-pop'>
            <img src={image1} />
            <div className='overlay'>
              <div className='contentOverlay'>
                <span>apple</span>
                <h2>11 of Best Laptops Evaluated Based on Budget</h2>
                <h5>by John Doe- August 02, 2021</h5>
              </div>  
            </div>
          </div>
          <div className='articlAside'>
          <div className='item'>
            <img src={image1} />
            <div className='itemCont'>
              <h6>How We Know Disinfectants Should Kill the Covid-19</h6>
              <span>August 02, 2021</span>
            </div>
          </div>
          <div className='item'>
            <img src={image1} />
            <div className='itemCont'>
              <h6>How We Know Disinfectants Should Kill the Covid-19</h6>
              <span>August 02, 2021</span>
            </div>
          </div>
          <div className='item'>
            <img src={image1} />
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
