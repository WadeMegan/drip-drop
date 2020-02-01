import React, { Component } from 'react'
import PlantListContext from '../../contexts/PlantListContext'
import PlantApiService from '../../services/plant-api-services'
import UserService from '../../services/user-service'

export default class Button extends Component {
    static contextType = PlantListContext

    addReminder=()=>{
        //console.log(this.context.usersPlants)
    }

    checkButtonType=(plants)=>{
        console.log(plants)

        
        const selectedPlantIds = []

            plants.map(plant=>{
                selectedPlantIds.push(plant.id)
            })


            if(selectedPlantIds.includes(this.props.plant.id)){
                return 'Remove'
            }
            else{
                return 'Add'
            }
    }



    render () {
        return (
            <button onClick={this.addReminder}>
                {this.checkButtonType(this.context.usersPlants)}
            </button>
        )
    }

}