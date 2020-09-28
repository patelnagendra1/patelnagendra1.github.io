import React from 'react'
import projectData from './data/ProjectData';
import Header from "./Header"
import music from './assets/music.png'


const stylediv={
    paddingLeft:700,
    margin:10,
    width:300
}

function ProjectDisplay(props){
 
    const {title,description,img,link,Demo} = props.project;
    return(
        <div style={stylediv}>
            <h4>{title}</h4>
            <img alt="" src={img} style={{width:300,height:200}} />
            <p>{description}</p>
            <a href={link}>Code </a>
            {Demo && <a style={{margin: 30}} href={Demo}>  Demo</a>}

            
        </div>
    )
}

const style={
    display:"inline-block",
    margin:10,
    marginBottom:30
}

function Project(){
    return (
        <div>
            <Header />
            <h2>Highlighted Projects</h2>
            <hr></hr>
            <div style={stylediv}>
                <img style={{width:300,height:200}} src={music} alt = "Music Master"/>
                <br></br>
                <p>A react based music app using spotify api in which user can search their favorite artist to get their top 10 songs</p>
                <h3 style={style}><a href ='/MusicMaster'>Music Master</a></h3>
            </div>
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