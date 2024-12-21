import React from 'react';
import { HomeTop } from './HomeTop';
import { HomeExpert } from './HomeExpert';
import { HomeMeetings } from './HomeMeetings';
import { HomeConsultation } from './HomeConsultation';

export const Home = () => {
    return (
        <>
            <HomeTop />
            <HomeExpert />
            <HomeMeetings />
            <HomeConsultation />
        </>
    );
}
