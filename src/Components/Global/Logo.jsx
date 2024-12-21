import React from 'react';
import { Link } from 'react-router-dom';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Logo = () => {
    return (
        <Link to="/" className='text-5xl text-standartColor'>
            <FontAwesomeIcon icon={faBookOpenReader} />
        </Link>
    );
}
