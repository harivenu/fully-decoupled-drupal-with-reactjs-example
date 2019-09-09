import React, { Component } from 'react';
import {  Switch } from 'react-router-dom';
import {
    HashRouter as Router,
    Route,
} from 'react-router-dom';


import Home from "./Home";
import List from "./List";
import Single from "./Single"



class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/list" component={List} />
                        <Route path={"/node/:id"} component={Single} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
