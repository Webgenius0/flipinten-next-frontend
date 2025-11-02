'use client'
import React from 'react'

export default function CommonButton({iconLeft, text, iconRight, className, onClick, iconClass}) {
  return (
    <button onClick={onClick} className={className}>
        {iconLeft && <p className={iconClass}>{iconLeft}</p>}
        <p>{text}</p>
        {
          iconRight && <p className={iconClass}>{iconRight}</p>
        }
    </button>
  )
}
