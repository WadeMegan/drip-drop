import React, {Component} from 'react'
import PlantListContext from '../../contexts/PlantListContext'
import './Error.css'

//Error boundary
class Error extends Component {
    static contextType = PlantListContext

    render(){
      if(this.context.error !==null){
        return(
            <h2 className='errorBoundary'>Oops! Drip Drop is currently experiencing technical difficulties. Please try again later.</h2>
        )
      }
      return this.props.children 
    }
}

export default Error