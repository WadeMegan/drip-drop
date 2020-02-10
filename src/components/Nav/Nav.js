import React, { Component } from 'react'
import './Nav.css'
import TokenService from '../../services/token-service'
import { Link } from 'react-router-dom'
import UserService from '../../services/user-service'
import logo from '../../images/logo.png'

export default class Nav extends Component {

    state = {
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
                to='/' className='navLink'>
                Logout
            </Link>
        )
    }

    renderLoginLink(){
        return(
            <Link
                to='/signin' className='navLink'>
                Sign in
            </Link>
        )
    }

    render () {
        return (
           <nav>
               <h1>Drip <span><i class="fas fa-tint"></i></span> Drop</h1>
               {TokenService.hasAuthToken()
                ? this.renderLogoutLink()
                : this.renderLoginLink()}
        
           </nav>
        )
    }

}