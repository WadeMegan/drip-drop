import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import LandingPage from '../../routes/LandingPage/LandingPage'
import RegisterPage from '../../routes/RegisterPage/RegisterPage'
import SigninPage from '../../routes/SigninPage/SigninPage'
import AllPlantsPage from '../../routes/AllPlantsPage/AllPlantsPage'
import HomeGardenPage from '../../routes/HomeGardenPage/HomeGardenPage'

function App() {
  return (
    <>
    <Nav />
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
              component={SigninPage}
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

export default App;