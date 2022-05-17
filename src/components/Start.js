import React, { useState, useEffect } from 'react';
import { NavLink, Route, useParams } from 'react-router-dom';
import map_img from '../../public/images/unsplash_AFB6S2kibuk.png';
import chat_arrow from '../../public/images/akar-icons_send.svg';

import { useTranslation, initReactI18next } from "react-i18next";

import i18n from '../server/i18n';

function Start (props){

  const { t } = useTranslation();
  const { id } = useParams();
  const [lang, setLang] = useState('/ru/start/details');

  useEffect(() => {
    setTimeout(() => {
      i18n.changeLanguage(window.location.pathname.split('/')[1]);
      console.log(window.location.pathname.split('/')[1]);
      if(window.location.pathname.split('/')[1] == 'ru') {
        setLang('/en/start/details');
        return;
      }
      else if(window.location.pathname.split('/')[1] == 'de') {
        setLang('/ru/start/details');
        return;
      }
      else if(window.location.pathname.split('/')[1] == 'en') {
        setLang('/de/start/details');
        return;
      }
    }, 170);
}, []);

  return(
      <p className='wrap_start'>
        <div className='start'>
                <div className='high_block'>
                    <NavLink to={typeof window != "undefined" && (window.location.pathname.split('/')[1] == 'en' ||
                  window.location.pathname.split('/')[1] == 'de' || window.location.pathname.split('/')[1] == 'ru') ?
                  '/' + window.location.pathname.split('/')[1] + '/start/map' :
                  '/start/map'} className='wrap_map active_link' activeClassName='active_links_style'>
                        {t('Карта')}
                    </NavLink>
                    <Route path={['/start/map', '/ru/start/map', '/en/start/map', '/de/start/map']}>
                        <div className='choose_location'>
                            <div className='wrap_titles_location'>
                                <NavLink to='#' className='titles_location'>{t('Дом1')}</NavLink>
                                <NavLink to='#' className='titles_location'>{t('Дом2')}</NavLink>
                                <NavLink to='#' className='titles_location'>{t('Дом3')}</NavLink>
                                <NavLink to='#' className='titles_location'>{t('Дом4')}</NavLink>
                                <NavLink to='#' className='titles_location'>{t('Дом5')}</NavLink>
                                <NavLink to='#' className='titles_location'>{t('Дом6')}</NavLink>
                                <NavLink to='#' className='titles_location'>{t('Дом7')}</NavLink>
                                <NavLink to='#' className='titles_location'>{t('Дом8')}</NavLink>
                            </div>
                            <p className='wrap_map_img'><img src={map_img} /></p>
                        </div>
                    </Route>
                    <NavLink to={typeof window != "undefined" && (window.location.pathname.split('/')[1] == 'en' ||
                  window.location.pathname.split('/')[1] == 'de' || window.location.pathname.split('/')[1] == 'ru') ?
                  '/' + window.location.pathname.split('/')[1] + '/start/details' :
                    '/start/details'} className='wrap_det active_link' activeClassName='active_links_style'>
                        ?
                    </NavLink>
                    <Route path={['/start/details', '/ru/start/details', '/en/start/details', '/de/start/details']}>
                        <div className='wrap_all_details'>
                            <div className='all_details'>
                                <NavLink to='#' className='detail_link'>{t('О проекте')}</NavLink>
                                <NavLink to='#' className='detail_link'>{t('Помощь')}</NavLink>
                                <NavLink to='#' className='detail_link'>{t('Контакты')}</NavLink>
                                <NavLink to='#' className='detail_link'>{t('Сообщить о проблеме')}</NavLink>
                                <a href={lang} className='detail_link' id='choose_lang2'>{t('Ru')}</a>
                            </div>
                        </div>
                    </Route>
                </div>
                <div className='low_block'>
                    <NavLink to={typeof window != "undefined" && (window.location.pathname.split('/')[1] == 'en' ||
                  window.location.pathname.split('/')[1] == 'de' || window.location.pathname.split('/')[1] == 'ru') ?
                  '/' + window.location.pathname.split('/')[1] + '/start/chat' :
                  '/start/chat'} className='disabled_chat active_link' activeClassName='started_chat'>
                    </NavLink>
                    <Route path={['/start/chat', '/ru/start/chat', '/en/start/chat', '/de/start/chat']}>
                        <p className='wrap_chat'>
                            <div className='chat_window'>
                                    <p className='chat_title'>{t('Чат')}</p>
                                    <p className='share_cont'>{t('Поделиться контактами')}</p>
                                    <div className='wrap_message'>
                                          <p className='message'>{t('Добрый день! Как вам наша Метавселенная?')}</p>
                                    </div>
                                    <div className='wrap_chat_input'>
                                      <form>
                                          <input type='text' className='chat_input' placeholder='type somethind..' />
                                          <button type='submit' id='send_but'><img src={chat_arrow} /></button>
                                      </form>
                                    </div>
                            </div>
                        </p>
                    </Route>
                </div>
        </div>
      </p>
    )
}

export default Start;
