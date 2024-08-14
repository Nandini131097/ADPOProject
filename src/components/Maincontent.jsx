import React from 'react'

export default function MainContent(props) {
  return (
    <>
    <div className='bgimage'>
      <img src={props.url? props.url : "image is not available"} alt="jupiter image" />
    </div>
    
    </>
    
  )
}
