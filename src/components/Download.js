import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import logo from '../../public/images/logo.svg';
import logo_mobile from '../../public/images/logo — копия.svg';

import { useTranslation, initReactI18next } from "react-i18next";

import i18n from '../server/i18n';

function Download (props){

    const { t } = useTranslation();
    const { id } = useParams();
    useEffect(() => {
      setTimeout(() => {
        i18n.changeLanguage(id);
      }, 170);
  }, []);

    return (
      <div className='wrap_download'>
        <div className='download'>
            <p className='wrap_down_logo'><img src={logo} id='down_logo' style={{width: '630px'}}/>
            <img src={logo_mobile} id='down_mob' style={{width: '430px'}}/></p>
            <p className='wrap_down'>
                <p className='text_down'>{t('Загрузка')}</p>
                <a href='#' className='general_links'><p className='cancel_act'>{t('Завершить сеанс')}</p></a>
            </p>
        </div>
      </div>
    )
}

export default Download;
