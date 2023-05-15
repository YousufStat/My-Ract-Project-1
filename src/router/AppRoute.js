import React, { Component,Fragment } from 'react'
import { Navigate, Route,Routes, } from 'react-router-dom'
import HomePage from './../pages/HomePage';
import ServicesPage from './../pages/ServicesPage';
import CoursesPage from './../pages/CoursesPage';
import ProjectPage from './../pages/ProjectPage';
import ContactPage from './../pages/ContactPage';
import AboutPage from '../pages/AboutPage';



export default class AppRoute extends Component {
    render() {
        return (
            <Fragment>
              <Routes>
               <Route path="/" element={<Navigate to="/home"/>}/>
                 <Route  path="/home" element={<HomePage/>}/>
                 <Route  path="/services" element={<ServicesPage/>}/>
                 <Route  path="/courses" element={<CoursesPage/>}/>
                 <Route  path="/portfolio" element={<ProjectPage/>}/>
                 <Route  path="/contact" element={<ContactPage/>}/>
                 <Route  path="/about" element={<AboutPage/>}/>
              </Routes>
              
            </Fragment>
        )
    }
}
