import React, { Component,Fragment } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faFacebook,faYoutube,} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";
import { Button } from 'react-bootstrap';

export default class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                        <h1 className="serviceName">Quick Connect</h1>
                        
                        <Form>
                        <Form.Group className="mb-3">
                          <Form.Label className="serviceDescription">Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter email" />
                           </Form.Group>

                         <Form.Group className="mb-3">
                          <Form.Label className="serviceDescription">Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                           </Form.Group>

                           
                         <Form.Group className="mb-3">
                          <Form.Label className="serviceDescription">Message</Form.Label>
                          <Form.Control as="textarea" rows={3} placeholder="Enter email" />
                           </Form.Group>

                          <Button className="serviceDescription" variant="primary" type="submit">Submit</Button>
                        </Form>

                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Discuss Now</h1>
                            <p className="serviceDescription">#36 p-Block,Mirpur-11,Dhaka.</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope}/>siddikam1121@gamil.com</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faPhone}/>01793842777</p>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
