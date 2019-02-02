import React, { Component } from 'react';
import '../static/css/Testimonials.css';
import { Container,Segment, Icon } from 'semantic-ui-react'
import mov from '../static/mov_bbb.mp4'
class testimonials extends Component {
  render() {
    return (
      <div style={{position: 'absolute', top:'2700px'}}>
      <Container className="video-container" fluid>
      <h2 style={{textAlign: 'center'}}>Testimonials from our customers</h2>
        <Segment className='segment-original'>
            <video>
            <source src={mov} type="video/mp4" />
            </video>
            <div className='video-text-align'> 
                <Icon name='quote right' style={{color: '#CDE6EF'}}/>
            <h2>Futhermore there are gig extras. Gig extras are extra services that you can offer that supplement your gigs. You can charge extra when offering gig extras</h2>
            </div>
        </Segment>
      </Container>
      </div>
    )
  }
}

export default testimonials