import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedoutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">Sign up</NavLink></li>
            <li><NavLink to="/">Sign in</NavLink></li>
        </ul>
    );
}

export default SignedoutLinks;