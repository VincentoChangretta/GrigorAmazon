import React from 'react';
import './HomeTopSmallText.css'

export const HomeTopSmallText = ({ textArray, textInArrayCur, isBigTextLoading }) => {

    return (
        <div className='max-w-[480px] w-full flex flex-col items-center justify-center'>
            <p className='text-xl'>{textArray[textInArrayCur]}</p>
        </div>
    )
}
