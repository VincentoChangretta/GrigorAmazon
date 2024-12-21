import React from 'react';
import { Card } from '../../Global/Card';
import { meetings, meetingsEN, pakietyData, pakietyDataEN } from '../../../public/AppData';
import { useLanguage } from '../../../language/useLanguage';

export const HomeMeetings = () => {
  const { changeLanguage } = useLanguage()

  return (
    <section className='text-center'>
      <div className='mb-[20px]'>
        <h2 className='title'>{changeLanguage(meetings, meetingsEN).title}</h2>
        <h3 className='subtitle max-w-[700px] mx-auto'>{changeLanguage(meetings, meetingsEN).subTitle}</h3>
      </div>
      <div className='flex flex-col items-center gap-[20px]'>
        <p className='max-w-[950px]'>
          {changeLanguage(meetings, meetingsEN).text}
        </p>
        <div className='flex gap-[30px]'>
          {changeLanguage(pakietyData, pakietyDataEN).map(pakiet => (
            <Card key={pakiet.id} data={pakiet} />
          ))}
        </div>
      </div>
    </section>
  );
}
