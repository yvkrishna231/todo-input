import React, { Component } from 'react'
import Hero from './Hero';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
    render() {
        return (
            <div className='text-center'>
                <ErrorBoundary>
                    <Hero heroName='superMan' />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero heroName='batman' />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero heroName='jrNTR' />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero heroName='joker' />
                </ErrorBoundary>
            </div>
        )
    }
}

export default App
