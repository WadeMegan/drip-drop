import React, { Component } from 'react'
import './RegisterPage.css'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import Error from '../../components/Error/Error'
import PlantListContext from '../../contexts/PlantListContext'


export default class RegisterPage extends Component {
    static contextType = PlantListContext

    
    static defaultProps = {
        history: {
            push: () => {},
        }
    }

    componentDidMount(){
        this.context.clearError()
    }

    handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/signin')
        console.log('it worked')
    }

    render() {
        return (
            <Error>
            <section className = 'registerSection'>
                <RegistrationForm 
                    onRegistrationSuccess={this.handleRegistrationSuccess}
                />
            </section>
            </Error>
        )
    }

}