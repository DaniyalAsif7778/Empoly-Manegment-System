import React from 'react'

function ProgressBar({label="Speed: ",value=70,max=100,className}) {
    return (
        <>
            <label for="file"> {label}</label>
            <progress   className={`${className}     h-2 rounded-full appearance-none 
         [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-gary-400 
         [&::-webkit-progress-value]:rounded-full   [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-primary-pressed [&::-webkit-progress-value]:from-70% [&::-webkit-progress-value]:to-primary-light     
         [&::-moz-progress-bar]:rounded-full [&::-moz-progress-bar]:bg-primary-pressed`} id="file" value={value} max={max}> 32% </progress>
        </>
    )
}

export default ProgressBar