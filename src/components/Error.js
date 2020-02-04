import React, {Component} from 'react'
import PlantListContext from '../contexts/PlantListContext'

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
              <h2>Drip Drop is currently experiencing some technical difficulties. Please try again later.</h2>
          )
      }
      return this.props.children 
      }

}

export default Error