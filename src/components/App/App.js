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
import PrivateRoute from '../../components/Utils/PrivateRoute'
import PublicOnlyRoute from '../../components/Utils/PublicOnlyRoute'
import Error from '../../components/Error'
const queryString = require('query-string');


class App extends Component {
  
  state = {
    isLoggedIn: false,
    hasError: false,
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

  static getDerivedStateFromError(error){
    console.error(error)
    return {hasError:true}
  }

  handleLogin=()=>{
      this.setState({
        isLoggedIn:true
      })
  }

  componentDidMount(){
    const params = queryString.parse(document.location.search);
    const redirect = params.redirect; // this would be "abcdefg" if the query was "?redirect=abcdefg"
    if (document.location.pathname === '/' && redirect) {
      document.location.assign(`${document.location.origin}/${redirect}`);
    }
  }

  render(){
    
    return (

        <>
        <Nav isLoggedIn={this.state.isLoggedIn}/>
        <main className='App'>
            {this.state.hasError && <p>Oops! There was an error!</p>}
            <Switch>
                <Route 
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