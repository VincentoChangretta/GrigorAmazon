import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { headerNavData, headerNavDataEN } from '../../public/AppData';
import { useLanguage } from '../../language/useLanguage';
import { Languages } from '../../language/language';

export const Header = () => {
    const { language, setNewLanguage } = useLanguage()
    const [allLanguages, setAllLanguages] = useState([])

    useEffect(() => {
        let langArr = []
        for (let key in Languages) {
            langArr.push(Languages[key])
        }
        setAllLanguages(langArr)
    }, [])

    return (
        <header className='relative mb-[100px]'>
            <ul className='absolute top-[-10px] right-0 flex justify-end gap-[10px]'>
                {allLanguages.map((lang, index) => (
                    <li
                        key={index}
                        className={`flex justify-center items-center w-[50px] h-[30px] rounded-[10px] text-invertedStandartColor cursor-pointer ${language === lang ? "bg-[#1a1a1a]" : "bg-standartColor"}`}
                        onClick={() => setNewLanguage(lang)}
                    >
                        {lang}
                    </li>
                ))}
            </ul>
            <div className="inner py-[35px]">
                <Logo />
                <ul className='flex gap-[40px]'>
                    {(language === Languages.PL ? headerNavData : headerNavDataEN).map(item => (
                        <li key={item.id}>
                            <Link to={item.pathname}>{item.text}</Link>
                        </li>
                    ))}
                </ul>
                <Link className='btn '>Free Consultation</Link>
            </div>
        </header>
    );
}
