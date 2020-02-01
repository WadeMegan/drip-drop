import React, { Component } from 'react'
import PlantListContext from '../../contexts/PlantListContext'
import PlantApiService from '../../services/plant-api-services'
import UserService from '../../services/user-service'

export default class AddButton extends Component {
    static contextType = PlantListContext

    addReminder=()=>{
        /*const newReminder = {
            "plantId":this.props.plant.id,
            "userId":this.context.currentUserId,
        }

        this.context.addNewReminder(newReminder)*/
        const userId = UserService.getUserToken()

        PlantApiService.postNewReminder(this.props.plant.id,userId)
            .then(res=>{
                //fetch all users plants and store in context
                PlantApiService.getUsersPlants(userId)
                    .then(this.context.setUsersPlants)
                    .catch(/*set error in context*/)
            })
            .catch(/*set error in context*/)
        




    }

    render () {

        return (
            <button onClick={this.addReminder}>
                Add
            </button>
        )
    }

}