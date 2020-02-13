import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SigninForm.css'
import { withRouter } from 'react-router'
import {Redirect} from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import PlantListContext from '../../contexts/PlantListContext'
import UserService from '../../services/user-service'
import PlantApiService from '../../services/plant-api-services'

export default class SigninForm extends Component {
    static contextType = PlantListContext

    state = {
        toPlants: false,
        error: null
    }

    // upon successful login ... 
    onLoginSuccess = e => {
        this.setState({ 
            toPlants:true, // set true for redirecting (see render method)
        },()=>{this.props.onLogin()}) // call this.props.onLogin which will set the App component isLoggedIn state to true
        
        const userId = UserService.getUserToken()

        // make GET requests to set plantList and usersPlants
        PlantApiService.getAllPlants()
            .then(this.context.setPlantList)
            .catch(this.context.setError)
        
        PlantApiService.getUsersPlants(userId)
            .then(this.context.setUsersPlants)
            .catch(this.context.setError)
    }

    // when user submits signin form ...
    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({
            error: null
        })

        const {username,password} = ev.target

        // makes POST request to Drip Drop API's auth endpoint 
        AuthApiService.postLogin({
            user_name: username.value,
            password: password.value,
        })
            // if login info is correct save the user's auth token and id to sessionStorage and call this.onLoginSuccess()
            .then(res=>{
                username.value=''
                password.value=''
                TokenService.saveAuthToken(res.authToken)
                //save user id in local storage for refresh
                UserService.saveUserToken(res.id)
                this.onLoginSuccess()      
            })
            .catch(res=>{
                // if the error equals the validation error possibly from the endpoint, setState to show error to user
                if(res.error === 'Incorrect email or password'){
                    this.setState({error:res.error})
                }
                // if other error, set context error to show error boundary
                else {
                    this.context.setError(res.error)
                }        
            })
    }   

    componentDidMount(){
        this.context.clearError()
    }

    render(){
        const {error}=this.state
        // upon successful login, redirect to your plants page
        if(this.state.toPlants===true){
            return <Redirect to='/your-plants'/>
        }
        return(
            <>
            <form className='signinForm' onSubmit={this.handleSubmitJwtAuth}>
                <h2 className='formTitle'>Welcome Back</h2>
                <div className='formElements'>
                    <p className='demo'>To demo, sign in with email: test@gmail.com and password: password</p>
                    <div role='alert' id='error'>
                        {error && <p>{error}</p>}
                    </div>
                    <div>
                        <label htmlFor='username'>Email</label>
                        <input type='text' name='username' id='username' />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' id='password' />
                    </div>
                    <input className='formSigninButton' type='submit' value='Sign In'/>
                    <p className='createAccountLink'>New? <Link to='/register'>Create account.</Link></p>
                </div>
            </form>
            </>
        )
    }

}
