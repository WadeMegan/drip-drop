import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomeGardenPage.css'

export default class HomeGardenPage extends Component {

    render() {
        return (
            <section className='home-garden-section'>
                <h2>Your Plants</h2>
                <p className='directions'>Select the plants you'd like us to remind you about. We'll do the rest! When you're done, go ahead and check out <Link to="/plants">your plants</Link>.</p> 
                <form className='search-form'> 
                    <label htmlFor="search-plants">Search available plants:</label>
                    <input type="text" name='search-plants' id='search-plants' placeholder="zz plant"/>
                    <input className='search-button' type='submit' value='Search'/>
                </form>
                <div className='your-plants-container'>
                    <div className='indiv-plant'>
                        <img src='https://i.imgur.com/K6MOHxc.jpg' alt='zz plant'/>
                        <h3>ZZ Plant</h3>
                        <p>Water every 7 days</p>
                        <button>Add</button>
                    </div>
                    <div className='indiv-plant'>
                        <img src='https://i.imgur.com/3yIZfO9.jpg' alt='small succulent'/>
                        <h3>Small Succulent</h3>
                        <p>Water every 7 days</p>
                        <button>Add</button>
                    </div>
                </div>
            </section>
        )
    }

}