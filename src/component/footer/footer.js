import React from 'react'
import "./footer.css"
import image1 from "../../images/p1.jpg"
import {MdFacebook} from 'react-icons/md'
import {AiFillTwitterCircle,AiFillYoutube,AiOutlineInstagram} from "react-icons/ai"
import {ImPinterest} from 'react-icons/im'
import {BiSearch} from 'react-icons/bi'
import Logo from '../../images/logo.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='contentFooter'>
                <div className='categ'>
                    <h3 className='head-footer'>Categories</h3> 
                    <div className='catgItem'>
                       <h5>Gadgets</h5>
                       <span>(6)</span>
                    </div>
                    <div className='catgItem'>
                       <h5>Podcasts</h5>
                       <span>(6)</span>
                    </div>
                    <div className='catgItem'>
                       <h5>Reviews</h5>
                       <span>(7)</span>
                    </div>
                   <div className='tags'>
                    <h3 className='head-footer'>Main Tags</h3> 
                     <div className='ListTags'>
                       <div className='tag'>Gadgets</div>
                       <div className='tag'>Games</div>
                       <div className='tag'>Healthy</div>
                       <div className='tag'>Podcasts</div>
                       <div className='tag'>Reviews</div>
                    </div>
                   </div>
                </div>
                <div className='post'>
                    <h3 className='head-footer'>Latest Posts</h3>
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
                    <h3 className='head-footer'>Popular Posts</h3>
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

            <div className='line'></div>
            <div className='bottomFooter'>
               <img src={Logo} alt='logo'/>
               <div className='about'>
                 <h3 className='head-footer'>About Us</h3>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's.
                 </p>                
               </div>
               <div className='iconSocial'>
                  <div className='icon'><MdFacebook/></div>
                  <div className='icon'><AiFillTwitterCircle/></div>
                  <div className='icon'><AiFillYoutube/></div>
                  <div className='icon'><AiOutlineInstagram /></div>
                  <div className='icon'><ImPinterest/></div>
               </div>
            </div>
        </div>

    </div>
  )
}
