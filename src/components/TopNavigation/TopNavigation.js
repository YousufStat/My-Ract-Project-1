import React, {Component,Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import whiteLogo from '../../asset/image/navlogo.svg'
import blueLogo from '../../asset/image/navlogoScroll.svg'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import navColorActive from '../../asset/css/navcolor.css'
import { NavLink } from 'react-router-dom';

class TopNavigation extends Component {
    constructor(props){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navVariant:"dark",
            navBarBack:"navBackground",
            navBarItem:"navItem",
            PageTitle:props.title
        }
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navVariant:'light',navBarTitle:'navTitleScroll', navBarLogo:[blueLogo], navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll'})
        }
        else if(window.scrollY<100){
            this.setState({navVariant:"dark",navBarTitle:'navTitle',navBarLogo:[whiteLogo],navBarBack:'navBackground',navBarItem:'navItem'})
        }
    }
    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }
    render() {
        return (
            <Fragment>
                <title>{this.state.PageTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">
                    <Navbar.Brand className={this.state.navBarTitle}><img alt='None' src={this.state.navBarLogo}/> Muhammad Yousuf</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink  className={(navInfo)=>(navInfo.isActive ? navColorActive.activeColor: "")} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink  className={(navInfo)=>(navInfo.isActive ? navColorActive.activeColor: "")} className={this.state.navBarItem} to="/services">SERVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink  className={(navInfo)=>(navInfo.isActive ? navColorActive.activeColor: "")} className={this.state.navBarItem} to="/courses">COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink  className={(navInfo)=>(navInfo.isActive ? navColorActive.activeColor: "")} className={this.state.navBarItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink  className={(navInfo)=>(navInfo.isActive ? navColorActive.activeColor: "")} className={this.state.navBarItem} to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink  className={(navInfo)=>(navInfo.isActive ? navColorActive.activeColor: "")} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>
                       
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}
export default TopNavigation;