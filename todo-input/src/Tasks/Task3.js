

import React, { Component, Fragment } from 'react'

class Good extends Component {
    state = {
        AgencyName: '',
        AgencyType: '',
        password: '',
        Adress: "",
        city: '',
        State: '',
        PhoneNumber: '',
        PhoneNumber1: '',
        email: '',
        CompanyName: '',
        gender: '',
        employee: true,
    }
    changingElement = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    changeSubmit = (event) => {
        event.preventDefault();
    }
    changeClear = () => {
        this.setState({
            AgencyName: '',
            AgencyType: '',
            password: '',
            Adress: "",
            city: '',
            State: '',
            PhoneNumber: '',
            PhoneNumber1: '',
            email: '',
            CompanyName: '',
            gender: 'male',
            employee: false,
        })
    }
    render() {
        console.log(this.state);
        const { AgencyName, AgencyType, password, Adress, city, State, PhoneNumber, PhoneNumber1, email, CompanyName, gender,
            employee, } = this.state;
        return (
            <Fragment>
                <div className='shadow'>
                    <div className='container mt-5'>
                        <h3>AGENT REGISTRATION</h3>
                        <form onSubmit={this.changeSubmit} >
                            <div className='row bg-light '>
                                <div className='col-lg-3 col-12 py-3'>
                                    <i className="text-info fa fa-check-circle-o"></i>
                                    <span> personal details </span>
                                </div>
                                <div className='col-lg-3 border py-3'>
                                    <i className="text-info fa fa-check-circle-o"> </i>
                                    <span className='text-info'> Agency details </span>
                                </div>
                                <div className='col-lg-3 border py-3'>
                                    <i className="text-info fa fa-check-circle-o"> </i>
                                    <span> Contact Personal details</span>
                                </div>
                                <div className='col-lg-3 border py-3'>
                                    <i className="text-info fa fa-check-circle-o"></i>
                                    <span> Work order scope </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='container mt-3'>
                        <h5>profile information</h5>
                        <form onSubmit={this.changeSubmit}>
                            <div className='row'>
                                <div className='col-lg-4 form-group'>
                                    <label htmlFor="Agency Name"
                                    >Agency Name
                                  <span className='text-danger'>*</span>
                                    </label>
                                    <input type="text"
                                        className='form-control'
                                        id="Agency Name"
                                        name='AgencyName'
                                        value={AgencyName}
                                        onChange={this.changingElement}
                                    />
                                </div>
                                <div className='col-lg-4 form-group'>
                                    <label
                                        htmlFor="Agency Type "
                                    >Agency Type
                                  <span className='text-danger'>*</span>
                                    </label>
                                    <input type="text"
                                        className='form-control '
                                        id='Agency Type'
                                        value={AgencyType}
                                        onChange={this.changingElement}
                                        name='AgencyType'
                                    />
                                </div>
                                <div className='col-lg-4 form-group'>
                                    <label
                                        htmlFor="password"
                                    >password
                                   <span className='text-danger'>*</span>
                                    </label>
                                    <input type="password"
                                        className='form-control '
                                        id='password'
                                        name='password'
                                        value={password}
                                        onChange={this.changingElement}
                                    />
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-lg-4 form-group'>
                                    <label htmlFor="Adress" > Adress <span className='text-danger'>*</span> </label>
                                    <input type="text"
                                        className='form-control '
                                        id="Adress"
                                        name='Adress'
                                        value={Adress}
                                        onChange={this.changingElement}
                                    />
                                </div>
                                <div className='col-lg-4 form-group'>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <label
                                                htmlFor="city"
                                            >city
                                          <span className='text-danger'>*</span>
                                            </label>
                                            <input type="text"
                                                className='form-control '
                                                id="city"
                                                value={city}
                                                onChange={this.changingElement}
                                                name="city"
                                            />
                                        </div>
                                        <div className='col-lg-6'>
                                            <label
                                                htmlFor="State"
                                            >State
                                          <span className='text-danger'>*</span>
                                            </label>
                                            <input type="text"
                                                className='form-control'
                                                id="State"
                                                value={State}
                                                onChange={this.changingElement}
                                                name="State" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 form-group'>
                                    <label
                                        htmlFor="number"
                                    >Phone Number
                                 <span className='text-danger'>*</span>
                                    </label>
                                    <input type="number"
                                        className='form-control '
                                        id='number'
                                        value={PhoneNumber}
                                        onChange={this.changingElement}
                                        name='PhoneNumber'
                                    />
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-lg-4 form-group'>
                                    <label
                                        htmlFor="PhoneNumber1"
                                    >Toll-free-number
                                  <span className='text-danger'>*</span>
                                    </label>
                                    <input type="number"
                                        className='form-control '
                                        name='PhoneNumber1'
                                        value={PhoneNumber1}
                                        onChange={this.changingElement}
                                        id="PhoneNumber1" />
                                </div>
                                <div className='col-lg-4 form-group'>
                                    <label
                                        htmlFor="email"
                                    >email
                                  <span className='text-danger'>*</span>
                                    </label>
                                    <input type="email"
                                        className='form-control '
                                        name='email'
                                        id='email'
                                        value={email}
                                        onChange={this.changingElement}
                                    />
                                </div>
                                <div className='col-lg-4 form-group'>
                                    <p className='m-0 mt-2'>courses  <span className='text-danger'>*</span></p>
                                    <select name="cars" className="custom-select ">
                                        <option >courses</option>
                                        <option value="React">React</option>
                                        <option value="Angular">Angular</option>
                                        <option value="Javascript">Javascript</option>
                                    </select>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-lg-4 form-group'>
                                    <label
                                        htmlFor=" CompanyName"
                                    > Company Name
                                <span className='text-danger'>*</span>
                                    </label>
                                    <input type="text"
                                        className='form-control'
                                        name="CompanyName"
                                        value={CompanyName}
                                        onChange={this.changingElement}
                                        id="CompanyName" />
                                </div>
                                <div className='col-lg-4 form-group'>
                                    <p className='mb-0'> gender <span className='text-danger'>*</span> </p>
                                    <div className='bg-light border border-secondary h-50 text-bottom m-2 p-2'>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio"
                                                className="custom-control-input"
                                                id="male"
                                                name="gender"
                                                onChange={this.changingElement}
                                                value={gender}
                                            />
                                            <label className="custom-control-label"
                                                htmlFor="male">male</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio"
                                                className="custom-control-input"
                                                id="female"
                                                name="gender"
                                                onChange={this.changingElement}
                                                value={gender}
                                            />
                                            <label className="custom-control-label"
                                                htmlFor="female">female</label>

                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 form-group'>
                                    <p>checked it<span className='text-danger'>*</span> </p>
                                    <div className="custom-control custom-checkbox ">
                                        <input type="checkbox"
                                            className="custom-control-input"
                                            id="employee"
                                            name="employee"
                                            value={gender}
                                            onChange={this.changingElement}
                                        />
                                        <label className="custom-control-label"
                                            htmlFor="employee">Are you an employee</label>
                                    </div>
                                </div>
                            </div>
                            <div className='float-right'>
                                <button type='reset' onClick={this.changeClear} className='btn btn-info mr-1'>
                                    reset</button>
                                <button type='submit' className='btn btn-outline-success mr-1'>submit</button>
                                <button className='btn btn-success float-left mr-1' onClick={this.changeClear}>Clear</button>
                            </div>

                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Good

