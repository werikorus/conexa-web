import React, { useState } from 'react';
import Input from '../../components/Input/index';
import PageHeader from '../../components/PageHeader';
import SearchImg from '../../assets/images/icons/search-solid.svg'
import { Link } from 'react-router-dom';
import './styles.css';

function Landing() {
  var [cnpj, setCnpj] = useState('');

  const inputmask = (value) => {
    document.querySelector('#input-cnpj').addEventListener('input', function (e) {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
      e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
      setCnpj(x.slice(0, 1));
    });
  };

  return (
    <div id="page-landing">
      <PageHeader
        title="Localize | Empresas"
        description="Insira o CNPJ abaixo"
      />

      <div className="landing-components">
        <Input
          name='input-cnpj'
          placeholder='CNPJ...'
          // onChange={(e) => { setCnpj(e.target.value) }}
          onChange={(event) => {
            const { value } = event.target
            event.target.value = inputmask(value)
          }}
        />
        <br />
        <div className="botoes">
          <Link to={`Results/${cnpj}`} className="button-search" id="btn_search">
            Buscar
          </Link>
          <Link to={'/Historico'} className="button-search" id="btn_history">
            Histórico
          </Link>
        </div>
      </div>
      <br />
      <div id="searching-text">
        <img id="search-icon" src={SearchImg} alt="searching" />
        <br />
        <br />
        <strong><h4>Localise acima a empresa</h4></strong>
      </div>
    </div >
  );
};
export default Landing;
