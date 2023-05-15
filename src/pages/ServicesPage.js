import React, { Component,Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Services from './../components/Services/Services';
import PageTop from './../components/PageTop/PageTop';
import Footer from '../components/Footer/Footer';
import ContactSection from '../components/ContactSection/ContactSection';

export default class ServicesPage extends Component {
    render() {
        return (
            <Fragment>
                  <TopNavigation title="Services"/>
                <PageTop PageTitle="My Services"/>
                <Services/>
                <ContactSection/>
                <Footer/>
            </Fragment>
        )
    }
}
