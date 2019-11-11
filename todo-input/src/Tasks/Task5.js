import React, { Component } from 'react'

export default class Task5 extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <h3>Popover Example</h3>
                    <a href='./Task4'
                        data-toggle="popover"
                        title="Popover Header">
                        Togglepopover
                        </a>&nbsp;
                    <a href="#"
                        title="Top"
                        data-toggle="popover"
                        data-placement="top"
                        data-content="Content">Top</a>&nbsp;
                    <a href="#"
                        title="Bottom"
                        data-toggle="popover"
                        data-placement="bottom"
                        data-content="Content">Bottom</a>&nbsp;
                    <a href="#"
                        title="Left"
                        data-toggle="popover"
                        data-placement="left"
                        data-content="Content">Left</a>&nbsp;
                    <a href="#"
                        title="Right"
                        data-toggle="popover"
                        data-placement="right"
                        data-content="Content">Right</a>&nbsp;
                        <a href="#" data-toggle="tooltip" title="Hooray!">overme</a>
                </div>
            </div>
        )
    }
}
