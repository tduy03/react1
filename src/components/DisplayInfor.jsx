import React from "react";

class DisplayInfor extends React.Component {
    state= {
        isShowListUser: true
    }
    handleSowHide= () =>{
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        //destructor
        const {listUser}= this.props
        // console.log(listUser);
        //props => viet tat properties
        return(
            <div>
                <div>
                    <span onClick={()=>{this.handleSowHide()}}>
                        {this.state.isShowListUser === true ? "Hide list user:" : "Show list user:"}
                        </span>
                </div>
                {this.state.isShowListUser && 
                    <div>
                        {listUser.map((user)=>{
                            return (
                                <div key= {user.id} className={user.age > 18 ? "green": "red"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;