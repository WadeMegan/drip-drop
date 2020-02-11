import React, {Component} from 'react'
import PlantListContext from '../../contexts/PlantListContext'
import './Error.css'

class Error extends Component {
    static contextType = PlantListContext

    /*constructor(props) { 
        super(props);
        this.state = {
          hasError: false
        };
      }
    
      static getDerivedStateFromError(error) {
        return { hasError: true };
      }*/

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