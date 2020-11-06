import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ResultsCard from '../../components/ResultsCard/BKP';
import jQuery from 'jquery';
import apiGeocode from '../../services/apiGeocode';
import './result-styles.css';
import 'google-map-react';
import './setLocalStorage.js';
import './addElementDOM.js';
import ResultsCardItem, { Company } from '../../components/ResultsCardMaping';

function Results() {
  var { cnpj }: { cnpj: string } = useParams();
  // var [companies, setCompanies] = useState<Element>();
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState<Element>();
  var [lati, setLat] = useState<number>();
  var [long, setlong] = useState<number>();
  var [dadosResponse, setDadosResponse] = useState<object>();
  var adress = '';

  var statusResponse = '';

  const searchcnpj = useCallback(() => {
    const AlertCard = document.querySelector('#card-body-text-dark');

    jQuery.ajax({
      url: `https://receitaws.com.br/v1/cnpj/${cnpj}`,
      dataType: 'jsonp',
      type: 'GET',
      success: function (data) {
        // set adress for localization api
        var montaadress = `${data.logradouro}, ${data.numero}, ${data.bairro}, ${data.municipio}-${data.uf}`;
        adress = montaadress;

        statusResponse = `${data.status}`;

        // if had found the company, then search geocode information
        if (data.status == "OK") {
          // searching on map
          searchlocalization(adress);

          //set response atributes for ResultCard
          var dadosCnpjs = [{
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
            latitude: lati,
            longitude: long
          }];
          // setDadosResponse(dadosCnpjs);
          setCompanies(dadosCnpjs)
        } else {
          const template =
            `<strong><h1 className="card-title">${data.message}</h1></strong>
            <a href='/' class="btn btn-outline-succces" >Voltar</a>`;
          AlertCard.innerHTML = template;
          setError(AlertCard);
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
  return (
    <div id="page-content" onLoad={searchcnpj}>
      <PageHeader
        title="Resultado da busca"
      />
      <div className="page-results-maping">
        <main id="ResultsCards">
          <main id="ResultsCards">
            {/* <ResultsCard
              corpo_html={error}
            /> */}
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


