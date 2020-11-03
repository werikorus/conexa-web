import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ResultsCard from '../../components/ResultsCard/BKP';
import jQuery from 'jquery';
import axios from 'axios';
import './result-styles.css';
import 'google-map-react';

function Results() {
  const { cnpj } = useParams();
  const [companies, setCompanies] = useState([]);
  const [lati, setLat] = useState(0);
  const [long, setlong] = useState(0);

  var adress = '';

  const searchcnpj = () => {
    const CardsCNPJ = document.querySelector('#card-body-text-dark');

    jQuery.ajax({
      url: `https://receitaws.com.br/v1/cnpj/${cnpj}`,
      dataType: 'jsonp',
      type: 'GET',
      success: function (data) {
        // passa os valores para o card
        const addPostsInDOM = async () => {
          adress = `${data.logradouro}, ${data.numero}, ${data.municipio}-${data.uf}`;

          var nomeCompany = data.nome;
          nomeCompany = nomeCompany.replace('/', '*');

          var cnpjCompany = data.cnpj;
          cnpjCompany = cnpjCompany.replace('/', '*')

          const postsTemplate =
            ` <strong><h1 className="card-title">${data.nome}</h1></strong>
              <h3 className="card-text">Cnpj: ${data.cnpj}</h3>
              <h3 className="card-text">Endereço: ${data.logradouro}</h3>
              <h3 className="card-text">Complemento: ${data.complemento}  Nº: ${data.numero}</h3>
              <h3 className="card-text">Bairro: ${data.bairro}</h3>
              <h3 className="card-text">Cidade: ${data.municipio}-${data.uf}</h3>
              <a href='/' class="btn btn-outline-succces" >Voltar</a>
              <a href='/SimpleMap/${nomeCompany}/${cnpjCompany}/${lati}/${long}' class="btn btn-outline-succces" >Ver no Mapa</a>`;
          CardsCNPJ.innerHTML = postsTemplate;
        };

        // add values on Localstorage
        if (CardsCNPJ != null) {
          var dadosCnpjs = {
            status: data.status,
            cnpj: data.cnpj,
            nome: data.nome,
            fantasia: data.fantasia,
            cep: data.cep,
            logradouro: data.logradouro,
            numero: data.numero,
            complemento: data.complemento,
            bairro: data.bairro,
            municipio: data.municipio,
            uf: data.uf,
          };

          let empresas = JSON.parse(localStorage
            .getItem('companies')) || []

          const updateLocalStorage = () => {
            //  se ja tem o mesmo valor dentro do localStorage, remover 
            const index = empresas.indexOf(dadosCnpjs)
            const existsInLocalStorage = (index !== -1);

            if (existsInLocalStorage) {
              empresas.splice(index, 1)
            } else {
              empresas.push(dadosCnpjs)
            };

            // insere no local starage
            localStorage.setItem('companies', JSON.stringify(empresas));
          }
          addPostsInDOM();
          setCompanies(CardsCNPJ);
          updateLocalStorage();
        };

        // localization on map
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: adress,
            key: process.env.REACT_APP_LOCALIZACAO_TOKEN
          }
        })
          .then(function (response) {
            // Log full response
            console.log(response);
            setLat(response.data.results[0].geometry.location.lat);
            setlong(response.data.results[0].geometry.location.lng);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
    });
  };

  function inputlati() {
    console.log(`A latitude é : ${lati}`);
    console.log(`A longitude é : ${long}`);
  };

  return (
    <div id="page-content" onLoad={searchcnpj}>
      <PageHeader
        title="Empresa encontrada"
      />
      {/* <button onClick={inputlati}>teste teste</button> */}
      <div className="page-results-maping">
        <main id="ResultsCards">
          <ResultsCard
            corpo_html={companies}
          />
          <br />
        </main>
      </div>
    </div >
  );
};

export default Results;


