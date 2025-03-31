// class component

// function component
import React from "react";

class MyComponent extends React.Component{
    state= {
        name: 'Duy',
        address: 'Hoi dan IT',
        age: 26
    };

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>

        );
    }
}

export default MyComponent;