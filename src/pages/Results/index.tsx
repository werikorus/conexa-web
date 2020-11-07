import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ResultsCardMessageItem, { ResultsMessage } from '../../components/ResultsCard/index';
import ResultsCardItem, { Company } from '../../components/ResultsCardMaping';
import jQuery from 'jquery';
import apiGeocode from '../../services/apiGeocode';
import './result-styles.css';
import './setLocalStorage.js';


function Results() {
  var { cnpj }: { cnpj: string } = useParams();
  const [companies, setCompanies] = useState([]);
  const [messages, setMessages] = useState([]);
  const [lati, setLat] = useState<number>();
  const [long, setlong] = useState<number>();
  var [dadosResponse, setDadosResponse] = useState<object>();
  var adress = '';

  var statusResponse = '';

  const searchcnpj = useCallback(() => {
    jQuery.ajax({
      url: `https://receitaws.com.br/v1/cnpj/${cnpj}`,
      dataType: 'jsonp',
      type: 'GET',
      success: function (data) {
        // set adress for localization api
        var montaadress = `${data.logradouro}, ${data.numero}, ${data.bairro}, ${data.municipio}-${data.uf}, ${data.cep}`;
        adress = montaadress;

        statusResponse = `${data.status}`;

        // if had found the company, then search geocode information
        if (data.status == "OK") {
          // searching on map
          searchlocalization(adress);

          //set response atributes for ResultCard
          var dadosCnpjs = [{
            status: data.status,
            message: data.message,
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
            latitude: lati,
            longitude: long,
          }];

          setDadosResponse(dadosCnpjs);
          setCompanies(dadosCnpjs);


          var localinfo = {
            status: data.status,
            message: data.message,
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
            latitude: lati,
            longitude: long
          };

          setLocalData(localinfo);
        } else {
          var messageReturn = [{
            message: data.message,
          }];
          setMessages(messageReturn);
        }
      },
      error: function (error) {
        console.log(error);
      }
    });
  }, [lati, long]);

  function searchlocalization(adr: string) {
    // localization on map
    apiGeocode.get('json', {
      params: {
        address: adr,
        key: 'AIzaSyC0qnQyANXBJhyPHYCKKcOqwvOv0CJz10Q'
      }
    })
      .then(function (response) {
        // Log full response and set geocode
        console.log(response);
        setLat(response.data.results[0].geometry.location.lat);
        setlong(response.data.results[0].geometry.location.lng);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  function setLocalData(dados:object) {
    let empresas = JSON.parse(localStorage
      .getItem('companies')) || []

    //  se ja tem o mesmo valor dentro do localStorage, remover
    const index = empresas.indexOf(dados)
    const existsInLocalStorage = (index !== -1);

    if (existsInLocalStorage) {
      empresas.splice(index, 1)
    } else {
      empresas.push(dados)
    };

    // insere no local starage
    localStorage.setItem('companies', JSON.stringify(empresas));
  };

  return (
    <div id="page-content" onLoad={searchcnpj}>
      <PageHeader
        title="Resultado da busca"
      />
      <div className="page-results-maping">
        <main id="ResultsCards">
          <main id="ResultsCards">
            {/* if have not find the company, returns a message saying that not found */}
            {messages.map((message: ResultsMessage) => {
              return <ResultsCardMessageItem key={0} resultsMessage={message} />;
            })}

            {/* if have find, then shows the campany's informations */}
            {companies.map((company: Company) => {
              return <ResultsCardItem key={0} company={company} lat={lati} long={long} />;
            })}
          </main>
          <br />
        </main>
      </div>
    </div >
  );
};

export default Results;


