import React from 'react'
import "./footer.css"
import image1 from "../../images/p1.jpg"


export default function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='contentFooter'>
                <div className='categ'>
                    <h3>Categories</h3> 
                </div>
                <div className='post'>
                    <h3>Latest Posts</h3>
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
                <div className='popularPost'>
                    <h3>Popular Posts</h3>
                </div>
            </div>
        </div>
    </div>
  )
}
