import {useRef,useEffect} from 'react'
import Footer from '../component/footer/footer'
import Header from '../component/header/header'
import ScrollToTop from '../component/scroll/scroll'
import News from '../component/trending/news'
import SocialMedia from '../component/socialMedia/socialMedia'
import Popular from '../component/popular/popular'
import Comment from '../component/comment/comment'
import "./details.css"
import profil from "../images/profile.jpg"
import image1 from "../images/p1.jpg"
import r1 from "../images/review/r1.jpg";
import r2 from "../images/review/r2.jpg";
import r3 from "../images/review/r3.jpg";
import {FaComments} from 'react-icons/fa'
import Avatar from '@mui/material/Avatar';
import {Link,useLocation } from 'react-router-dom';
import {BsFacebook,BsPinterest} from "react-icons/bs"
import {BiLinkExternal} from "react-icons/bi"
import {AiOutlineTwitter,AiFillYoutube,AiOutlineRight} from "react-icons/ai"

export default function Lap() {
  const main = useRef();
  const aside = useRef();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  return (
    <>
       <Header />
       <News />
       <section className='content'>
        <div className='container'>
            <div className='inf-content'>
              <main ref={main}>
                <div className='detail'>
                  <div className='links'>
                    <Link to="/">
                       <h5 className='home'>Home</h5>
                    </Link>
                    <AiOutlineRight style={{fontSize: "12px"}}/>  
                    <h5 className='n-page'>Apple</h5>
                  </div>
                  <div className='content-detail'>
                    <h1 className='title-detail'>11 of Best Laptops Evaluated Based on Budget</h1>
                    <div className='auther'>
                      <div className='auther'>
                        <Avatar alt="Remy Sharp" src={profil} />
                        <div className='inf-auther'>by <span>John Doe</span> -August 02, 2021</div>
                      </div>                      
                      <div className='n-comment'>
                        <FaComments />
                      </div>
                    </div>
                    <img src={image1} className="image-detail"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                       specimen book.
                       It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/>
                       <br/>
                         
                             It is a long established fact that a reader will be distracted by the readable
                             content of a page when looking at its layout. The point of using Lorem Ipsum
                             is that it has a more-or-less normal distribution of letters, as opposed to using
                             'Content here, content here', making it look like readable English.<br/>
                             <br/>
                             It uses a dictionary of over 200 Latin words, combined with a handful of model
                             sentence structures, to generate Lorem Ipsum which looks reasonable. The generated 
                             Lorem Ipsum is therefore always free from repetition, injected humour,
                             or non-characteristic words etc.<br/>
                             <br/>
                             There are many variations of passages of Lorem Ipsum available, but the majority
                             have suffered alteration in some form, by injected humour, or randomised words
                             which don't look even slightly believable. If you are going to use a passage
                             of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden
                             in the middle of text.<br/>
                      </p>
                  </div>
                </div>
                <div className='composer'>
                   <Avatar alt="Remy Sharp" src={profil} />
                   <div className='inf-composer'>
                      <h3>John Doe</h3>
                      <p>
                        Pro Blogger Templates is a site where you find unique and professional
                        blogger templates, Improve your blog now for free.
                      </p>
                      <div className='icons'>
                        <BsFacebook color='#3b5999'/>
                        <AiOutlineTwitter color='#00acee'/>
                        <BsPinterest color='#ca2127'/>
                        <AiFillYoutube color='#f50000'/>
                        <BiLinkExternal color='white'/>
                      </div>
                   </div>
                </div>
                <div className='review'>
                    <div className='head'>
                      <h3>You might like</h3>
                    </div>
                    <div className='line'></div>
             
                    <div className='inf-review'>
                      <div className='item-rew'>
                         <img src={r1} />
                         <h4>The Best Xbox 360 Co-Op Offline Split-Screen Games</h4>
                         <span>July 31, 2021</span>
                      </div>
                      <div className='item-rew'>
                         <img src={r2} />
                         <h4>The Best Xbox 360 Co-Op Offline Split-Screen Games</h4>
                         <span>July 31, 2021</span>
                      </div>
                      <div className='item-rew'>
                         <img src={r3} />
                         <h4>The Best Xbox 360 Co-Op Offline Split-Screen Games</h4>
                         <span>July 31, 2021</span>
                      </div>
                    </div>
                 </div>
              </main>
              <aside ref={aside}>
               <div className='aside'>
                 <SocialMedia />
                 <Popular />
                 <Comment />
               </div> 
              </aside>
            </div>
        </div>
       </section>
       <Footer />
       <ScrollToTop />
    </>
  )
}
