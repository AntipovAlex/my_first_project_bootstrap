import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import  {Card, CardDeck, CardImg, Container, Button} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox/>
            <Container>
               <h2 className="text-center m-4"> Our team </h2>
                <CardDeck className="m-4">
                    <Card bg="info" border="success" text="light">
                        <CardImg
                            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <Card.Body>
                            <Card.Title> Developers </Card.Title>
                              <Card.Text>
                                  Our texting teams are growing daily. Both state-based and national teams are almost entirely volunteer built and led! Our leaders want to share the campaigning, technical, and organizing skills they’ve built up with you too.
                              </Card.Text>
                            <Button variant="dark"> About team </Button>
                        </Card.Body>
                    </Card>
                    <Card bg="warning" border="success">
                        <Card.Body>
                            <Card.Title> Developers </Card.Title>
                            <Card.Text>
                                Our texting teams are growing daily. Both state-based and national teams are almost entirely volunteer built and led! Our leaders want to share the campaigning, technical, and organizing skills they’ve built up with you too.
                            </Card.Text>
                            <Button variant="dark"> About team </Button>
                        </Card.Body>
                        <CardImg
                            src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                    </Card>
                    <Card bg="info" border="success" text="light">
                        <CardImg
                            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <Card.Body>
                            <Card.Title> Developers </Card.Title>
                            <Card.Text>
                                Our texting teams are growing daily. Both state-based and national teams are almost entirely volunteer built and led! Our leaders want to share the campaigning, technical, and organizing skills they’ve built up with you too.
                            </Card.Text>
                            <Button variant="dark"> About team </Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
            </>
        );
    }
}

export default Home;