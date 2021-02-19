import React, { Component } from "react";


const FavoriteAnimals = (props)=>{
    let data = props.allStudents.studentData
    
        return (
            data.map(student => (
                <div>
                    <p>{student.name}'s favorite animal is {student.animal}</p>
                </div>
            ))
        )
    
}

export default FavoriteAnimals