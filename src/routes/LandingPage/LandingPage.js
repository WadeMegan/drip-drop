import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default class LandingPage extends Component {

    render() {
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
                    <p>Drip Drop is a web application that users can use to remind them when to water their house plants. Users will be able to register for an account, log in, and then select their plants from a list of common houseplants. From there, Drip Drop will check once per day to see if the user has any plants that need to be watered that day. If so, Drip Drop will send an SMS (via Twilio) to the user to remind them to water their plants.</p>
                </div>
            </section>
        )
    }

}


//<p>Using Drip Drop's easy interface, simply select the plants you currently have in your home garden. From there, we'll send you a text once per day to let you know which plants need to be watered.</p>
