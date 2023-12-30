import React from 'react'
import CV from '../../assets/CV.pdf'
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="cta">
    <a href= {CV} download className='btn'> {t('cv_btn')}</a>
    <a href="#contact" className='btn btn-primary'>{t('title_btn')}</a>
    {i18n.language == "en" && <a onClick= {() => {
      i18n.changeLanguage('ar');
    }} 
    className='cta__a'><GrLanguage className='cta__icon' /> AR</a>}


    {i18n.language == 'ar' && <a className='cta__a' onClick= {() => {
      i18n.changeLanguage('en');
    }}><GrLanguage className='cta__icon' /> EN</a>}
    </div>
  )
}

export default CTA
