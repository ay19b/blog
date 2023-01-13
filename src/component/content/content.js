import {useRef} from 'react'
import Review from '../review/review'
import SocialMedia from '../socialMedia/socialMedia'
import World from '../world/world'
import Popular from '../popular/popular'
import "./content.css"
import Comment from '../comment/comment'
import Category from '../category/category'



export default function Content() {
  const main = useRef();
  const aside = useRef();

  console.log(main.current)

  return (
    <section className='content'>
        <div className='container'>
            <div className='inf-content'>
              <main ref={main}>
                 <World />
                 <Review />
                 <Category />
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
  )
}
