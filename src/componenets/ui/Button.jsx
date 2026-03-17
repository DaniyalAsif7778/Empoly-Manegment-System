import React from 'react'
import { NavLink } from 'react-router'
function Button({  text,className , type, link ,loading=false,disabled=false}) {
  return (
    
          <button  type={type} disabled={disabled} className={`${className}`}>
        {loading ? `${text}...`: text }
    </button>
   
  
  )
}

export default Button