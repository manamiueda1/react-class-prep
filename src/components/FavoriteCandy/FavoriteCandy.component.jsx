import React, { Component } from "react";

class FavoriteCandy extends Component {
   
    render(){
        console.log(this)
        let data = this.props.favCandy.studentData
    
        return (
           
            data.map(student => (
                <div>
                    <p>{student.name}'s favorite candy is {student.candy}</p>
                </div>
            ))
            
        )
    } 
   
    
}

export default FavoriteCandy