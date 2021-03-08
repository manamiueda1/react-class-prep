import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './movies.styles.css';

class Movies extends Component {
    constructor(){
        super()
        this.state = { 
            movies: [],
            searchField: '',
            favMovies: [557, 415, 458897]
        }
    }


    // rendering a list of Marel movies
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/list/1?api_key=67095d224daa8dc607d145fc46fb7c47`)
            .then(data => data.json())
            .then(response => response)
            .then(data => this.setState({movies: data.items}))
    }

    // Looping through favMovies array
    // componentDidMount(){
    //     let movie= this.state.favMovies
    //     for (let i = 0; i < movie.length; i++){
    //         fetch(`https://api.themoviedb.org/3/movie/${movie[i]}?api_key=67095d224daa8dc607d145fc46fb7c47`)
    //         .then((response) => response.json())
    //         .then((data) => this.setState({movies: this.state.movies.concat(data)}))
    //     }
    // }

    // Searching movies via key word
    // componentDidMount(){
    //     fetch(`https://api.themoviedb.org/4/search/movie?&query=charlie&api_key=67095d224daa8dc607d145fc46fb7c47`)
    //         .then((response) => response.json())
    //         .then((data) => console.log(data))
    // }


    // addMovie = () => {
    //     let initParams = {
    //         "name": "This is my awesome test list.",
    //         "description": "Just an awesome list dawg.",
    //         "language": "en"
    //       }
    //     fetch(`https://api.themoviedb.org/3/list?api_key=67095d224daa8dc607d145fc46fb7c47`, {
    //         method: 'POST', 
    //         header : {'Content-Type': 'application/json'},
    //         body: JSON.stringify(initParams)
    //     }).then(data => data.json())
    //     .then(data => console.log(data))
    // }

    // Rendering single movie using ID
    // componentDidMount(){
    //     fetch('https://api.themoviedb.org/3/movie/550?api_key=67095d224daa8dc607d145fc46fb7c47')
    //         .then((response) => response.json()
    //         .then((data) => console.log(data)))
    //         // .then((data) => this.setState({movies: data})))
    // }

    render(){

        return(
            <div>
                <h1>Movies</h1>
                {this.state.movies.map(movie => {
                    return (
                        <div key={movie.id}>
                            <p>{movie.title}</p>
                            <Link to={{pathname: `/movie/${movie.id}`, state: movie }}><button>View Movie</button></Link>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default Movies
