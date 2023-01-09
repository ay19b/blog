import React from 'react'
import "./comment.css"
import avatar from '../../images/avatar.jpg'

export default function Comment() {
  return (
    <div className='comment'>
       <div className='head'>
         <h3>Comments</h3>
       </div>
       <div className='line'></div>
       <div className='listComment'>
          <div className="itemComment">
              <img src={avatar} />
             <div className='detail-comment'>
              <h4>John Doe</h4>
              <span>Lorem Ipsum is simply dummy text of the printing a...</span>
             </div>
          </div>
          <div className="itemComment">
              <img src={avatar} />
             <div className='detail-comment'>
              <h4>Anonymous</h4>
              <span>The generated Lorem Ipsum is therefore always free...</span>
             </div>
          </div>
          <div className="itemComment">
              <img src={avatar} />
             <div className='detail-comment'>
              <h4>John Doe</h4>
              <span>If you are going to use a passage of Lorem Ipsum, ...</span>
             </div>
          </div>
       </div>
    </div>
  )
}
