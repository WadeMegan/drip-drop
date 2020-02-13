import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SigninPage.css'
import SigninForm from '../../components/SigninForm/SigninForm'
import Error from '../../components/Error/Error'
import PlantListContext from '../../contexts/PlantListContext'

export default class SigninPage extends Component {
    static contextType = PlantListContext

    componentWillUnmount(){
        this.context.clearError()
    }

    // has been passed onLogin props from App component and is passing to SigninForm component
    render() {
        return (
            <Error>
            <section className = 'signinSection'>
                <SigninForm onLogin={this.props.onLogin}/>
            </section>
            </Error>
        )
    }
}

