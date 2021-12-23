import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import map_img from '../../public/images/unsplash_AFB6S2kibuk.png';
import chat_arrow from '../../public/images/akar-icons_send.svg';

class Start extends React.Component{
  render() {
    return(
      <p className='wrap_start'>
        <div className='start'>
                <div className='high_block'>
                    <NavLink to='/start/map' className='wrap_map active_link' activeClassName='active_links_style'>
                        Карта
                    </NavLink>
                    <Route exact path='/start/map'>
                        <div className='choose_location'>
                            <div className='wrap_titles_location'>
                                <NavLink to='#' className='titles_location'>Дом1</NavLink>
                                <NavLink to='#' className='titles_location'>Дом2</NavLink>
                                <NavLink to='#' className='titles_location'>Дом3</NavLink>
                                <NavLink to='#' className='titles_location'>Дом4</NavLink>
                                <NavLink to='#' className='titles_location'>Дом5</NavLink>
                                <NavLink to='#' className='titles_location'>Дом6</NavLink>
                                <NavLink to='#' className='titles_location'>Дом7</NavLink>
                                <NavLink to='#' className='titles_location'>Дом8</NavLink>
                            </div>
                            <p className='wrap_map_img'><img src={map_img} /></p>
                        </div>
                    </Route>
                    <NavLink to='/start/details' className='wrap_det active_link' activeClassName='active_links_style'>
                        ?
                    </NavLink>
                    <Route exact path='/start/details'>
                        <div className='wrap_all_details'>
                            <div className='all_details'>
                                <NavLink to='#' className='detail_link'>О проекте</NavLink>
                                <NavLink to='#' className='detail_link'>Помощь</NavLink>
                                <NavLink to='#' className='detail_link'>Контакты</NavLink>
                                <NavLink to='#' className='detail_link'>Сообщить о проблеме</NavLink>
                                <NavLink to='#' className='detail_link' id='choose_lang2'>Ru</NavLink>
                            </div>
                        </div>
                    </Route>
                </div>
                <div className='low_block'>
                    <NavLink to='/start/chat' className='disabled_chat active_link' activeClassName='started_chat'>
                    </NavLink>
                    <Route exact path='/start/chat'>
                        <div className='wrap_chat'>
                            <div className='chat_window'>
                                    <p className='chat_title'>Чат</p>
                                    <p className='share_cont'>Поделиться контактами</p>
                                    <div className='wrap_message'>
                                          <p className='message'>Добрый день! Как вам наша Метавселенная?</p>
                                    </div>
                                    <div className='wrap_chat_input'>
                                      <form>
                                          <input type='text' className='chat_input' placeholder='type somethind..' />
                                          <button type='submit' id='send_but'><img src={chat_arrow} /></button>
                                      </form>
                                    </div>
                            </div>
                        </div>
                    </Route>
                </div>
        </div>
      </p>
    )
  }
}

export default Start;
