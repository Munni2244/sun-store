import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error'>
        <Link to="/"><button>Go Home</button></Link>
        </div>
    );
};

export default Error;