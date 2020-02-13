import React, { Component } from 'react'
import './Nav.css'
import TokenService from '../../services/token-service'
import { Link } from 'react-router-dom'
import UserService from '../../services/user-service'

export default class Nav extends Component {

    state = {
        loggedIn: null,
    }

    // when user clicks logout link, clear the auth token and user token and set loggedIn to false
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        UserService.clearUserToken()
        this.setState({
            loggedIn:false
        })
    }

    // Nav component receives isLoggedIn App component state as a prop
    // if isLoggedIn is true, meaning a user has logged in, setState loggedIn to true
    componentWillReceiveProps(nextProps){
        if(nextProps.isLoggedIn){
            this.setState({
                loggedIn: true
            })
        }
    }

    // if loggedIn state is true, render logout link
    renderLogoutLink(){
        return(
            <Link
                onClick={this.handleLogoutClick}
                to='/' className='navLink'>
                Logout
            </Link>
        )
    }

    // if loggedIn state is false, render login link
    renderLoginLink(){
        return(
            <Link
                to='/signin' className='navLink'>
                Sign in
            </Link>
        )
    }

    render(){
        return (
           <nav>
               <h1>Drip <span><i className='fas fa-tint'></i></span> Drop</h1>
               {TokenService.hasAuthToken()
                ? this.renderLogoutLink()
                : this.renderLoginLink()}
           </nav>
        )
    }

}