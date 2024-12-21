import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLanguage } from '../../../language/useLanguage';
import { Consultation, ConsultationEN } from '../../../public/AppData';

export const HomeConsultation = () => {
    const { changeLanguage } = useLanguage()
    return (
        <section>
            <h2 className='title'>{(changeLanguage(Consultation, ConsultationEN)).title}</h2>
            <div>
                <div className="flex items-start gap-[50px]">
                    {(changeLanguage(Consultation, ConsultationEN)).items.map((item, index) => (
                        <div className="max-w-[50%] w-full">
                            <h3 className={`subtitle withIcon `}>
                                <FontAwesomeIcon icon={faCircleDot} className='fontIcon' />
                                {item.title}
                            </h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
