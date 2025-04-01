// class component

// function component
import React from "react";

class MyComponent extends React.Component{
    state= {
        name: 'Duy',
        address: 'Hoi dan IT',
        age: 26
    };

    handleClick(event){
        console.log('clickclap')
        console.log("My name is ", this.state.name)
    }

    handleOnMoveOver(event){
        console.log(event.pageX);
        
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onClick={this.handleClick}>click me</button>
                <button onMouseOver={this.handleOnMoveOver}>Hover me</button>
            </div>

        );
    }
}

export default MyComponent;