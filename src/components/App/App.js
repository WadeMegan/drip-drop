import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer'
import { Route, Switch} from 'react-router-dom'
import './App.css'
import LandingPage from '../../routes/LandingPage/LandingPage'
import RegisterPage from '../../routes/RegisterPage/RegisterPage'
import SigninPage from '../../routes/SigninPage/SigninPage'
import AllPlantsPage from '../../routes/AllPlantsPage/AllPlantsPage'
import HomeGardenPage from '../../routes/HomeGardenPage/HomeGardenPage'
import dummyStore from '../../store/dummy-store'

class App extends Component {
  
  
  state = {
    isLoggedIn: false,
  }
  /*
  setPlants = (data) => {
    this.setState({
      plants: data
    })
  }
  
  componentWillMount(){
    this.setPlants(dummyStore)
  }*/

  handleLogin=()=>{
      this.setState({
        isLoggedIn:true
      })
  }

  render(){
    
    return (

        <>
        <Nav isLoggedIn={this.state.isLoggedIn}/>
        <main className='App'>
            <Switch>
                <Route 
                  exact 
                  path={'/'}
                  component={LandingPage}
                />
                <Route 
                  path={'/register'}
                  component={RegisterPage}
                />
                <Route 
                  path={'/signin'}
                  render={()=> <SigninPage onLogin={this.handleLogin}/>}
                />
                <Route 
                  path={'/plants'}
                  component={AllPlantsPage}
                />
                <Route 
                  path={'/yourplants'}
                  component={HomeGardenPage}
                />
            </Switch>
        </main>
        <Footer/>
        </>
    );
  }
}

export default App;