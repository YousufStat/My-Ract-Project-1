import React, { Component,Fragment } from 'react'
import AllProject from '../components/AllProject/AllProject'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'


// Portfolio and Project are same page

export default class ProjectPage extends Component {
    render() {
        return (
            <Fragment>
                 <TopNavigation title="Portfolio"/>
                <PageTop PageTitle="Portfolio"/>
                <AllProject/>
                <Footer/>
            </Fragment>
        )
    }
}
