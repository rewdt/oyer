import 'semantic-ui-css/semantic.min.css';
import '../static/css/navbar.css';
import oyerr from '../static/oyerr.png';
import React, { Component } from 'react';
import { Input, Menu, Button, Segment } from 'semantic-ui-react'

class Navbar extends Component {
    
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <Segment inverted>
      <Menu inverted secondary size='tiny'>
      <Menu.Item className="logo">
          <img src = {oyerr} alt='oyerr'/>
      </Menu.Item>
        <Menu.Item>
            <Input icon='search' placeholder='Search for any skill'/>
        </Menu.Item>
        <Menu.Menu position='right'>
        <Menu.Item name='How it works' active={activeItem === 'How it works'} onClick={this.handleItemClick} />
        <Menu.Item
          name='Become a Seller'
          active={activeItem === 'Become a Seller'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Sign in'
          active={activeItem === 'Sign in'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
            name='Join'
            active={activeItem === 'Join'}
            onClick={this.handleItemClick}
          />
          <Menu.Item>
            <Button color='yellow' className='semanticbutton'>Post a Job</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </Segment>
    )
  }
}

export default Navbar