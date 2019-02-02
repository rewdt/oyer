import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Slide from './components/slide';
import Slider from './components/Slider';
import Statictimeline from './components/statictimeline';
import Testimonials from './components/Testimonials'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
    <Navbar />
    <Slide/>
    <Slider />
    <Statictimeline style={{zIndex: 1, position: 'relative'}} />
    <Testimonials />
    </div>
    )
  }
}
export default App;