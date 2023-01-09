import React from 'react'
import "./socialMedia.css"
import {BsFacebook} from "react-icons/bs"
import {AiOutlineTwitter,AiFillYoutube,AiOutlineInstagram} from "react-icons/ai"

export default function SocialMedia() {
  return (
    <div className='social'>
      <div className='head'>
         <h3>Follow Us</h3>
      </div>
       <div className='line'></div>

       <div className='list-social'>
           <div className='item-social'>
             <BsFacebook />
             <h4>Facebook</h4>
           </div>
           <div className='item-social'>
             <AiOutlineTwitter />
             <h4>Twitter</h4>
           </div>
           <div className='item-social'>
             <AiFillYoutube />
             <h4>Youtube</h4>
           </div>
           <div className='item-social'>
             <AiOutlineInstagram />
             <h4>Instagram</h4>
           </div>
       </div>
    </div>
  )
}
