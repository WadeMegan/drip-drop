import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './RegistrationForm.css'
import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends Component {
    state = {
        error: null
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { first_name, last_name, phone_number, email, password } = ev.target

        this.setState({ error: null })
        AuthApiService.postUser({
            first_name: first_name.value,
            last_name: last_name.value,
            phone_number: phone_number.value,
            email: email.value,
            password: password.value,
        })
            .then(user=>{
                first_name.value = ''
                last_name.value = ''
                phone_number.value = ''
                email.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
            })
            .catch(res=>{
                this.setState({error:res.error})
            })
        
    }

    render() {
        const { error } = this.state
        return (
                <form className='register-form' onSubmit={this.handleSubmit}>
                    <Link to="/signin">
                        <button className='signin-button'>Sign In</button>
                    </Link>
                    <div className='register-button'>Register</div>
                    <div role='alert'>
                        {error && <p>{error}</p>}
                    </div>
                    <div>
                        <label htmlFor="first_name">First name</label>
                        <input type="text" name='first_name' id='first_name' required/>
                    </div>
                    <div>
                        <label htmlFor="last_name">Last name</label>
                        <input type="text" name='last_name' id='last_name' required/>
                    </div>
                    <div>
                        <label htmlFor="phone_number">Phone</label>
                        <input type="tel" name='phone_number' id='phone_number' required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' id='email' required/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' required/>
                    </div>
                    <input className='form-register-button' type='submit' value='Register'/>
                </form>
        )
    }

}