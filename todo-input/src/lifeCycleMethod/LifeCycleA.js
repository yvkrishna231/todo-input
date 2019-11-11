import React, { Component } from 'react'

export default class LifeCycleA extends Component {
    constructor() {
        super();
        this.state = {
            name: 'krishna'
        }
        console.log('LifeCycleA Constructer')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('lifeCycleA Static getDerivedStateFromProps');
        return null;
    }
    componentDidMount(){
console.log('LifeCycleA ComponentDidMount')
    }
    render() {
        console.log("lifeCycleA render method")
        return (
            <div>

            </div>
        )
    }
}
