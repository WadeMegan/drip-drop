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
import Error from '../../components/Error/Error.js'

export default class SigninForm extends Component {
    static contextType = PlantListContext


    state = {
        toPlants: false,
        error: null
    }

    onLoginSuccess = e =>{
        this.setState({
            toPlants:true,
        },()=>{this.props.onLogin()})
        
        const userId = UserService.getUserToken()

        //fetch all available plants and store in context 
        PlantApiService.getAllPlants()
            .then(this.context.setPlantList)
            .catch(this.context.setError)
        
        //fetch all users plants and store in context
        PlantApiService.getUsersPlants(userId)
            .then(this.context.setUsersPlants)
            .catch(this.context.setError)

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
                if(res.error === 'Incorrect email or password'){
                    this.setState({error:res.error})
                }
                else {
                    this.context.setError(res.error)
                }        
            })

    }   

    componentDidMount(){
        this.context.clearError()
    }

    render() {
        const {error} =this.state
        if(this.state.toPlants===true){
            return <Redirect to='/your-plants'/>
        }
        return (
            <form className='signin-form' onSubmit={this.handleSubmitJwtAuth}>
                <legend>Welcome Back</legend>
                <div className='formElements'>
                    <p className='demo'>To demo, sign in with email: test@gmail.com and password: password</p>
                    <div role='alert' id='error'>
                        {error && <p>{error}</p>}
                    </div>
                    <div>
                        <label htmlFor="username">Email</label>
                        <input type="text" name='username' id='username' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' />
                    </div>
                    <input className='form-signin-button' type='submit' value='Sign In'/>
                    <p className='createAccountLink'>New? <Link to='/register'>Create account.</Link></p>
                </div>
            </form>
        )
    }

}
