import React, { Component } from 'react'
import dummyStore from '../store/dummy-store'

const PlantListContext = React.createContext({
    plantList: [],
    setPlantList: () => {},
    currentUserId: null, 
    setCurrentUserId: () => {},
    usersPlants: [],
    setUsersPlants: () => {},
    reminders: [],
    addNewReminder: ()=>{},
    removeReminder:()=>{},
    setReminders: ()=>{},
    users: [],
    loggedIn: false,
    logOut: ()=>{},
    logIn: ()=>{}
})
export default PlantListContext

export class PlantListProvider extends Component {
    state = {
        plantList: [],
        setPlantList: () => {},
        currentUserId: null, 
        setCurrentUserId: () => {},
        usersPlants: [],
        setUsersPlants: () => {},
        reminders: [],
        addNewReminder: () => {},
        removeReminder:()=>{},
        setReminders: ()=>{},
        users: [],
        loggedIn: false,
        logOut: ()=>{},
        logIn: ()=>{}
    }

    logOut = () =>{
        this.setState({
            loggedIn: false
        })
    }

    logIn = () =>{
        this.setState({
            loggedIn: true
        })
    }

    /*addNewReminder = reminder => {
        console.log(reminder)
        this.state.reminders.push(reminder)
    }*/

    /*setReminders = reminders => {
        console.log('you set the reminders')
        this.setState({
            reminders: reminders
        })
    }*/


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

    /*setCurrentUserId = userId => {
        console.log(userId)
        this.setState({
            currentUserId: userId
        })
    }*/

    /*addNewReminder = reminder => {
        const newReminderList = this.state.reminders.push(reminder)
        this.setState({
            reminders:newReminderList
        })
    }

    removeReminder = (plantId, userId) => {
        console.log(plantId)
        console.log(userId)
        const newReminderList = this.state.reminders.filter(reminder=>
            plantId !== reminder.plantId 
        )
        this.setState({
            reminders:newReminderList
        })
        console.log('deleted')
        console.log(newReminderList)
    }*/

    render (){
        const value = {
            plantList: this.state.plantList,
            setPlantList: this.setPlantList,
            currentUserId: this.state.currentUserId,
            setCurrentUserId: this.setCurrentUserId,
            usersPlants: this.state.usersPlants,
            setUsersPlants: this.setUsersPlants,
            reminders: this.state.reminders,
            addNewReminder: this.addNewReminder,
            removeReminder: this.removeReminder,
            setReminders: this.setReminders,
            users:this.state.users,
            loggedIn: this.state.loggedIn,
            logOut: this.logOut,
            logIn:this.logIn,
        }
        return (
            <PlantListContext.Provider value={value}>
                {this.props.children}
            </PlantListContext.Provider>
        )
    }
}