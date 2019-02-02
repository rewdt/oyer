import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../static/slide.css';
import image from '../static/image.png';
import curve from '../static/curve.svg';
import movie from '../static/movie.svg';
import microphone from '../static/microphone.svg'
import coding from '../static/coding.svg';
import marketing from '../static/digital-campaign.svg';
import report from '../static/report.svg';
import letter from '../static/letter.svg';
import { Image, Button, Container, Icon } from 'semantic-ui-react'
const style = {
    textAlign:'center',
    color: 'white',
}

const Slide = () =>
<div>
<Image style={{zIndex:'-1', filter: 'brightness(50%)'}} src={image} fluid />
<div style={style}>
<h2 style={{fontSize:'50px', fontFamily: 'Proxima Nova'}}><br/>Get work done with the best talent</h2>
<h4>Grow your business with the easiest on demand freelance website</h4><br/>
<Button className='semanticbutton'>Get Started</Button><br/><br/><br/>
<div style={{display: 'inline-flex'}}>
<Icon circular name='play' color='black' className="black-slide-icon"/><br/>
<p style={{textDecoration: 'underline', fontWeight: 'bold', fontFamily:'proxima-Nova'}}>Watch how oyer works</p>
</div>
</div>
<div className='new-container-container'>
<Container className="new-container">
<h1 style={{textAlign:'center', paddingTop:'21px'}}>
Service Categories
<Icon.Group size='small' className="iconoutline" style={{textAlign:'center'}}>
    <Icon size='big' name='window minimize outline'/>
  </Icon.Group>
</h1>
    <div className='agrid'>
      <div className='agrid-item'>
        <img src={curve} alt='curve'/>
        <h3>Graphics & Design</h3>
      </div>
      <div className='agrid-item'>
        <img src={microphone} alt='music and audio'/>
        <h3>Music & Audio</h3>
      </div>
      <div className='agrid-item'>
      <img src={coding} alt='programming and tech'/>
      <h3>Programming & Tech</h3>
      </div>
      <div className='agrid-item'>
        <img src={movie} alt='movie'/>
      <h3>Video & Animation</h3>
      </div>
      <div className='agrid-item'> 
      <img src={marketing} alt='digital marketing' />
      <h3>Digital Marketing</h3>
      </div>
      <div className='agrid-item'>
      <img src={letter} alt='writing and translation'/>
      <h3>Writing & Translation</h3>
      </div>
      <div className='agrid-item'>
      <img src={report} alt= 'Business' />
      <h3>Business</h3>
      </div>
      <div className='agrid-item'>
      <img src={letter} alt='tutoring and guidance' />
      <h3>Tutoring and guidance</h3>
      </div>
    </div>
  </Container>
  </div>
</div>

export default Slide