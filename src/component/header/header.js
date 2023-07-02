import React, { useEffect, useState } from 'react'
import {MdFacebook,MdOutlineKeyboardArrowDown,MdMenu} from 'react-icons/md'
import {AiFillTwitterCircle,AiFillYoutube,AiOutlineClose} from "react-icons/ai"
import {ImPinterest} from 'react-icons/im'
import {BiSearch} from 'react-icons/bi'
import Logo from '../../images/logo.png'
import "./header.css"
import { Link } from 'react-router-dom'


export default function Header() {
	const [text,setText] = useState(false);
	const [menu,setMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
	
	function change(){
		if(text){
      setText(false)
    } 
		else{
      setText(true)
       setMenu(false)
    }
	}
	function Menu(){
		if(menu){setMenu(false)} 
		else{
      setMenu(true)
      setText(false)
    }
	}

  const changeBackground=()=>{
    if(window.scrollY>=5){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener('scroll',changeBackground) 
    console.log(navbar)
  })
  
	
  return (
    <header className={navbar?'active':null}>
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
         <Link to="/">
			       <img src={Logo}/>
         </Link>
		  </div>
		  :null
		  }
		  {!text?
			<ul className={!menu?'close':null}>
			    <li className="topListnav">
				  <Link to="/">
			       <img src={Logo}/>
         </Link>
				  <AiOutlineClose onClick={Menu}/>
				</li>
                <li onClick={Menu}><h4>Home</h4></li>
                <li onClick={Menu}><h4>FEATURES</h4></li>
                <li onClick={Menu}><h4>MEGA MENU</h4></li>
                <li onClick={Menu}><h4>MEGA TUPS</h4></li>
                <li onClick={Menu}><h4>SHORT</h4></li>
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
