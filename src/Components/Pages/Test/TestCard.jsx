import React, { useState } from 'react';
import { InputRadio } from '../../UI/InputRadio';

export const TestCard = ({ card, cardIndex, setIsActive }) => {

  const [active, setActive] = useState(null)

  const changeActive = (answer) => {
    setActive(answer)
  }

  const setLetters = (index) => {
    const letters = ["A.", "B.", "C."];
    return letters[index] || "";
  }

  return (
    <article className='relative pl-[50px] flex flex-col max-w-[1000px] w-full rounded-standartRadius'>
      <div className='flex gap-[10px] max-w-fit mb-[30px]  rounded-standartRadius text-3xl font-extrabold'>
        <span className='block absolute left-[-10px] w-[60px] text-center'>{cardIndex + 1}.</span>
        <h3>{card.question}</h3>
      </div>
      <ul className={`flex gap-[10px]`}>
        {card.answers.map((answer, index) =>
          <li
            key={index}
            onClick={() => changeActive(answer)}
            className='w-fit relative text-lg bg-invertedStandartColorHover rounded-standartRadius cursor-pointer'
          >
            <InputRadio
              className='absolute left-[15px] top-[50%] translate-y-[-50%] cursor-pointer'
              name={`answer№${cardIndex + 1}`}
              value={`${setLetters(index).slice(0, 1)}`}
              onChange={() => setIsActive(true)}
              text={`${setLetters(index)} ${answer}`}
            />
          </li>
        )}
      </ul>
    </article >
  );
}
