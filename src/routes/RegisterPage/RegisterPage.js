import React, { Component } from 'react'
import './RegisterPage.css'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default class RegisterPage extends Component {
    static defaultProps = {
        history: {
            push: () => {},
        }
    }

    handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/signin')
        console.log('it worked')
    }

    render() {
        return (
            <section className = 'register-section'>
                <RegistrationForm 
                    onRegistrationSuccess={this.handleRegistrationSuccess}
                />
            </section>
        )
    }

}