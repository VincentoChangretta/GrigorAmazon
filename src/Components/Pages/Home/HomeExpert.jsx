import React from 'react';
import { Link } from 'react-router-dom';
import { expert } from '../../../public/ImgData';
import { PATHNAMES } from '../../../public/Constants';
import { useLanguage } from '../../../language/useLanguage';
import { expertData, expertDataEN } from '../../../public/AppData';
export const HomeExpert = () => {
    const { language, changeLanguage } = useLanguage()

    return (
        <section>
            <div className="inner gap-[30px] mb-[20px]">
                <div className='max-w-[490px]'>
                    <img className='img' src={expert} alt="expert" />
                </div>
                {
                    <div className='text-box max-w-[650px]'>
                        <h2 className='title max-w-[800px]'>{changeLanguage(expertData, expertDataEN).title}</h2>
                        <p>{changeLanguage(expertData, expertDataEN).description}</p>
                        <ul>{(changeLanguage(expertData, expertDataEN).expertise).map((item, index) => (
                            <li key={index}>— {item}</li>
                        ))}</ul>
                    </div>
                }
            </div>
            <div className='text-center'>
                <Link to={PATHNAMES.test} className='btn mx-auto'>Test</Link>
            </div>
        </section>
    );
}
