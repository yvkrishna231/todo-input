
//there are four types of conditional rendering in react 
//1 type if And else Condition;
//2 type using an Element ;
//3 type terinary Condition;
//4 type using operator they are as follows

import React from 'react';

class App extends React.Component {
    state = {
        isLoggedIn: true
    }
    render() {
        //1 type if And else Condition;

        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Iam Logged in</div>
        //     )
        // } else {
        //     return (
        //         <div>Iam Not Logged In</div>
        //     )
        // }
        //2 type using an Element ;

        // let Element;
        // if (this.state.isLoggedIn) {
        //     Element = <h1>Iam Logged IN</h1>
        // } else {
        //     Element = <h1>Iam Not Logged IN</h1>
        // }
        // return (
        //     <div>
        //         <h1>{Element}</h1>
        //     </div>
        // )
        //3 type terinary Condition;

        // return (
        //     this.state.isLoggedIn ? (
        //         <div>Iam Logged In</div>
        //     ) : (
        //             <div>Iam Not Logged In</div>
        //         )
        // )

        //4 type using operator

        return this.state.isLoggedIn && <div>Iam Logged In</div>
    }
}

export default App;