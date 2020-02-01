import React, { Component } from 'react'
import './Nav.css'
import TokenService from '../../services/token-service'
import { Link } from 'react-router-dom'
import UserService from '../../services/user-service'

export default class Nav extends Component {

    state ={
        loggedIn: null,
    }

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        UserService.clearUserToken()
        this.setState({
            loggedIn:false
        })
    }

    handleSuccessfulLogin = () => {
        console.log('hi')
        this.setState({
            loggedIn:true
        })

    }

    componentWillReceiveProps(nextProps){
        if(nextProps.isLoggedIn){
            this.setState({
                loggedIn: true
            })
        }
    }

    renderLogoutLink(){
        return(
            <Link
                onClick={this.handleLogoutClick}
                to='/'>
                Logout
            </Link>
        )
    }

    renderLoginLink(){
        return(
            <Link
                to='/signin'>
                Sign in
            </Link>
        )
    }

    render () {
        return (
           <nav>
               <h1>Drip Drop</h1> 
               {TokenService.hasAuthToken()
                ? this.renderLogoutLink()
                : this.renderLoginLink()}
        
           </nav>
        )
    }

}