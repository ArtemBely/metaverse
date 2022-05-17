import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import logo from '../../public/images/logo.svg';
import logo_mobile from '../../public/images/logo — копия.svg';
import img_for_mistake from '../../public/images/shutterstock_2011330703 1.png';
import mobile_mistake_img from '../../public/images/shutterstock_2011330703 1 — копия.png';

import { useTranslation, initReactI18next } from "react-i18next";

import i18n from '../server/i18n';

function Mistake (props){

  const { t } = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    setTimeout(() => {
      i18n.changeLanguage(id);
    }, 170);
}, []);

    return (
      <div className='wrap_mistake'>
        <img src={img_for_mistake} id='img_for_mistake'/>
        <img src={mobile_mistake_img} id='mobile_mistake_img'/>
        <p className='mistake'>
              <p className='text_mistake'>{t('Текст ошибки')}</p>
              <p className='reload'>{t('Перезагрузить')}</p>
              <p className='report_problem'>{t('Сообщить о проблеме')}</p>
        </p>
      </div>
    )
}

export default Mistake;
