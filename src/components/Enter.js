import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import flag from '../../public/images/flag.svg';
import uk from '../../public/images/united-kingdom.png';
import de from '../../public/images/germany.png';
import person1 from '../../public/images/unsplash_KIPqvvTOC1s.svg';
import person2 from '../../public/images/unsplash_DItYlc26zVI.svg';
import person3 from '../../public/images/unsplash_v2aKnjMbP_k.svg';
import person4 from '../../public/images/unsplash_EZ4TYgXPNWk.svg';
import person5 from '../../public/images/unsplash_d1UPkiFd04A.svg';
import person6 from '../../public/images/unsplash_K84vnnzxmTQ.svg';

import { useTranslation, initReactI18next } from "react-i18next";

import i18n from '../server/i18n';

const Enter = (props) => {

    const { t } = useTranslation();
    const { id } = useParams();
    const flagsRef = useRef(null);

    useEffect(() => {
      setTimeout(() => {
        i18n.changeLanguage(id);
      }, 170);
  }, []);

  function showFlags(){
        flagsRef.current.classList.toggle('showFlag');
  }

    return(
      <p className='wrap_enter'>
        <div className='enter'>
           <p className='welcome_to'>
                <p className='enter_title'>{t("Вход")}<span id='enter_meta'> {t(" в Метавселенную")}</span></p>
                <p className='lang_title'>{t("Язык")}
                      <span>
                              <img src={ typeof window != "undefined" && (window.location.pathname == '/en/enter' || window.location.pathname == '/en/enter/') ?
                                 uk : typeof window != "undefined" && (window.location.pathname == '/de/enter' || window.location.pathname == '/de/enter/') ?
                                 de : flag } id='flag2' onClick={showFlags }/>
                      </span>
                      <p className='flags_field2' ref={flagsRef}>
                         <a href='/ru/enter/'><p className='wrap_flags'><img src={flag} id='flag3' className='dif_flags'/></p></a>
                         <a href='/en/enter/'><p className='wrap_flags'><img src={uk} id='uk' className='dif_flags'/></p></a>
                         <a href='/de/enter/'><p className='wrap_flags'><img src={de} id='de' className='dif_flags'/></p></a>
                      </p>
                </p>
                <p className='no_reg'>{t("Ещё не зарегистрированы?")} <span className='req_for'> {t("Оставьте заявку →")} </span></p>
           </p>
           <div className='form_enter'>
                <form action='/enter/signin' method='POST'>
                      <p className='wrap_title_input'><span className='title_input'>Email</span>
                            <input type='email' name='email' className='common_inputs' required /></p>
                              <p className='wrap_title_input'><span className='title_input'>{t("Пароль")}</span>
                            <input type='password' name='password' className='common_inputs' required /></p>
                      <button type='submit' className='but_enter'>{t("Войти")}</button>
                </form>
           </div>
           <div className='wrap_persons'>
                  <p className='title_person'>{t("Выбор персонажа")}</p>
                  <p className='wrap_each_person_for'>
                      <p className='each_person_for'><img src={person1} /></p>
                      <p className='each_person_for'><img src={person2} /></p>
                      <p className='each_person_for'><img src={person3} /></p>
                      <p className='each_person_for'><img src={person4} /></p>
                      <p className='each_person_for'><img src={person5} /></p>
                      <p className='each_person_for'><img src={person6} /></p>
                  </p>
           </div>
        </div>
      </p>
    )

}

export default Enter;
