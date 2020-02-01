import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SigninForm.css'
import { withRouter } from 'react-router';
import {Redirect} from "react-router-dom"
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import PlantListContext from '../../contexts/PlantListContext'
import UserService from '../../services/user-service'
import PlantApiService from '../../services/plant-api-services';


export default class SigninForm extends Component {
    static contextType = PlantListContext

    state = {
        toPlants: false,
        error: null
    }

    onLoginSuccess = e =>{
        
        const userId = UserService.getUserToken()

        //fetch all available plants and store in context 
        PlantApiService.getAllPlants()
            .then(this.context.setPlantList)
            .catch(/*set error in context*/)
        
        //fetch all users plants and store in context
        PlantApiService.getUsersPlants(userId)
            .then(this.context.setUsersPlants)
            .catch(/*set error in context*/)


        this.setState({
            toPlants:true,
        },()=>{this.props.onLogin()})

    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({
            error: null
        })
        const {username,password} = ev.target

        AuthApiService.postLogin({
            user_name: username.value,
            password: password.value,
        })
            .then(res=>{
                username.value=''
                password.value=''
                TokenService.saveAuthToken(res.authToken)
                //save user id in local storage for refresh
                UserService.saveUserToken(res.id)
                //localStorage.setItem('user-id',res.id)

                this.onLoginSuccess()
                //res.id is user id here
                
            })
            .catch(res=>{
                this.setState({error:res.error})
            })

    }   

    render() {

        if(this.state.toPlants===true){
            return <Redirect to='/yourplants'/>
        }
        const {error} = this.state
        return (
            <form className='signin-form' onSubmit={this.handleSubmitJwtAuth}>
                <div className='signin-button'>Sign In</div>
                <Link to="/register">
                    <button className='register-button'>Register</button>
                </Link>
                <div>
                    <label htmlFor="username">Email</label>
                    <input type="text" name='username' id='username' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' />
                </div>
                <input className='form-signin-button' type='submit' value='Sign In'/>
            </form>
        )
    }

}