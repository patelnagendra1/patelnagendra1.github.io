import React from 'react'

import {Link} from 'react-router-dom'
import PDF from './assets/Nagendraresume.pdf'

function Header(){

    const style={
        display:"inline-block",
        margin:10,
        marginBottom:30
    }

    return (
        <div >
            <h3 style={style}><Link to='/'>Home</Link></h3>
            <h3 style={style}><Link to='/profials'>Contact</Link></h3>
            <h3 style={style}><Link to ='/projects'>Projects</Link></h3>
            <h3 style={style}><a href={PDF}>Resume</a></h3>
        </div>
    )
}

export default Header