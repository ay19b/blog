import React, { useEffect, useState } from 'react'
import {MdFacebook,MdClose,MdMenu} from 'react-icons/md'
import {AiFillTwitterCircle,AiFillYoutube,AiOutlineClose} from "react-icons/ai"
import {ImPinterest} from 'react-icons/im'
import {BiSearch} from 'react-icons/bi'
import Logo from '../../images/logo.png'
import "./header.css"


export default function Header() {
	const [text,setText] = useState(false);
	const [menu,setMenu] = useState(false);
	
	function change(){
		if(text){setText(false)} 
		else{setText(true)}
	}
	function Menu(){
		if(menu){setMenu(false)} 
		else{setMenu(true)}
	}
	
  return (
    <header>
        <nav>
          <div className='container'>
            <div className='content'>
             <ul>
                <li><h5>Home</h5></li>
                <li><h5>About Us</h5></li>
                <li><h5>Privacy Policy</h5></li>
                <li><h5>Contact Us</h5></li>
             </ul>
              <ul>
                <li><MdFacebook/></li>
                <li><AiFillTwitterCircle/></li>
                <li><AiFillYoutube/></li>
                <li><ImPinterest/></li>
              </ul>
            </div>
          </div>
        </nav>
        <nav>
          <div className='container'>
          <div className='content'>
		  {!text?
		  <div className='partMenu'>
		     <MdMenu className="menu" onClick={Menu}/>
			 <img src={Logo}/>
		  </div>
		  :null
		  }
		  {!text?
			<ul className={!menu?'close':null}>
			    <li className="topListnav">
				  <img src={Logo}/>
				  <AiOutlineClose onClick={Menu}/>
				</li>
                
                <li><h4>Home</h4></li>
                <li><h4>FEATURES</h4></li>
                <li><h4>MEGA MENU</h4></li>
                <li><h4>MEGA TUPS</h4></li>
                <li><h4>SHORT</h4></li>
            </ul>
			:
			<input placeholder="Search"/>
		  }
            <div className="btn">
			  {!text?<BiSearch onClick={change}/> : <AiOutlineClose onClick={change}/>}
            </div>
            </div>
          </div>
        </nav>
    </header>
  )
}
