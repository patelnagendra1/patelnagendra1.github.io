import React from 'react'
import PDF from './assets/Nagendraresume.pdf'

function Header(){

    const style={
        display:"inline-block",
        margin:10,
        marginBottom:30
    }

    return (
        <div >
            <h3 style={style}><a to='/'>Home</a></h3>
            <h3 style={style}><a to='/profials'>Contact</a></h3>
            <h3 style={style}><a to ='/projects'>Projects</a></h3>
            <h3 style={style}><a href={PDF}>Resume</a></h3>
        </div>
    )
}

export default Header
