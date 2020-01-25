import React, { Component } from 'react'
import './RegisterPage.css'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default class RegisterPage extends Component {

    render() {
        return (
            <section className = 'register-section'>
                <RegistrationForm/>
            </section>
        )
    }

}