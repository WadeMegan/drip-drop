import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SigninForm.css'

export default class SigninForm extends Component {

    render() {
        return (
            <form className='signin-form'>
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