import React from 'react';
import './Loading.css';
import conob from '../../assets/Abstratos/faviconCengrenagem.png';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"><img src={conob} width={50}/> </div>
      <p>Carregando...</p>
    </div>
  );
};

export default Loading;
