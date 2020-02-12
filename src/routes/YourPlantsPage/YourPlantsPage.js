import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './YourPlantsPage.css'
import PlantListContext from '../../contexts/PlantListContext'
import PlantItem from '../../components/PlantItem/PlantItem'
import PlantApiService from '../../services/plant-api-services'
import UserService from '../../services/user-service'
import Error from '../../components/Error/Error'

export default class YourPlantsPage extends Component {
    static contextType = PlantListContext

    state = {
        isFiltered:false,
        filteredPlants: []
    }

    componentDidMount(){
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

    componentWillUnmount(){
        this.context.clearError()
    }

    renderPlants=(plants)=>{
        return plants.map(plant =>
            <PlantItem key={plant.id} plant={plant}/>
        )
    }

    filterPlants = (event) => {
        let clonedArray = JSON.parse(JSON.stringify(this.context.usersPlants))

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
                    <Link className='pageButton availableButton notCurrent' to='plants'>
                        <p className='buttonItem'>Available Plants</p>
                    </Link>
                    <div className='pageButton yourPlantsButton current'>
                        Your Plants
                    </div>
                </div>
                <section className='usersPlantsSection'>
                    <div className='banner'>
                        <h2>Your Plants</h2>
                        <form className='searchForm'> 
                            <label htmlFor='searchPlants'>Search your plants: </label>
                            <input type='text' name='searchPlants' id='searchPlants' placeholder='zz plant' onChange={this.filterPlants}/>
                        </form>
                    </div>
                    <div className='yourPlantsContainer'>
                        {this.state.isFiltered
                        ? this.renderPlants(this.state.filteredPlants)
                        : this.renderPlants(this.context.usersPlants)}
                    </div>
                </section>
            </Error>
        )
    }
}