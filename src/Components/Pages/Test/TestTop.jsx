import React, { useEffect, useRef, useState } from 'react';
import { TestData, TestDataEN, testPage, testPageEN } from '../../../public/AppData';
import { TestCard } from './TestCard';
import { addTestValueCreator, clearTestValueCreator } from '../../../Redux/testReducer';
import { useDispatch } from 'react-redux';
import { Results } from './Results';
import { useLanguage } from '../../../language/useLanguage';


export const TestTop = () => {

  const { changeLanguage } = useLanguage()
  const [cardNumber, setCardNumber] = useState(0)
  const [isActive, setIsActive] = useState(null)
  const [isActiveErr, setIsActiveErr] = useState(null)
  const [results, setResults] = useState(null)
  const dispatch = useDispatch()
  const timeOutRef = useRef(null)

  const submitTestForm = (e) => {
    e.preventDefault()
    const results = new FormData(e.target)
    if (isActive && cardNumber !== TestData.length - 1) {
      setCardNumber(prev => prev + 1)
      setIsActive(false)
      setIsActiveErr(false)
      dispatch(addTestValueCreator([...results]))
      clearInterval(timeOutRef.current)
    } else if (!isActive) {
      setIsActiveErr(true)
      timeOutRef.current = setTimeout(() => setIsActiveErr(false), 4000);
    } else {
      dispatch(addTestValueCreator([...results]))
      setResults(true)
    }
  }

  useEffect(() => {
    return () => (clearTimeout(timeOutRef.current), dispatch(clearTestValueCreator()))
  }, [])

  return (
    <section>
      <div className='flex flex-col items-center text-center'>
        <h2 className='title'>
          {changeLanguage(testPage, testPageEN).title}
        </h2>
        <h3 className='subtitle max-w-[800px]'>
          {changeLanguage(testPage, testPageEN).subtitle}
        </h3>
      </div>
      <form className='relative max-w-[900px] mx-auto flex flex-col items-start gap-[30px] p-[50px] rounded-standartRadius bg-white shadow-lg' onSubmit={e => submitTestForm(e)}>
        {
          !results
            ? <>
              <div className='relative flex flex-col max-w-[900px] w-full p-[20px] '>
                {changeLanguage(TestData, TestDataEN).map((card, index) => {
                  if (index === cardNumber) {
                    return <TestCard setIsActive={setIsActive} key={card.id} card={card} cardIndex={index} />
                  }
                })}
                {isActiveErr && <p className='absolute left-[70px] bottom-[-18px] py-[5px] px-[10px] bg-errorColor text-invertedStandartColor rounded-standartRadius text-xs'>
                  {changeLanguage("Nie wybrano odpowiedzi!", "No answer selected!")}
                </p>}
              </div>
              <div className='absolute top-[20px] right-[20px] text-2xl font-extrabold '>
                {cardNumber + 1}/{TestData.length}
              </div>
              <button className='btn ml-[70px]'>
                {cardNumber + 1 === TestData.length ? "Wynik" : "Następny"}
              </button>
            </>
            : <Results />
        }
      </form>
    </section>
  );
}
