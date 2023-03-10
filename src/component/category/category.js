import React from 'react'
import image1 from "../../images/p1.jpg"
import image2 from "../../images/p2.jpg"
import image3 from "../../images/p3.jpg"
import image4 from "../../images/p4.jpg"
import './category.css'

export default function Category() {
  return (
    <div className='category'>
      <div className='gadgets'>
        <div className='head'>
         <h3>Gadgets</h3>
         <h5>View all</h5>
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
            <img src={image2} />
            <div className='itemCont'>
              <h6>How We Know Disinfectants Should Kill the Covid-19</h6>
              <span>August 02, 2021</span>
            </div>
          </div>
          <div className='item'>
            <img src={image3} />
            <div className='itemCont'>
              <h6>How We Know Disinfectants Should Kill the Covid-19</h6>
              <span>August 02, 2021</span>
            </div>
          </div>
          <div className='item'>
            <img src={image4} />
            <div className='itemCont'>
              <h6>How We Know Disinfectants Should Kill the Covid-19</h6>
              <span>August 02, 2021</span>
            </div>
          </div>
          
          </div>
         </div>
        </div>
      <div className='laptops'>
      <div className='head'>
         <h3>Laptops</h3>
         <h5>View all</h5>
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
            <img src={image2} />
            <div className='itemCont'>
              <h6>How We Know Disinfectants Should Kill the Covid-19</h6>
              <span>August 02, 2021</span>
            </div>
          </div>
          <div className='item'>
            <img src={image3} />
            <div className='itemCont'>
              <h6>How We Know Disinfectants Should Kill the Covid-19</h6>
              <span>August 02, 2021</span>
            </div>
          </div>
          <div className='item'>
            <img src={image4} />
            <div className='itemCont'>
              <h6>How We Know Disinfectants Should Kill the Covid-19</h6>
              <span>August 02, 2021</span>
            </div>
          </div>
          
         </div>
         </div>
        </div>
    </div>
  )
}
