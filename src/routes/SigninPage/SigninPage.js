import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SigninPage.css'
import SigninForm from '../../components/SigninForm/SigninForm'

export default class SigninPage extends Component {

    render() {
        return (
            <section className = 'signin-section'>
                <SigninForm/>
            </section>
        )
    }

}