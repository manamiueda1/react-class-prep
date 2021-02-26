import React, { Component } from "react";


class Welcome extends Component {
    constructor(){
        super()
    }

    render(){
        // console.log(this.props)
        let username = this.props.welcome
        
        return(

            <div>
                <h1>welcome {username}</h1>
            </div>
            
        )
    }
}

export default Welcome