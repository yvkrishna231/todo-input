import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    constructor() {
        super();
        this.state = {
            name: 'krishna'
        }
        console.log('LifeCycleB Constructer')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB Static getDerivedStateFromProps');
        return null;
    }
    componentDidUpdate() {
        console.log('LifeCycleB ComponentDidMount')
    }
    render() {
        console.log("LifeCycleB render method")
        return (
            <div>

            </div>
        )
    }
}
