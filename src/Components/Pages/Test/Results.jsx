import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { resultsData, resultsDataEN } from '../../../public/AppData';
import { calculateEndValue, calculateTestValue } from '../../../public/Functions';
import { useLanguage } from '../../../language/useLanguage';


export const Results = () => {
    const { language, changeLanguage } = useLanguage()
    const testValue = useSelector(state => state.testValue.testValue)
    const testValueCounts = calculateTestValue(testValue)
    const endValue = calculateEndValue(testValueCounts)
    const [resultState, setResultState] = useState(null)

    useEffect(() => {
        if (endValue > 0 && endValue <= 10) {
            setResultState(changeLanguage(resultsData, resultsDataEN).ResultsTo10)
        } else if (endValue > 11 && endValue <= 20) {
            setResultState(changeLanguage(resultsData, resultsDataEN).ResultsTo20)
        } else if (endValue > 21 && endValue) {
            setResultState(changeLanguage(resultsData, resultsDataEN).ResultsTo30)
        }
    }, [language])

    return (
        <div className='w-full text-center'>
            <h3 className='text-center text-2xl font-extrabold mb-[20px]'>
                {`${changeLanguage("Potrzebujesz kursu ", "You need a course ")} ${resultState}`}
            </h3>
            <button className='btn'>{changeLanguage("Zamówić", "Order")}</button>
        </div>
    );
}
