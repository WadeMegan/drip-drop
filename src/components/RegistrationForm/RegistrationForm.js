import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './RegistrationForm.css'
import AuthApiService from '../../services/auth-api-service'
import PlantListContext from '../../contexts/PlantListContext'


export default class RegistrationForm extends Component {

    static contextType = PlantListContext

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
                if(res.error === 'Password must contain one upper case, lower case, number'){
                    this.setState({error:res.error})
                }
                else if(res.error === 'There is already an account associated with this email'){
                    this.setState({error:res.error})
                }
                else if(res.error === 'Password be longer than 8 characters'){
                    this.setState({error:res.error})
                }
                else{
                    this.context.setError(res.error)
                }
            })
        
    }

    componentDidMount(){
        this.context.clearError()
    }

    render() {
        const { error } = this.state
        return (
                <form className='register-form' onSubmit={this.handleSubmit}>
                    <legend>Create Account</legend>
                    <div className='formElements'>
                        <div role='alert' id='error'>
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
                        <p className='signinLink'>Have an account? <Link to='/signin'>Sign in.</Link></p>
                    </div>
                </form>
        )
    }

}