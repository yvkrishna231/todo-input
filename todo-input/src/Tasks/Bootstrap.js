import React, { Component } from 'react';
import '../App.css'

class Bootstrap extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-8 col-8 border m-auto p-4 bg-light'>
                        <div>
                            <h4 id='h4tag' className='float-left mb-4 font-weight-normal'>Employee <b>Details</b></h4>
                            <button id='buttontagAddNew' className='float-right btn btn-sm btn-info font-weight-bolder'>
                                <span className='font-weight-bolder'>+</span> Add New</button>
                        </div>
                        <table id='tabletag' className='table table-bordered mt-2'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Phone</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>Administration</td>
                                    <td>(171) 555-2222</td>
                                    <td>
                                        <i className="fa fas fa-pencil text-warning"></i>
                                        <i className="fa far fa-trash text-danger ml-4"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Peter Parker</td>
                                    <td>Customer Service</td>
                                    <td>(313) 555-5735</td>
                                    <td>
                                        <i className="fa fas fa-pencil text-warning"></i>
                                        <i className="fa far fa-trash text-danger ml-4"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fran Wilson</td>
                                    <td>Human Resources</td>
                                    <td>(503) 555-9931</td>
                                    <td>
                                        <i className="fa fas fa-pencil text-warning"></i>
                                        <i className="fa far fa-trash text-danger ml-4"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bootstrap;