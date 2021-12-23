import React from 'react';
import { NavLink } from 'react-router-dom';
import flag from '../../public/images/flag.svg';
import person1 from '../../public/images/unsplash_KIPqvvTOC1s.svg';
import person2 from '../../public/images/unsplash_DItYlc26zVI.svg';
import person3 from '../../public/images/unsplash_v2aKnjMbP_k.svg';
import person4 from '../../public/images/unsplash_EZ4TYgXPNWk.svg';
import person5 from '../../public/images/unsplash_d1UPkiFd04A.svg';
import person6 from '../../public/images/unsplash_K84vnnzxmTQ.svg';

class Enter extends React.Component{
  render() {
    return(
      <p className='wrap_enter'>
        <div className='enter'>
           <div className='welcome_to'>
                <p className='enter_title'>Вход <span id='enter_meta'>в Метавселенную</span></p>
                <p className='lang_title'>Язык <span><img src={flag} id='flag2'/></span></p>
                <p className='no_reg'>Ещё не зарегистрированы? <span className='req_for'> Оставьте заявку → </span></p>
           </div>
           <div className='form_enter'>
                <form>
                  <p className='wrap_title_input'><span className='title_input'>Email</span><input type='text' className='common_inputs'/></p>
                  <p className='wrap_title_input'><span className='title_input'>Пароль</span><input type='text' className='common_inputs'/></p>
                  <button type='submit' className='but_enter'>Войти</button>
                </form>
           </div>
           <div className='wrap_persons'>
                  <p className='title_person'>Выбор персонажа</p>
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
}

export default Enter;
