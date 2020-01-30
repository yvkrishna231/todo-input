import React from 'react';

const HocMain = (OldComponent, IncrementNumber) => {
    class NewComponent extends React.Component {
        state = {
            count: 0
        }
        handleOnClick = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count + IncrementNumber
                }
            })
        }
        render() {
            return <OldComponent
                count={this.state.count}
                handleMouseOver={this.handleOnClick}
                handleOnClick={this.handleOnClick}
                {...this.props}
            />
        }
    }
    return NewComponent;
}
export default HocMain;