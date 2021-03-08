import React, {Component} from 'react';
import './signleMovie.styles.css'

class SingleMovie extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        console.log(this.props.location.state)
        const {title, backdrop_path} = this.props.location.state
        return(
            <div>
                <h1>single movie</h1>
                <img alt='movie' src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}/>
                <p>{title}</p>
            </div>
        )
    }
}

export default SingleMovie