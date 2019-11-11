import React, { Component } from 'react'
// import Logo from '../ContextApi/childs/Logo.png';

class App extends Component {
    state = {
        text: '',
    }
    render() {
        return (
            <div>
                <div className='container-fluid mt-5'

                >
                    <div className='row'>
                        <div className='super col-lg-3 col-sm-8 col-12 m-auto text-center border shadow'>
                            <h4 className='mt-2'>User Registration Form</h4>
                            <form className='super1 text-center ml-3 mt-3'>
                                <div>
                                    <label className='text-dark float-left mt-1' htmlFor='text'>UserName :</label>
                                    <input
                                        className='form-control'
                                        type='text'
                                        id='text'
                                        placeholder='Enter Text' />
                                </div>
                                <br></br>
                                <label className='text-dark float-left mt-1' htmlFor='Password'>Password :</label>
                                <input
                                    className='form-control'
                                    id='Password'
                                    type='password'
                                    placeholder='Enter Your Password' /><br></br>
                                <div className='mr-4 mb-4'>
                                    <input type='checkBox' className='mr-1' />
                                    <b style={{ fontWeight: '20x' }}>
                                        Terms And <i className='text-info'>conditions</i> Apply</b>
                                </div>
                            </form>
                            <button

                                className='btn btn-sm btn-success mb-3'>
                                Submit
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
