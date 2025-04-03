import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component{
    state = {
        listUser: [
            {id: 1,name: "dinh tuan duy 1", age: 30},
            {id: 2,name: "dinh tuan duy 2", age: 69},
            {id: 3,name: "dinh tuan duy 3", age: 15},
        ]
    }
    render() {
        return (
            <div>
                <UserInfor />
                <br /><br />

                <DisplayInfor 
                listUser= {this.state.listUser} 
                />
            </div>
        );
    }
}

export default MyComponent;