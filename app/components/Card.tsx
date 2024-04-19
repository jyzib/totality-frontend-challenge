"use client"

import React from 'react'
type props = {
    title:String
}
const Card = ({title}:props) => {
  return (
    <div>
      <h1 className='text-black'>{title}</h1>
    </div>
  )
}

export default Card
