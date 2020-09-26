import React from 'react'
import ReactDOM from "react-dom";
import { Router, Route } from 'react-router-dom'
import App from "./App"
import { createBrowserHistory } from 'history'
import SocialProfials from "./socialProfial"
import Project from './Project';





ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Route exact path='/' component={App} />
        <Route path='/profials' component ={SocialProfials} />
        <Route path='/projects' component = {Project} />
        
    </Router>
    , 
    document.getElementById("root"));