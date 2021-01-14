import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forest1 from '../assets/pexels-eberhard-grossgasteiger-711022.jpg'
import forest2 from '../assets/pexels-francesco-ungaro-1671325.jpg'
import forest3 from '../assets/pexels-iconcom-730427.jpg'
import forest4 from '../assets/pexels-mali-maeder-109679.jpg'

class CarouselBox extends Component {
    render() {
        return (
          <Carousel>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={forest1}
                      alt="Forest"
                      height={700}
                  />
                  <Carousel.Caption>
                      <h3> Forest 1 </h3>
                      <p> pexels-eberhard-grossgasteiger-711022.jpg </p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100 "
                      src={forest2}
                      alt="Forest"
                      height={700}
                  />
                  <Carousel.Caption>
                      <h3> Forest 2 </h3>
                      <p> pexels-francesco-ungaro-1671325.jpg </p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={forest3}
                      alt="Forest"
                      height={700}
                  />
                  <Carousel.Caption>
                      <h3> Forest 3 </h3>
                      <p> pexels-iconcom-730427.jpg </p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={forest4}
                      alt="Forest"
                      height={700}
                  />
                  <Carousel.Caption>
                      <h3> Forest 4 </h3>
                      <p> pexels-mali-maeder-109679.jpg </p>
                  </Carousel.Caption>
              </Carousel.Item>

          </Carousel>
        );
    }
}

export default CarouselBox;