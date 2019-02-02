import React, { Component } from 'react';
import { Container, Icon, Segment } from 'semantic-ui-react';
import '../static/css/static-container.css'
import vector from '../static/Vector.svg'
import Group from '../static/Group.svg'
import someone from '../static/Someone.svg';
import undrawbusiness from '../static/undrawbusiness.svg'
import undrawwallet from '../static/undrawwallet.svg'

class Statictimeline extends Component {
  render() {
    return (
      <div>
     <Container className='statictimeline' fluid>
     <Segment className="new-segment" style={{textAlign: 'center'}}>
     <h1>How oyerrconnect works</h1>
       <Icon size='big' name='window minimize outline' 
       style={{marginTop: '-20px', color: '#fbac2a'}}/>
       <hr/>
       <div className='half-grid'>
       <div>
       <h4 style={{borderBottom: '3px solid #fbac2a'}}>As a buyer</h4>
       </div>
       <div></div>
       <div>As a seller</div>
       <div className='firstelement'>
         <img src={Group} alt='group'/>
       </div>
       <div className='firstelement'> 
         <img src={vector} alt='vector'/>
       </div>
       <div className='firstelement'>
       <h4>Join the oyerr market</h4>
         <p>Register on the oyerr platform using email address and phone number. Then confirm email address</p>
       </div>
       <div className='firstelement'>
         <h4>Search for needed Services</h4>
         <p>Go shopping for needed service(s) by scanning through the gigs that are displayed on the market</p>
       </div>
       <div className='firstelement'>
         <img src={vector} alt='vector'/>
       </div>
       <div className='firstelement'>
         <img src={someone} alt='someone' />
       </div>
       <div className='firstelement'>
         <img src={undrawbusiness} alt='undrawbusiness'/>
       </div>
       <div className='firstelement'>
         <img src={vector} alt='vector'/>
       </div>
       <div className='firstelement'>
         <h4>Get someone with skill</h4>
         <p>you can place an order for the gig of your preference and pay for the job (OyerrEscrow holds payments as a third-party i.e as an escrow service</p>
       </div>
       <div className='firstelement'>
         <h4>Recieve Job & payment</h4>
         <p>Once you recieve the job and you are satisfied, the seller is paid. The amount for normal gigs ranges up to 5 digits of the naira currency, i.e from 500 up to 99,999 naira</p>
       </div>
       <div className='firstelement'>
         <img className='vector' src={vector} alt='vector'/>
       </div>
       <div className='firstelement'>
         <img src={undrawwallet} alt='undrawwallet'/>
       </div>
       </div>
     </Segment>
     </Container>
     <div>
     </div>
     </div>
    )
  }
}
 export default Statictimeline;