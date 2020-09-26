import React from 'react'
import SOCIAL_PROFIALS from './data/socialProfial'
import Header from "./Header"



function SocialProfial(props)
{ 
    const {img,link}=props.SOCIAL_PROFIAL;
    return(
        <div style={{display:"inline-block",margin:10}}>
            <a href={link} ><img src={img} alt = "social-profial" style={{width:35,height:35}}/></a>
            
        </div> 
    )
}

function SocialProfials(){
    return(
        <div>
            <Header />
            <h2>Connect with me !</h2>
            <div>
                {
                    SOCIAL_PROFIALS.map(SOCIAL_PROFIAL => {
                        console.log(SOCIAL_PROFIAL)
                        return(
                            <SocialProfial 
                                key={SOCIAL_PROFIAL.id}
                                SOCIAL_PROFIAL={SOCIAL_PROFIAL}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SocialProfials