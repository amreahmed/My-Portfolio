import React from 'react'
import CV from '../../assets/CV.pdf'
import { IoLanguageOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="cta">
    <a href= {CV} download className='btn'> Download CV</a>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    {i18n.language == "en" && <a onClick= {() => {
      i18n.changeLanguage('ar');
    }} 
    className='cta__a'><IoLanguageOutline className='cta__icon' /> AR</a>}


    {i18n.language == 'ar' && <a className='cta__a' onClick= {() => {
      i18n.changeLanguage('en');
    }}><IoLanguageOutline className='cta__icon' /> EN</a>}
    </div>
  )
}

export default CTA
