import React, { Component } from 'react';

import './App.css';
import NavBar from './components/NavBar'
import Map from './components/Map'

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <Map />
            </div>
        );
    }
}

export default App;
