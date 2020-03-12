import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import signin from './signin';
import signUp from './signUp';
import Dashboard from './Dashboard';

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Dashboard} />
                        <Route path='/signin' component={signin} />
                        <Route path='/signup' component={signUp} />
                        <Redirect to='/' />
                    </Switch>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;