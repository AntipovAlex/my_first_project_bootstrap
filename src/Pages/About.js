import React, {Component} from 'react';
import {Container, Nav, Tab, Col, Row} from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-examperl" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"> Design </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second"> Team </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third"> Programming </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth"> Frameworks </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth"> Libraries </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9} >
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://i.pinimg.com/originals/fe/6e/5f/fe6e5f19624b0df7b082efdd17632b4f.jpg"/>
                                    <p> Design </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://www.projecttimes.com/media/k2/items/cache/6612da61425d98755836902a8bde1bce_XL.jpg"/>
                                    <p> Team </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2-1024x439.jpg"/>
                                    <p> Programming </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://cdn-media-1.freecodecamp.org/images/r9O4YQjMJqVVOqb6HTxy7OSOAsvaamCHc25d"/>
                                    <p> Frameworks </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://data-flair.training/blogs/wp-content/uploads/sites/2/2019/07/JavaScript-Libraries1.jpg"/>
                                    <p> Libraries </p>
                                </Tab.Pane>
                            </Tab.Content>

                        </Col>
                    </Row>

                </Tab.Container>
            </Container>
        );
    }
}

export default About;