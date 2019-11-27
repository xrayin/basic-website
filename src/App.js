import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import NavBar from "./components/navbar";
import Home from "./components/home";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar/>
                <main className="container">
                    <Switch>
                        <Route path="/" component={Home}/>
                        <Redirect from="/" exact to="/"/>
                        <Redirect to="/not-found"/>
                    </Switch>
                </main>
            </div>
        );
    }
}
export default App;
