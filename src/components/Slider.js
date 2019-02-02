import React, { Component } from 'react';
import { Container, Card, Icon, Transition } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../static/css/slider.css';
import pexels from '../static/pexels-photo-1038156.jpeg';
import dog from '../static/dog.jpeg';
import eat from '../static/eat.jpeg';
import next from '../static/next.jpeg';
import road from '../static/road.jpeg'

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image : [
        pexels,
        dog,
        eat,
        next,
        road,
      ]
    }
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this)
  }
  handleRightClick() {
    const{image} = this.state
    console.log(image)
    let a = image.splice(4,1)
    a.forEach(element => {
      image.unshift(element)
    });
    this.setState({image: image})
    console.log(image)
      }

    handleLeftClick() {
    const{image} = this.state
    console.log(image)
    let a = image.splice(0,1)
    a.forEach(element => {
      image.push(element)
      console.log(element)
    });
    this.setState({image: image})
    console.log(image)
      }
    
  render() {
  const images = this.state.image;
    return(
  <Container fluid className='black-container'>
  <h2 style={{color:'white', display:'flex', justifyContent:'center', paddingTop: '50px'}}>Our feautured Gig Categories</h2>
  <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
    <Icon size='big' name='window minimize outline' style={{marginTop: '-10px'}} color='yellow'/>
  </div>
  <Container fluid style={{color: 'white', backgroundColor: 'black'}} className='ablack-container'>
  <Transition.Group animation='fade down' duration={1500}>
  {images.map((image, i) => (
    <Card className='card-children' 
    image={images[images.indexOf(image)]}
    key={i}/>
  ))
  }
  </Transition.Group>
  </Container>
  <div className="fwdandbwd">
    <div onClick={ this.handleLeftClick } className="left-icon">
    <Icon size='big' name='arrow alternate circle left outline' />
    </div>
    <div onClick={ this.handleRightClick } className="right-icon">
    <Icon size='big' name='arrow alternate circle right outline' />
    </div>
    </div>
    </Container>
    )}
}
export default Slider
