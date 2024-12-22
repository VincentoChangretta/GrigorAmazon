import React from 'react';
import { HomeTop } from './HomeTop';
import { HomeExpert } from './HomeExpert';
import { HomeMeetings } from './HomeMeetings';
import { HomeConsultation } from './HomeConsultation';
import { HomeVideo } from './HomeVideo';

export const Home = () => {
    return (
        <>
            <HomeTop />
            <HomeExpert />
            <HomeVideo/>
            <HomeMeetings />
            <HomeConsultation />
        </>
    );
}
