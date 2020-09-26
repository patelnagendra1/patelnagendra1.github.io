import React from 'react'
import projectData from './data/ProjectData';
import Header from "./Header"

function ProjectDisplay(props){
 
    const {title,description,img,link} = props.project;
    return(
        <div style={{display:"inline-block", margin:50,width:350}}>
            <h4>{title}</h4>
            <img alt="" src={img} style={{width:300,height:200}} />
            <p>{description}</p>
            <a href={link}>Code</a>
        </div>
    )
}


function Project(){
    return (
        <div>
            <Header />
            <h2>Highlighted Projects</h2>
            <hr></hr>
            <div>
                {
                    projectData.map(project => {
                        return(
                                <ProjectDisplay 
                                    key={project.id} 
                                    project={project}
                                />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Project 