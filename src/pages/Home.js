import * as React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-content">
      <h3>  Welcome to CEK Tech World. </h3> <br/>
      <p>You are welcome to our world of tech magic.</p>
      <div className="home-nav">
        <Link to="/about">About</Link>
      </div>
   </div>
  )
}

export default Home;