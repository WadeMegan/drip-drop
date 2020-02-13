import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer'
import { Route, Switch} from 'react-router-dom'
import './App.css'
import LandingPage from '../../routes/LandingPage/LandingPage'
import RegisterPage from '../../routes/RegisterPage/RegisterPage'
import SigninPage from '../../routes/SigninPage/SigninPage'
import AllPlantsPage from '../../routes/AllPlantsPage/AllPlantsPage'
import YourPlantsPage from '../../routes/YourPlantsPage/YourPlantsPage'
import DirectionsPage from '../../routes/DirectionsPage/DirectionsPage'
import PrivateRoute from '../../components/Utils/PrivateRoute'
import PublicOnlyRoute from '../../components/Utils/PublicOnlyRoute'

class App extends Component {
  
  state = {
    isLoggedIn: false, // will be passed to Nav component to render different links based on logged in or not
    hasError: false,
  }

  static getDerivedStateFromError(error){
    console.error(error)
    return {hasError:true}
  }

  // will be passed to SigninPage and then SigninForm as props
  // upon successful login, will set state isLoggedIn to true
  // necessary for rendering different links in Nav
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
            {this.state.hasError && <p>Oops! There was an error!</p>}
            <Switch>
                <PublicOnlyRoute 
                  exact 
                  path={'/'}
                  component={LandingPage}
                />
                <PublicOnlyRoute
                  path={'/register'}
                  component={RegisterPage}
                />
                <PublicOnlyRoute
                  path={'/signin'}
                  render={()=> <SigninPage onLogin={this.handleLogin}/>}
                />
                <PrivateRoute 
                  path={'/plants'}
                  component={AllPlantsPage}
                />
                <PrivateRoute 
                  path={'/your-plants'}
                  component={YourPlantsPage}
                />
                <PrivateRoute 
                  path={'/directions'}
                  component={DirectionsPage}
                />
            </Switch>
        </main>
        <Footer/>
        </>
    )
  }
}

export default App;