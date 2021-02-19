import React, { Component } from "react";


class FavoriteAnimals extends Component {
   
    render(){
        console.log(this)
        let data = this.props.allStudents.studentData
    
        return (
            data.map(student => (
                <div>
                    <p>{student.name}'s favorite animal is a {student.animal}</p>
                </div>
            ))
            
        )
    } 
   
    
}

export default FavoriteAnimals