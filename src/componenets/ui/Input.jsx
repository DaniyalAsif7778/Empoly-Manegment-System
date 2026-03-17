import React, { forwardRef } from 'react'



const Input = forwardRef(( {ref,type="text" ,labelClassName="", value="",   prefix={},
    suffix={},placeholder="", error="", className="", onchange={} ,label="" ,name="" , required},props) => {
    return (
       < >
         {label &&   <label className={type == "radio" ? `text-sm text-[var(--color-text-primary)] ${labelClassName}`:`text-sm text-[var(--color-text-secondary)] ${labelClassName}`} htmlFor={name}>{label}</label> }
        <input type={type}  onChange={onchange} ref={ref} prefix={prefix} value={value} {...props}    className={className} name={name} placeholder={placeholder} required={required} /> 
        { error && (
              <p className="text-xs text-[var(--color-error)]">{ error }</p>
            )}
       </>
    )
})

export default Input
 