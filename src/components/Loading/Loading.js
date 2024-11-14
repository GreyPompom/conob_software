import React from 'react';
import './Loading.css';
import conob from '../../assets/conob_engrenagem.png';


const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"><img src={conob} width={50} loading='lazy'/> </div>
      <p className='text-primary'>Carregando...</p>
    </div>
  );
};


export default Loading;
