import React from 'react'
import image1 from "../../images/p1.jpg"
import image2 from "../../images/p2.jpg"
import image3 from "../../images/p3.jpg"
import image4 from "../../images/p4.jpg"
import "./album.css"

export default function Album() {
  return (
    <section>
        <div className="container">
            <div className='imageAlbum'>
                <div className='leftAlbum'>
                    <img src={image1} />
                    <div className='overlay'>
                        <div className='contentOverlay'>
                          <span>apple</span>
                          <h2>11 of Best Laptops Evaluated Based on Budget</h2>
                          <h5>by John Doe- August 02, 2021</h5>
                        </div>  
                    </div>
                </div>
                <div className='rightAlbum'>
                    <div className='imageAlbm'>
                       <img src={image2} />
                       <div className='overlay'>
                        <div className='contentOverlay'>
                          <span>laptops</span>
                          <h3>Apple Watch Series 5 is the Best One Yet By Consumer</h3>
                          <h5>August 02, 2021</h5>
                        </div>  
                    </div>
                    </div>
                    <div className='imageAlbm'>
                       <img src={image3} />
                       <div className='overlay'>
                        <div className='contentOverlay'>
                          <span>laptops</span>
                          <h3>Here’s What People Think of iOS 13 New Dark Mode</h3>
                          <h5>August 02, 2021</h5>
                        </div>  
                    </div>
                    </div>
                    <div className='imageAlbm'>
                       <img src={image4} />
                       <div className='overlay'>
                        <div className='contentOverlay'>
                          <span>apple</span>
                          <h3>18 Practices for Building Responsive Web Applications</h3>
                          <h5>August 02, 2021</h5>
                        </div>  
                    </div>
                    </div>
                   
                   
                </div>
            </div>
        </div>
    </section>
  )
}
