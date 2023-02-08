import React from 'react';
import { Link } from 'react-router-dom';
import ContextBtn from '../components/ContextBtn'

import '../styles/Home.css'

// import { useEffect, useState, Navigate } from 'react'

/**
 * It returns a div with a logo and two links about user's id
 *
 * @return  {React.ReactElement}
 */

const Home = () => {   
    return (
        <div className='content-accueil'>
            <div className='btn_user'>
                <Link to={'user/12'}>Karl Dovineau</Link>
            </div>   
            < ContextBtn />
            <div className='btn_user'>
                <Link to={'user/18'}>Cecilia Ratorez</Link>
            </div>
        </div>
    );
};

export default Home;