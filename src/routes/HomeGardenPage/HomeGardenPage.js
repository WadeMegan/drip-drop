import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomeGardenPage.css'
import PlantListContext from '../../contexts/PlantListContext'
import dummyStore from '../../store/dummy-store'
import PlantItem from '../../components/PlantItem/PlantItem'
import PlantApiService from '../../services/plant-api-services'
import UserService from '../../services/user-service'

export default class HomeGardenPage extends Component {
    static contextType = PlantListContext

    state = {
        isFiltered:false,
        filteredPlants: []
    }

    //creates array of currentUser's plants
    /*usersPlants() { 

        var array = [] //user's plants

        var currentUserReminders = dummyStore.reminders.filter(reminder => reminder.userId == this.context.currentUserId)

        dummyStore.plants.map(plant=>{
            
            currentUserReminders.map(reminders => {
                if(reminders.plantId.includes(plant.id)){
                    array.push(plant)
                }
            })
        
        })
        
        return array
    }*/
     
    componentDidMount(){
        
        const userId = UserService.getUserToken()

        if(!this.context.usersPlants.length){
            //fetch all users plants and store in context
            PlantApiService.getUsersPlants(userId)
                .then(this.context.setUsersPlants)
                .catch(/*set error in context*/)
        }
        
        if(!this.context.plantList.length){
            //fetch all available plants and store in context 
            PlantApiService.getAllPlants()
                .then(this.context.setPlantList)
                .catch(/*set error in context*/)
        }
        
        
        //const userId = UserService.getUserToken()
        //localStorage.getItem('user-id')
        //PlantApiService.getUsersPlants(userId)
            //.then(this.context.setUsersPlants)
            //.catch(/*set error in context*/)
        
        //const plants = this.usersPlants()
        //this.context.setUsersPlants(plants)
    }

    renderPlants=(plants)=>{

        //const {usersPlants = []} = this.context
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

    render() {
        
        return (
            <section className='home-garden-section'>
                <h2>Your Plants</h2>
                <p className='directions'>These are the plants we'll be sending you reminders about. Feel free to remove any plants you no longer have. If you'd like to add more to your home garden, see the <Link to="/plants">available plants</Link>.</p> 
                <form className='search-form'> 
                    <label htmlFor="search-plants">Search available plants:</label>
                    <input type="text" name='search-plants' id='search-plants' placeholder="zz plant" onChange={this.filterPlants}/>
                </form>
                <div className='your-plants-container'>
                    {this.state.isFiltered
                    ? this.renderPlants(this.state.filteredPlants)
                    : this.renderPlants(this.context.usersPlants)}
                </div>
            </section>
        )
    }

}