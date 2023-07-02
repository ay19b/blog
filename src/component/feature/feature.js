import React, { useState,useEffect } from 'react';
import image1 from "../../images/p1.jpg"
import image2 from "../../images/p2.jpg"
import image3 from "../../images/p3.jpg"
import image4 from "../../images/p4.jpg"
import "./feature.css"
import { Link } from 'react-router-dom';
import { Blurhash } from 'react-blurhash';

export default function Feature() {
  const [imageLoading, setImageLoadings] = useState([
    { src: image1, loading: false },
    { src: image2, loading: false },
    { src: image3, loading: false },
    { src: image4, loading: false },
  ]);

  const handleImageLoad = (index) => {
    setImageLoadings((prevLoadings) =>
      prevLoadings.map((loading, i) =>
        i === index ? { ...loading, loading: true} : loading
      )
    );
  };

  return (
    <section className='feature'>
        <div className="container">
            <div className='imageAlbum'>
                <div className='leftAlbum'>
                    <img 
                      src={imageLoading[0].src}
                      className='img'
                      alt=''
                      onLoad={() => handleImageLoad(0)}
                      style={{ display: imageLoading[0].loading ? 'block' : 'none' }} 
                    />
                    {imageLoading[0].loading ? null : (
                    <Blurhash
                      hash="LlMjK@t,M_R5E1jERPRj*0-oadX8"
                      className='img'
                    />
                    )}
                    <Link to="/Laptop">
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
                    <img 
                      src={imageLoading[1].src}
                      className='img'
                      alt=''
                      onLoad={() => handleImageLoad(1)}
                      style={{ display: imageLoading[1].loading ? 'block' : 'none' }} 
                    />
                    {imageLoading[1].loading ? null : (
                    <Blurhash
                      hash="LQH2i+xuNHxb.T.Twboe.9NGM{t7"
                      className='img'
                    />
                    )}
                       <Link to="/Watch">
                       <div className='overlay'>                
                        <div className='contentOverlay'>
                          <span>laptops</span>
                          <h3>Apple Watch Series 5 is the Best One Yet By Consumer</h3>
                          <h5>August 02, 2021</h5>
                        </div>  
                      </div> 
                      </Link>
                    </div>  
                    <div className='imageAlbm'>                   
                    <img 
                      src={imageLoading[2].src}
                      className='img'
                      alt=''
                      onLoad={() => handleImageLoad(2)}
                      style={{ display: imageLoading[2].loading ? 'block' : 'none' }} 
                    />
                    {imageLoading[2].loading ? null : (
                    <Blurhash
                      hash="LlKAg0:%-8bv}nm,w^X8kUNItlRi"
                      className='img'
                    />
                    )}
                       <Link to="/Ios">
                       <div className='overlay'> 
                        <div className='contentOverlay'>
                          <span>laptops</span>
                          <h3>Here’s What People Think of iOS 13 New Dark Mode</h3>
                          <h5>August 02, 2021</h5>
                        </div> 
                       </div>  
                       </Link>                  
                    </div>                    
                      <div className='imageAlbm'>
                      <img 
                        src={imageLoading[3].src}
                        className='img'
                        alt=''
                        onLoad={() => handleImageLoad(3)}
                        style={{ display: imageLoading[3].loading ? 'block' : 'none' }} 
                      />
                      {imageLoading[3].loading? null : (
                      <Blurhash
                        hash="L9MaO+009Z8_?w%M_3?vSzDiR4^+"
                        className='img'
                      />
                      )}
                       <Link to="/Application">
                       <div className='overlay'>              
                        <div className='contentOverlay'>
                          <span>apple</span>
                          <h3>18 Practices for Building Responsive Web Applications</h3>
                          <h5>August 02, 2021</h5>
                        </div> 
                       </div>
                       </Link>
                       </div>              
                </div>
            </div>
        </div>
    </section>
  )
}
