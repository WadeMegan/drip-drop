import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DirectionsPage.css'
import Error from '../../components/Error/Error'

export default class DirectionsPage extends Component {    
    render() {
        return (
            <Error>
                <div className='switchPagesNav'>
                    <div className='pageButton directionsButton current'>
                        <p className='buttonItem'>Directions</p>
                    </div>
                    <Link className='pageButton availableButton notCurrent' to='plants'>
                        <p className='buttonItem'>Available Plants</p>
                    </Link>
                    <Link className='pageButton yourPlantsButton notCurrent' to='your-plants'>
                        Your Plants
                    </Link>
                </div>
                <section className='directionsSection'>
                    <div className='banner'>
                        <h2>Directions</h2>
                    </div>
                    <div className='directionsContainer'>
                    <div className='directionsSection' id='directionsSection'>
                        <h3>Drip Drop makes watering your plants easy... Here's how it works.</h3>
                        <div className='directionsText'>
                            <p><span className='step'>Step 1</span> The "Your Plants" page contains the plants that Drip Drop will text you about. To select plants, head on over to the "Available Plants" page and add any that you would like to be reminded to water. When you add a plant, you will begin receiving reminders for it the next day.</p>
                            <p><span className='step'>Step 2</span> Each day, Drip Drop will check if you have any plants that need to be watered. If so, you'll get a reminder text. To stop getting notifications for a plant, simply remove it.</p>
                            <p className='step'>And that's it!</p>  
                        </div>            
                    </div>
                    </div>
                </section>
            </Error>
        )
    }

}