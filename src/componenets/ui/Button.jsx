import React from 'react'
import { NavLink } from 'react-router'
function Button({  text,className , type, link ,loading=false,disabled=false , onclick},) {
   
  return (
    
          <button  type={type} disabled={disabled} className={`${className}`}  onClick={onclick}>
        {loading ? `${text}...`: text }
    </button>
   
  
  )
}

export default Button