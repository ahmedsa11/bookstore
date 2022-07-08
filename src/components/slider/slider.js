import React from 'react'
import img1 from '../../img/daria-nepriakhina-xY55bL5mZAM-unsplash.jpg'
import img2 from '../../img/janko-ferlic-sfL_QOnmy00-unsplash.jpg'
import img3 from '../../img/sincerely-media-nGrfKmtwv24-unsplash.jpg'
import {Carousel} from 'react-bootstrap'
import './slide.css'
function Slider() {

  return (
    <div className="slider">
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block im"
        src={img1}        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block im"
        src={img2}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block im"
        src={img3}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Slider