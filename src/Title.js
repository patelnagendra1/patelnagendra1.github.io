import React, { useEffect, useState } from 'react'

const Titlearr=[
    'I am a web developer',
    'I am a developer'
]

function Title(){

    const [Titleindex,setTitleindex] = useState(0)
    const [fade,setfade] = useState(true)
   useEffect(() => {

        var interval = setTimeout(() => {
            
            setTitleindex((Titleindex+1)%2)
            setfade(false)
        },2000)

       var to = setTimeout(() => {
        setfade(true)
        },1000)

        return () => clearInterval(interval,to); 
   })

   var currentTitle = Titlearr[Titleindex];
   
     
    return (
        <div className = {fade ? "title-fade-out":"title-fade-in"}>
            <p>{currentTitle}</p>
        </div>    
    )
}

export default Title;