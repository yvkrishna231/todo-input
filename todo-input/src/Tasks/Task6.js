
import React, { Component } from 'react'

class Task6 extends Component {
    state = {
        input1: '',
        input2: ''
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
    }
    handleOnChange = (e) => {


    }
    handleOnClick = () => {
        if (this.state.input1 && this.state.input2) {
            this.props.target.push('/task7')
        }
    }
    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-10 col-11 text-center m-auto border'
                        style={{
                            borderTopRightRadius: '142px',
                            borderBottomLeftRadius: '153px',
                            outline: 'none',
                            backgroundColor: 'whitesmoke'
                        }}>
                        <div className='col-lg-10 col-md-8 col-sm-12 col-12 text-center m-auto'>
                            <h1 className='text-primary m-0'>Sign In</h1>
                            <form onSubmit={this.handleOnSubmit} className='p-4'>
                                <div>
                                    <h6 className='float-left'>
                                        Email address :
                                        </h6>
                                    <input

                                        name='text'
                                        onChange={this.handleOnChange}
                                        type='text'
                                        className=''
                                        style={{ width: '100%', height: '35px' }}
                                    />
                                    {/* <i class="fa fa-envelope float-left mt-2 border" style={{fontSize: '15px'}}></i> */}
                                </div>
                                <div>
                                    <h6
                                        className='float-left mt-2'>
                                        password :
                                    </h6>
                                    <input

                                        name='password'
                                        onChange={this.handleOnChange}
                                        type='password'
                                        className='p-0'
                                        style={{ width: '100%', height: '35px' }}
                                    />
                                    {/* <i className='fa fa-user float-left' style={{ height: '30px', fontSize: 'larger' }}></i> */}
                                </div>
                                <div className='float-left mt-2'>
                                    <input type='checkbox'
                                        id='checkbox'
                                        className='mr-2' />
                                    <label
                                        htmlFor='checkbox'>
                                        Remember me
                                    </label>
                                </div>
                                <a
                                    className='float-right text-primary mt-2'>
                                    forgetpassword ?
                                </a>
                                <button
                                    onClick={this.handleOnClick}
                                    className='form-control btn btn-sm btn-primary mt-2'>
                                    Sign In
                                </button>
                                <p
                                    className='mt-2'>
                                    Note have an account ?
                                <abbr title='sample text' className='text-primary'> Register</abbr>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Task6;