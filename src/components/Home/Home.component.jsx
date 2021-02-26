import React from "react";
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to='/students'>Students</Link>
            <h1>React V3 Notes </h1>
        </div>
        

    )
}

export default Home