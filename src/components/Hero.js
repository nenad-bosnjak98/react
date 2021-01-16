import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
    return (
        <div className='hero-container'>
            <video src="/videos/map.mp4" autoPlay muted loop></video>
            <h1>Ready for an adventure?</h1>
                <div className='hero-btns'>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        Explore!
                    </Button>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>
                        Watch trailer! <i className='far fa-play-circle' />
                    </Button>
                </div>
        </div>
    )
}

export default Hero
