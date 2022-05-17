import React, { useState, useEffect, useRef }  from 'react';
import { NavLink, useParams } from 'react-router-dom';
import logo from '../../public/images/logo.svg';
import logo_mobile from '../../public/images/logo — копия.svg';
import door from '../../public/images/Vector (1).svg';
import flag from '../../public/images/flag.svg';
import fone from '../../public/images/1 1.png';
import uk from '../../public/images/united-kingdom.png';
import de from '../../public/images/germany.png';

import { useTranslation, initReactI18next } from "react-i18next";

import i18n from '../server/i18n';


function Main(props){

  const { t } = useTranslation();
  let { id } = useParams();
  const flagsRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      i18n.changeLanguage(window.location.pathname.replace('/', ''));
      let s = window.location.pathname.replace('/', '');
    }, 300);
}, []);

function showFlags(){
      flagsRef.current.classList.toggle('showFlag');
}

    return(
      <div className='wrap_mainPage'>
       <img src={fone} id='fone'/>
         <div className='main'>
            <p className='wrap_logo'><img src={logo} className='logo'/>
              <img src={logo_mobile} className='logo_mobile'/></p>
                <div className='wrap_links2'>
                   <p className='welcome'>{t('Добро пожаловать в Давос')}</p>
                   <NavLink to={`${typeof window != "undefined" ?
                    window.location.pathname.replace('/', '') : 'ru'}/download`} className='wrap_links'>
                   <p className='enter_button'>
                   <img src={door} id='door'/>
                   <span id='enter_in1'>{t('Войти')} <span id='inside_delete_modileMeta'>{t(' в Метавселенную')}</span></span></p>
                   </NavLink>
                   <NavLink to='#' className='wrap_links enter_but'>
                   <p className='reg_button'>
                   {t('Заявка на регистрацию')}</p>
                   </NavLink>
               </div>
               <p className='choose_lang'>
                   <span className='lang'>{t('Язык')}</span>
                   <p className='flags_field' ref={flagsRef}>
                      <a href='/ru'><p className='wrap_flags'><img src={flag} id='flag3' className='dif_flags'/></p></a>
                      <a href='/en'><p className='wrap_flags'><img src={uk} id='uk' className='dif_flags'/></p></a>
                      <a href='/de'><p className='wrap_flags'><img src={de} id='de' className='dif_flags'/></p></a>
                   </p>
                   <img src={ typeof window != "undefined" && window.location.pathname.replace('/', '') == 'en' ?
                      uk : typeof window != "undefined" && window.location.pathname.replace('/', '') == 'de' ?
                      de : flag } id='flag' onClick={showFlags}/>
              </p>
         </div>
      </div>
    )

}

export default Main;
