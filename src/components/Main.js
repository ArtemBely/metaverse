import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../public/images/logo.svg';
import logo_mobile from '../../public/images/logo — копия.svg';
import door from '../../public/images/Vector (1).svg';
import flag from '../../public/images/flag.svg';
import fone from '../../public/images/1 1.png';

class Main extends React.Component{
  render() {
    return(
      <div className='wrap_mainPage'>
       <img src={fone} id='fone'/>
         <div className='main'>
            <p className='wrap_logo'><img src={logo} className='logo'/>
              <img src={logo_mobile} className='logo_mobile'/></p>
                <div className='wrap_links2'>
                   <p className='welcome'>Добро пожаловать в Давос</p>
                   <NavLink to='/download' className='wrap_links'>
                   <p className='enter_button'>
                   <img src={door} id='door'/>
                   <span id='enter_in1'>Войти <span id='inside_delete_modileMeta'>в Метавселенную</span></span></p>
                   </NavLink>
                   <NavLink to='#' className='wrap_links enter_but'>
                   <p className='reg_button'>
                   Заявка на регистрацию</p>
                   </NavLink>
               </div>
               <p className='choose_lang'><span className='lang'>Lang</span>
               <img src={flag} id='flag'/></p>
         </div>
      </div>
    )
  }
}

export default Main;
