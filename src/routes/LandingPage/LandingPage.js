import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import phoneImg from '../../images/phoneImg.jpg'

export default class LandingPage extends Component {
    render(){
        return (
            <section className = 'landingPage'>
                <div className='hero'>
                    <div className='heroText'>
                        <h2>Never kill another plant</h2>
                        <p>Drip Drop is watering made simple. All you have to do is select your plants and we'll send you texts reminding you to water them. It's that easy!</p>
                        <a href='#directionsSection' className='getStarted'>Let's get started!</a>
                    </div>     
                </div>
                <div className='directionsSection' id='directionsSection'>
                    <h3>Watering Made Simple</h3>
                    <div className='directionsText'>
                        <p>Drip Drop will remind you to water your house plants via text. Here's how to get started:</p>
                        <p><span className='step'>Step 1</span> Register for an account and sign in. </p>
                        <div className='demoInfo'>
                            <p>To demo Drip Drop, sign in with email: test@gmail.com and password: password</p>
                        </div>
                        <div className='imgContainer'>
                            <img src={phoneImg} className='phoneImg'></img> 
                            <p><span className='step'>Step 2</span> You'll be directed to your plants. These are the plants that Drip Drop will text you about. To select plants, head on over to the available plants and add any you have.</p>
                            <p><span className='step stepThree'>Step 3</span> Each day, Drip Drop will check if you have any plants that need to be watered. If so, you'll get a reminder text. To stop getting notifications for a plant, simply remove it.</p>
                        </div>
                    </div>
                    <div className='landingPageButtonContainer'> 
                       <Link to="register" className='registerButton'>Register Now</Link> 
                       <p>Or, <Link to='signin'>sign in.</Link></p>
                    </div>
                </div>
            </section>
        )
    }
}
