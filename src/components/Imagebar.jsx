import React from 'react'

export default function Imagebar() {
  return (
    <div>
      <div className='bgimage'>
      <img src={props.url? props.url : "image is not available"} alt="jupiter image" />
    </div>
    </div>
  )
}