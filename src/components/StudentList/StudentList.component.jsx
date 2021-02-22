import React, { Component } from "react";
import FavoriteAnimals from '../FavoriteAnimals/FavoriteAnimals.component.jsx'
import FavoriteCandy from '../FavoriteCandy/FavoriteCandy.component.jsx'
import './StudentList.styles.css'


class StudentList extends Component {
  constructor(){
    super();
    this.state = {
      studentData: [
        {
          id: 1,
          name: "Eddy",
          color: "chartreuse",
          school: "Nebula Academy",
          animal: 'cat',
          candy: 'skittle'
        },
        {
          id: 2,
          name: "Chelsea",
          color: "purple",
          school: "Nebula Academy",
          animal: 'dog',
          candy: 'kit-kat'
        },
        {
          id: 3,
          name: "Tauseef",
          color: "orange",
          school: "Nebula Academy",
          animal: 'rabbit',
          candy: 'sniker'
        },
        {
          id: 4,
          name: "Maurice",
          color: "red",
          school: "Nebula Academy",
          animal: 'turtle',
          candy: 'sour patch kid'
        },
        {
          id: 5,
          name: "D'aja",
          color: "blue",
          school: "Nebula Academy",
          animal: 'bird',
          candy: 'twix'
        },
        {
          id: 6,
          name: "Jasmine",
          color: "pink",
          school: "Nebula Academy",
          animal: 'bear',
          candy: 'milky way'
        },
        {
          id: 7,
          name: "Anitria",
          color: "blue",
          school: "Nebula Academy",
          animal: 'cow',
          candy: 'mars'
        },
      ]
    }
  }
  render(){
    return (
      <div>
        {this.state.studentData.map((student) => (
          <div className="studentCard">
            <h1>Hi {student.name}</h1>
            <p>
              {student.name}'s favorite color is {student.color}
            </p>
          </div>
        ))}
      
        <FavoriteAnimals allStudents={this.state}/>
        <FavoriteCandy favCandy={this.state} />
      
      </div>
    )
  } 
    
}

export default StudentList;