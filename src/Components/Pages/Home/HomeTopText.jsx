import React, { useEffect, useRef, useState } from 'react';

export const HomeTopText = ({ textArray, stopTime, toNewTime, addSpeed, delSpeed, setisBigTextLoading, textInArrayCur, setTextInArrayCur }) => {
    const [activeText, setActiveText] = useState('');
    const [firstText, setFirstText] = useState(false)
    const letterCurRef = useRef(0);
    const solvedTextRef = useRef('');

    useEffect(() => {
        const textInArray = textArray[textInArrayCur];
        letterCurRef.current = 0;
        solvedTextRef.current = '';
        setActiveText(""); // Начальное состояние для activeText

        let timeoutId = null; // Перемещаем сюда для доступности в очистке
        const textInterval = setInterval(() => {
            if (letterCurRef.current < textInArray.length) {
                solvedTextRef.current += textInArray[letterCurRef.current];
                letterCurRef.current++;
                setActiveText(solvedTextRef.current); // Обновление состояния activeText
            } else {
                clearInterval(textInterval);
                timeoutId = setTimeout(() => {
                    const textReverseInterval = setInterval(() => {
                        solvedTextRef.current = solvedTextRef.current.slice(0, -1);
                        setActiveText(solvedTextRef.current); // Обновление состояния activeText
                        if (solvedTextRef.current.length === 0) {
                            clearInterval(textReverseInterval);
                            setisBigTextLoading(false);
                            setTextInArrayCur(prev => (prev + 1) % textArray.length);
                        }
                    }, delSpeed);

                    // Очистка таймеров
                    return () => {
                        clearInterval(textReverseInterval);
                        clearTimeout(timeoutId); // Очистка setTimeout
                    };
                }, stopTime);
            }
        }, addSpeed);

        // Очистка при изменении зависимости
        return () => {
            clearInterval(textInterval);
            clearTimeout(timeoutId); // Очистка setTimeout
            setActiveText(""); // Сброс текста
        };
    }, [textInArrayCur, textArray]);



useEffect(() => {
    if (activeText.length == 18 && textInArrayCur == 0) {
        setFirstText(true)
    } else if (textInArrayCur > 0) {
        setFirstText(false)
    }
}, [activeText])


return (
    <div className='max-w-[670px] w-full text-4xl font-bold'>
        <h2 className='mb-[10px]'>{activeText}</h2>
    </div>
);
};
