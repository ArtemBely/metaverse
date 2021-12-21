import React from 'react';
import logo from '../../public/images/logo.svg';
import logo_mobile from '../../public/images/logo — копия.svg';
import img_for_mistake from '../../public/images/shutterstock_2011330703 1.png';
import mobile_mistake_img from '../../public/images/shutterstock_2011330703 1 — копия.png';

class Mistake extends React.Component{

  constructor() {

    super()

  }


  render(){
    return (
      <p className='wrap_mistake'>
        <img src={img_for_mistake} id='img_for_mistake'/>
        <img src={mobile_mistake_img} id='mobile_mistake_img'/>
        <p className='mistake'>
              <p className='text_mistake'>Текст ошибки</p>
              <p className='reload'>Перезагрузить</p>
              <p className='report_problem'>Сообщить о проблеме</p>
        </p>
      </p>
    )
  }
}

export default Mistake;
