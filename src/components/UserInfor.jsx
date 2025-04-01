import React from "react";

class UserInfor extends React.Component {
    state= {
        name: 'Duy',
        address: 'Hoi dan IT',
        age: 26
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
        // console.log(event);
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
        // console.log(event);
    }

    handleOnSubmit= (event) => {
        event.preventDefault();
        console.log(this.state);
        
    }
    render(){
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                {/* <button onClick={(event)=>{this.handleClick(event)}}>click me</button> */}
                <form onSubmit={(event)=> this.handleOnSubmit(event)}>
                    <input value={this.state.name}
                    type="text" 
                    onChange={(event)=> this.handleOnChangeInput(event)} /><br/>

                    <input value={this.state.age}
                    type="text" 
                    onChange={(event)=> this.handleOnChangeAge(event)} /><br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;