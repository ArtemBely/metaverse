import React from 'react';
import logo from '../../public/images/logo.svg';
import logo_mobile from '../../public/images/logo — копия.svg';

class Download extends React.Component{

  constructor() {

    super()

  }


  render(){
    return (
      <div className='wrap_download'>
        <div className='download'>
            <p className='wrap_down_logo'><img src={logo} id='down_logo' style={{width: '630px'}}/>
            <img src={logo_mobile} id='down_mob' style={{width: '430px'}}/></p>
            <p className='wrap_down'>
                <p className='text_down'>Загрузка</p>
                <a href='#' className='general_links'><p className='cancel_act'>Завершить сеанс</p></a>
            </p>
        </div>
      </div>
    )
  }
}

export default Download;
