import React, { Component } from 'react'
import './PlantItem.css'
import PlantListContext from '../../contexts/PlantListContext'
import AddButton from '../AddButton/AddButton'
import RemoveButton from '../RemoveButton/RemoveButton'
import UserService from '../../services/user-service'

export default class PlantItem extends Component {
    static contextType = PlantListContext

    state = {
        buttonText: null
    }
    
    componentDidMount(){
        const userId = UserService.getUserToken()    
    }

    checkIfSelected=()=>{

        const selectedPlantIds = []

        this.context.usersPlants.map(plant=>{
            selectedPlantIds.push(plant.id)
        })

        if(selectedPlantIds.includes(this.props.plant.id)){
            return <RemoveButton plant={this.props.plant}/>
        }
        else{
            return <AddButton plant={this.props.plant}/>
        }
    } 

    render(){
        return (
            <div className='indivPlant'>
                <h3>{this.props.plant.name}</h3>
                <p>{this.props.plant.watering_directions}</p>
                <img src={this.props.plant.img} alt={this.props.plant.name}></img>
                {this.checkIfSelected()}
            </div>
        )
    }

}

