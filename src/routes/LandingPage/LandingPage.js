import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default class LandingPage extends Component {

    render() {
        return (
            <section className = 'landing-page'>
                <h2>Never kill another plants again.</h2>
                <p>Using Drip Drop's easy interface, simply select the plants you currently have in your home garden. From there, we'll send you a text once per day to let you know which plants need to be watered.</p>
                <Link to = "/register">
                    <button className='get-started'>Let's get started!</button>
                </Link>
            </section>
        )
    }

}