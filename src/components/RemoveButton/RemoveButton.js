import React, { Component } from 'react'
import PlantListContext from '../../contexts/PlantListContext'
import PlantApiService from '../../services/plant-api-services'
import UserService from '../../services/user-service'

export default class RemoveButton extends Component {
    static contextType = PlantListContext

    // when user clicks remove button, makes DELETE request to Drip Drop's API reminders endpoint
    removeReminder=()=>{
        const userId = UserService.getUserToken()

        PlantApiService.deleteReminder(this.props.plant.id,userId)
            .then(res =>{
                // after deleting reminder, makes GET request to Drip Drop API's reminders endpoint 
                // to update usersPlants list without deleted plant
                PlantApiService.getUsersPlants(userId)
                    .then(this.context.setUsersPlants)
                    .catch(this.context.setError)
            })
            .catch(this.context.setError)
    }

    render(){
        return(
            <button onClick={this.removeReminder}>
                Remove
            </button>
        )
    }
}