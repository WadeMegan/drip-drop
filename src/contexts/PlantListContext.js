import React, { Component } from 'react'

const PlantListContext = React.createContext({
    plantList: [],
    setPlantList: () => {},
    currentUserId: null, 
    usersPlants: [],
    setUsersPlants: () => {},
    reminders: [],
    users: [],
    loggedIn: false,
    logOut: ()=>{},
    logIn: ()=>{},
    error: null,
    setError: ()=>{},
    clearError: ()=>{},
})
export default PlantListContext

export class PlantListProvider extends Component {
    state = {
        currentUserId: null, 
        plantList: [],
        usersPlants: [],
        reminders: [],
        users: [],
        loggedIn: false,
        error: null,
    }

    logOut = () => {
        this.setState({
            loggedIn: false
        })
    }

    logIn = () => {
        this.setState({
            loggedIn: true
        })
    }

    setPlantList = plantList => {
        this.setState({
            plantList: plantList
        })
    }

    setUsersPlants = plants => {
        this.setState({
            usersPlants: plants
        })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render (){
        const value = {
            plantList: this.state.plantList,
            setPlantList: this.setPlantList,
            currentUserId: this.state.currentUserId,
            usersPlants: this.state.usersPlants,
            setUsersPlants: this.setUsersPlants,
            reminders: this.state.reminders,
            users:this.state.users,
            loggedIn: this.state.loggedIn,
            logOut: this.logOut,
            logIn:this.logIn,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
        }
        return (
            <PlantListContext.Provider value={value}>
                {this.props.children}
            </PlantListContext.Provider>
        )
    }
}