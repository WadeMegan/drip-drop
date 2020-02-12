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
        const { firstName, lastName, phoneNumber, email, password } = ev.target

        this.setState({ error: null })
        AuthApiService.postUser({
            first_name: firstName.value,
            last_name: lastName.value,
            phone_number: phoneNumber.value,
            email: email.value,
            password: password.value,
        })
            .then(user=>{
                firstName.value = ''
                lastName.value = ''
                phoneNumber.value = ''
                email.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
            })
            .catch(res=>{
                if(res.error === 'Password must contain one upper case, lower case, and number'){
                    this.setState({error:res.error})
                }
                else if(res.error === 'There is already an account associated with this email'){
                    this.setState({error:res.error})
                }
                else if(res.error === 'Password must be longer than 8 characters'){
                    this.setState({error:res.error})
                }
                else if(res.error === 'Password must not start or end with empty spaces'){
                    this.setState({error:res.error})
                }
                else if(res.error === 'Password must be less than 72 characters'){
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

    render(){
        const { error } = this.state
        return(
            <form className='registerForm' onSubmit={this.handleSubmit}>
                <h2 className='formTitle'>Create Account</h2>
                <div className='formElements'>
                    <div role='alert' id='error'>
                        {error && <p>{error}</p>}
                    </div>
                    <div>
                        <label htmlFor='firstName'>First name</label>
                        <input type='text' name='firstName' id='firstName' placeholder='John' required/>
                    </div>
                    <div>
                        <label htmlFor='lastName'>Last name</label>
                        <input type='text' name='lastName' id='lastName' placeholder='Doe' required/>
                    </div>
                    <div>
                        <label htmlFor='phoneNumber'>Phone</label>
                        <input type='tel' name='phoneNumber' id='phoneNumber' placeholder='1112223333' required/>
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' id='email' placeholder='johndoe@gmail.com' required/>
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' id='password' required/>
                    </div>
                    <input className='formRegisterButton' type='submit' value='Register'/>
                    <p className='signinLink'>Have an account? <Link to='/signin'>Sign in.</Link></p>
                </div>
            </form>
        )
    }

}