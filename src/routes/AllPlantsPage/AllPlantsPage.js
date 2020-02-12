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



        //creates array of currentUser's plants; needed here for PlantItem button creation
        //usersPlants() { 

            //var array = [] //user's plants
    
            //var currentUserReminders = dummyStore.reminders.filter(reminder => reminder.userId == this.context.currentUserId)
    
            //dummyStore.plants.map(plant=>{
                
               /* currentUserReminders.map(reminders => {
                    if(reminders.plantId.includes(plant.id)){
                        array.push(plant)
                    }
                })
            
            }) */
            
            //return array
        //}

    /*componentWillMount=()=>{
        console.log('will mount')
        console.log(this.context.plantList)
        this.setState({
            initialPlants: this.context.plantList,
            plants: this.context.plantList
        })
    }*/

    componentDidMount=()=>{
        this.context.clearError()
        const userId = UserService.getUserToken()

        if(!this.context.usersPlants.length){
            //fetch all users plants and store in context
            PlantApiService.getUsersPlants(userId)
                .then(this.context.setUsersPlants)
                .catch(this.context.setError)
        }
        
        if(!this.context.plantList.length){
            
            //fetch all available plants and store in context 
            PlantApiService.getAllPlants()
                .then(this.context.setPlantList)
                .catch(this.context.setError)
            
            
      
        }

        //PlantApiService.getAllPlants()
          //  .then(this.context.setPlantList)
            //.catch(/*set error in context*/)
        
        //this.context.setPlantList(dummyStore.plants)
        //const plants = this.usersPlants()
        //this.context.setUsersPlants(plants)
    
    }


    renderPlants=(plants)=>{
        //const {plantList = []} = this.context
        
        return plants.map(plant =>
            <PlantItem key={plant.id} plant={plant}/>
        ) 

    }

    filterPlants = (event) => {
    
        let clonedArray = JSON.parse(JSON.stringify(this.context.plantList))
        
        
        let plants = clonedArray.filter((plant)=>{
            return plant.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
        })

        this.setState({
            isFiltered:true,
            filteredPlants: plants
        })

        //this.state.setPlantList({plantList:plants})
    }

    

    render() {

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
            <section className='available-plants-section'>
                <div className='banner'>
                    <h2>Available Plants</h2>
                    <form className='search-form'> 
                        <label htmlFor="search-plants">Search all plants: </label>
                        <input type="text" name='search-plants' id='search-plants' placeholder="zz plant" onChange={this.filterPlants}/>
                    </form>
                </div>
                <div className='all-plants-container'>
                    {this.state.isFiltered
                    ? this.renderPlants(this.state.filteredPlants)
                    : this.renderPlants(this.context.plantList)}
                </div>
            </section>
            </Error>
        )
    }

}

//let clonedArray = JSON.parse(JSON.stringify(this.context.plantList))
