import React, {Component} from 'react';
import {Container, Media, Row, Col, Card, ListGroup} from "react-bootstrap";

class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                        <img
                        width={150}
                        height={150}
                        className="mr-3"
                        src="https://media.istockphoto.com/photos/man-pushing-virtual-programming-language-button-picture-id506176606"/>
                        <Media.Body>
                            <h5> Blog post</h5>
                            <p>Man pushing virtual programming language button on digital background</p>

                        </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://media.istockphoto.com/photos/man-pushing-virtual-programming-language-button-picture-id506176606"/>
                            <Media.Body>
                                <h5> Blog post</h5>
                                <p>Man pushing virtual programming language button on digital background</p>

                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://media.istockphoto.com/photos/man-pushing-virtual-programming-language-button-picture-id506176606"/>
                            <Media.Body>
                                <h5> Blog post</h5>
                                <p>Man pushing virtual programming language button on digital background</p>

                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://media.istockphoto.com/photos/man-pushing-virtual-programming-language-button-picture-id506176606"/>
                            <Media.Body>
                                <h5> Blog post</h5>
                                <p>Man pushing virtual programming language button on digital background</p>

                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3" className="text-center mt-5" >
                    <h5 > Categories </h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item> Html/Css </ListGroup.Item>
                                <ListGroup.Item> Java </ListGroup.Item>
                                <ListGroup.Item> JavaScript </ListGroup.Item>
                                <ListGroup.Item> Python </ListGroup.Item>
                                <ListGroup.Item> C++ </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3 bg-secondary text-light">
                            <Card.Title> Site widget </Card.Title>
                            <Card.Text>
                                Once you’ve become an experienced texter with the team, check out our training programs to learn how to become a T4R Builder, Moderator, Guide, or Operator!
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;