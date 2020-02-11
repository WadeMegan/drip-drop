import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DirectionsPage.css'
import PlantItem from '../../components/PlantItem/PlantItem'
import PlantListContext from '../../contexts/PlantListContext'
import PlantApiService from '../../services/plant-api-services'
import UserService from '../../services/user-service'
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
                <div className='all-plants-container'>

                </div>
            </section>
            </Error>
        )
    }

}