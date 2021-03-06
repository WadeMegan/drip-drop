import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AllPlantsPage.css'
import PlantItem from '../../components/PlantItem/PlantItem'
import PlantListContext from '../../contexts/PlantListContext'
import PlantApiService from '../../services/plant-api-services'
import UserService from '../../services/user-service'
import Error from '../../components/Error/Error'

export default class AllPlantsPage extends Component {
    static contextType = PlantListContext

    state = {
        isFiltered:false,
        filteredPlants: []
    }

    // if usersPlants or plantList is empty, makes GET requests to the appropriate endpoints 
    // necessary for page refreshes
    componentDidMount=()=>{
        this.context.clearError()
        const userId = UserService.getUserToken()

        if(!this.context.usersPlants.length){
            PlantApiService.getUsersPlants(userId)
                .then(this.context.setUsersPlants)
                .catch(this.context.setError)
        }
        
        if(!this.context.plantList.length){
            PlantApiService.getAllPlants()
                .then(this.context.setPlantList)
                .catch(this.context.setError)
        }
    }

    // renders plants
    // if state isFiltered is false, will render this.context.plantList
    // if state isFiltered is true, will render this.state.filteredPlants
    renderPlants=(plants)=>{
        return plants.map(plant =>
            <PlantItem key={plant.id} plant={plant}/>
        ) 
    }

    // if user presses enter on search bar, will prevent redirecting
    handleSubmitSearch = ev => {
        ev.preventDefault()
    }

    // if user types in search bar, will set isFiltered state to true and will filter array of plants
    filterPlants = (event) => {

        let clonedArray = JSON.parse(JSON.stringify(this.context.plantList))

        let plants = clonedArray.filter((plant)=>{
            return plant.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
        })

        this.setState({
            isFiltered:true,
            filteredPlants: plants
        })

    }

    render(){
        return (
            <Error>
                <div className='switchPagesNav'>
                    <Link className='pageButton directionsButton notCurrent' to='directions'>
                        <p className='buttonItem'>Directions</p>
                    </Link>
                    <div className='pageButton availableButton current'>
                        <p className='buttonItem'>Available Plants</p>
                    </div>
                    <Link className='pageButton yourPlantsButton notCurrent' to='your-plants'>
                        Your Plants
                    </Link>
                </div>
                <section className='availablePlantsSection'>
                    <div className='banner'>
                        <h2>Available Plants</h2>
                        <form className='searchForm' onSubmit={this.handleSubmitSearch}> 
                            <label htmlFor='searchPlants'>Search all plants: </label>
                            <input type='text' name='searchPlants' id='searchPlants' placeholder='zz plant' required onChange={this.filterPlants}/>
                            <button className='clearButton' type='reset' onClick={this.filterPlants}>X</button>
                        </form>
                    </div>
                    <div className='allPlantsContainer'>
                        {this.state.isFiltered
                        ? this.renderPlants(this.state.filteredPlants)
                        : this.renderPlants(this.context.plantList)}
                    </div>
                </section>
            </Error>
        )
    }
}

