import * as React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div className="page-content">
      <h3>  About </h3> <br/>
      <p>We create magic.</p>
      <Link to="/">Home</Link>
   </div>
  )
}

export default About;