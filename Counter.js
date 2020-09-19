import React, { Component } from 'react'

class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             count: 0,
             
         };
    };
    
    increCount = () => {
        this.setState({
            count: this.state.count + 1,
           
        });
    };
     
    render() {
        return (
            <div>
                <button onClick={this.increCount}>Count {this.state.count}</button>     
            </div>
        )
    }
}

export default Counter
