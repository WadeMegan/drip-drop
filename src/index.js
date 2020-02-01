import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './index.css';
import { PlantListProvider } from '../src/contexts/PlantListContext'

ReactDOM.render(
    <BrowserRouter>
        <PlantListProvider>
            <App />
        </PlantListProvider>
    </BrowserRouter>, 
    document.getElementById('root')
);