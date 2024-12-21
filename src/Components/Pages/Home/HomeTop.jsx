import React, { useState } from 'react';
import { HomeTopText } from './HomeTopText';
import { Link } from 'react-router-dom';
import { HomeTopSmallText } from './HomeTopSmall';
import { homeTopTextes, homeTopTextesEN } from '../../../public/AppData';
import { useLanguage } from '../../../language/useLanguage';

export const HomeTop = () => {
    const { changeLanguage } = useLanguage()
    const [textInArrayCur, setTextInArrayCur] = useState(0);
    const [isBigTextLoading, setisBigTextLoading] = useState(false)


    return (
        <section>
            <div className='flex justify-between items-start mb-[20px] min-h-[90px]'>
                <HomeTopText
                    textArray={(changeLanguage(homeTopTextes, homeTopTextesEN)).bigText}
                    stopTime="5000"
                    toNewTime="100"
                    addSpeed="30"
                    delSpeed="30"
                    setisBigTextLoading={setisBigTextLoading}
                    textInArrayCur={textInArrayCur}
                    setTextInArrayCur={setTextInArrayCur}
                />
                <HomeTopSmallText
                    textArray={(changeLanguage(homeTopTextes, homeTopTextesEN)).smallText}
                    textInArrayCur={textInArrayCur}
                    isBigTextLoading={isBigTextLoading}
                />
            </div>
            <Link className='btn'>Free 15min consultation</Link>
        </section>
    );
}
