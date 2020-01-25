import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './RegistrationForm.css'

export default class RegistrationForm extends Component {

    render() {
        return (
                <form className='register-form'>
                    <Link to="/signin">
                        <button className='signin-button'>Sign In</button>
                    </Link>
                    <div className='register-button'>Register</div>
                    <div>
                        <label htmlFor="first-name">First name</label>
                        <input type="text" name='first-name' id='first-name' />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last name</label>
                        <input type="text" name='last-name' id='last-name'/>
                    </div>
                    <div>
                        <label htmlFor="phone-number">Phone</label>
                        <input type="tel" name='phone-number' id='phone-number' />
                    </div>
                    <div>
                        <label htmlFor="username">Email</label>
                        <input type="text" name='username' id='username' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' />
                    </div>
                    <input className='form-register-button' type='submit' value='Register'/>
                </form>
        )
    }

}