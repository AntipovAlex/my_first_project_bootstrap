import React, {Component} from 'react';
import {Button, Container, Form} from "react-bootstrap";

class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '500px'}}>
                <h1 className="text-center"> Contact us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"></Form.Control>
                        <Form.Text> Ваши данные не буду в общем доступе </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label> Example textarea </Form.Label>
                        <Form.Control as="textarea" row="3"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Switch type="checkbox" label="Check me out"/>
                    </Form.Group>
                    <Button variant="dark" type="submit"> Submit </Button>
                </Form>
            </Container>
        );
    }
}

export default Contacts;