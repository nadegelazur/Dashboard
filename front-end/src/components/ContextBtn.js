import React from 'react';
import '../styles/ContextBtn.css'
import { useContext } from 'react';
import { ApiContext } from '../utils/contexts/ApiContext';

const ContextBtn = () => {

    const { toggleFetch, fetch } = useContext(ApiContext)
    return (
        <button className='switch-button'
                onClick={() => toggleFetch()}>
            {/* data from ({fetch === 'api'? 'mock': 'api'}) */}
            {fetch === 'api'? 'MOCK': 'API'}
        </button>
            
    );
};

export default ContextBtn;