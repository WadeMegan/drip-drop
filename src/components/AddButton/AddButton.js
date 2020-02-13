import React, { Component } from 'react'
import PlantListContext from '../../contexts/PlantListContext'
import PlantApiService from '../../services/plant-api-services'
import UserService from '../../services/user-service'

export default class AddButton extends Component {
    static contextType = PlantListContext

    // when user clicks add button, makes POST request to Drip Drop API's reminders endpoint
    addReminder=()=>{
        const userId = UserService.getUserToken()
        
        PlantApiService.postNewReminder(this.props.plant.id,userId)
            .then(res=>{
                // after posting reminder, makes GET request to Drip Drop API's reminders endpoint 
                // to update usersPlants list with newly added plant
                PlantApiService.getUsersPlants(userId)
                    .then(this.context.setUsersPlants)
                    .catch(this.context.setError)
            })
            .catch(this.context.setError)
    }

    render(){
        return(
            <button onClick={this.addReminder}>
                Add
            </button>
        )
    }
}