import React from "react";
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to='/students'>Students</Link>
            <h1>Meet Nebula Academy's V3 Students</h1>
        </div>
        

    )
}

export default Home