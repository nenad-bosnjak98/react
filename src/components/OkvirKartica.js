import React from 'react';
import './OkvirKartica.css';
import Kartica from './Kartica';
import KarticaVremeBali from './KarticaVremeBali';


function OkvirKartica() {
  return (
    <div className='cards'>
      <h1>Check out these LEGENDARY Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        
          <ul className='cards__items'>
            <Kartica
              src='images/waterfall.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label="Mystery  50% OFF"
              path='/signup'
            />
            <KarticaVremeBali
              src='images/bali.jpg'
              text='Travel to the Island of the Gods in Bali'
              label='Luxury SPECIAL OFFER'
              path='/signup'
              id='timer'
            />
          </ul>
          <ul className='cards__items'>
            <Kartica
              src='images/dive.png'
              text='Set sail to the Philippines leading dive destination'
              label='Adrenaline'
              path='/signup'
            />
            <Kartica
              src='images/edin.jpg'
              text='Climb the stairs to Carlton Hill in Edinburgh'
              label='Adventure'
              path='/signup'
            />
            <Kartica
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/signup'
            />
          </ul>
          <ul className='cards__items'>
            <Kartica
              src='images/towers.jpg'
              text='Sightsee from the towers of Cinque Terre'
              label='Adventure'
              path='/signup'
            />
            <Kartica
              src='images/scale.jpg'
              text='Visit the famously colorful Bo Kaap in Cape Town'
              label='Luxury'
              path='/signup'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OkvirKartica;