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

    render() {
        return (
            <Error>
            <section className = 'signin-section'>
                <SigninForm onLogin={this.props.onLogin}/>
            </section>
            </Error>
        )
    }

}

