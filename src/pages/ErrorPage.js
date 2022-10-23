import * as React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="page-content">
      404. Page Not Found
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
