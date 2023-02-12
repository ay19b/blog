import React, { useState,useEffect } from 'react';
import image1 from "../../images/p1.jpg"
import image2 from "../../images/p2.jpg"
import image3 from "../../images/p3.jpg"
import image4 from "../../images/p4.jpg"
import "./feature.css"
import { Link } from 'react-router-dom';
import {ClipLoader} from 'react-spinners';


export default function Feature() {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true)
    },1200)
  })

  return (
    <section className='feature'>
        <div className="container">
            <div className='imageAlbum'>
                <div className='leftAlbum'>
                <Link to="/Laptop">
                    <img src={image1} />
                    <div className='overlay'>
                        <div className='contentOverlay'>
                          <span>apple</span>
                          <h2>11 of Best Laptops Evaluated Based on Budget</h2>
                          <h5>by John Doe- August 02, 2021</h5>
                        </div>  
                    </div>
                </Link>
                </div>
                
                <div className='rightAlbum'>               
                    <div className='imageAlbm'>
                    <Link to="/Watch">
                       <img src={image2} />
                       <div className='overlay'>
                        <div className='contentOverlay'>
                          <span>laptops</span>
                          <h3>Apple Watch Series 5 is the Best One Yet By Consumer</h3>
                          <h5>August 02, 2021</h5>
                        </div>  
                      </div>
                      </Link>
                    </div>
                    <Link to="/Ios">
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
                    </Link>
                     <Link to="/Application">
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
                    </Link>                 
                </div>

            </div>
        </div>
    </section>
  )
}
