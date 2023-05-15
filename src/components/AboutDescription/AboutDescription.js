import React, { Component,Fragment} from 'react'
import { Col, Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap';

export default class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col>
                             <h1  className="serviceName">Who I Am ?</h1>
                             <br/>
                             <p className="serviceDescription"> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source</p>
                        
                             <h1  className="serviceName">Who I Am ?</h1>
                             <br/>
                             <p className="serviceDescription"> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source</p>
                        
                             <h1  className="serviceName">Who I Am ?</h1>
                             <br/>
                             <p className="serviceDescription"> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source</p>
                        
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
