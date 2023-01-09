import React from 'react'
import Review from '../review/review'
import SocialMedia from '../socialMedia/socialMedia'
import World from '../world/world'
import Popular from '../popular/popular'
import "./content.css"
import Comment from '../comment/comment'



export default function Content() {
  return (
    <section className='content'>
        <div className='container'>
            <div className='inf-content'>
              <main>
                 <World />
                 <Review />
              </main>
              <aside>
                 <SocialMedia />
                 <Popular />
                 <Comment />
              </aside>
            </div>
        </div>
    </section>
  )
}
