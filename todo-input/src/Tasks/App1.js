import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Task6 from './Task6';
import Task7 from './Task7';
class App1 extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route path='/task6' component={Task6} />
                        <Route path='/task7' component={Task7} />
                    </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}
export default App1;
