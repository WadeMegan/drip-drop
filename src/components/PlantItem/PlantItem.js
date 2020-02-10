import React, { Component } from 'react'
import './PlantItem.css'
import PlantListContext from '../../contexts/PlantListContext'
import AddButton from '../AddButton/AddButton'
import RemoveButton from '../RemoveButton/RemoveButton'
import PlantApiService from '../../services/plant-api-services'
import UserService from '../../services/user-service'

export default class PlantItem extends Component {
    static contextType = PlantListContext

    state = {
        buttonText: null
    }
    
    componentDidMount(){
        const userId = UserService.getUserToken()
        //localStorage.getItem('user-id')
        //PlantApiService.getUsersPlants(userId)
            //.then(this.context.setUsersPlants)
            //.catch(/*set error in context*/)

            //console.log(this.context.usersPlants)


            /*const selectedPlantIds = []

            this.context.usersPlants.map(plant=>{
                selectedPlantIds.push(plant.id)
            })


            if(selectedPlantIds.includes(this.props.plant.id)){
                this.setState({
                    buttonText: 'Remove'
                })
            }
            else{
                this.setState({
                    buttonText: 'Add'
                })
            }*/
    
    }

    /*componentDidMount(){
        //console.log(this.context.usersPlants)

    }*/

    onButtonClick = () => {

    }

  checkIfSelected=()=>{

        const selectedPlantIds = []

        this.context.usersPlants.map(plant=>{
            selectedPlantIds.push(plant.id)
        })

            //console.log(this.context.usersPlants)
                if(selectedPlantIds.includes(this.props.plant.id)){
                    return <RemoveButton plant={this.props.plant}/>
                }
                else{
                    return <AddButton plant={this.props.plant}/>
                }
    } 


    render () {

        return (
            <div className='indiv-plant'>
                <h3>{this.props.plant.name}</h3>
                <p>{this.props.plant.watering_directions}</p>

                <img src={this.props.plant.img} alt={this.props.plant.name}></img>
                {this.checkIfSelected()}
                
            </div>
        )
    }
}

//{this.checkIfSelected()} go under p 