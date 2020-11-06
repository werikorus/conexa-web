import React from 'react';
import './styles.css';

export interface Company {
  status: string,
  cnpj?: string,
  nome?: string,
  fantasia?: string,
  cep?: string,
  logradouro?: string,
  numero?: string,
  complemento?: string,
  bairro?: string,
  municipio?: string,
  uf?: string
};

interface ResultsCardItemProps {
  company: Company,
  lat?: number,
  long?: number;
};

const ResultsCardItem: React.FC<ResultsCardItemProps> = ({ company, lat, long }) => {
  var nomeCompany = company.nome;
  nomeCompany = nomeCompany.replace('/', '*');

  var cnpjCompany = company.cnpj;
  cnpjCompany = cnpjCompany.replace('/', '*');

  return (
    <form >
      <div className="card text-center" id="results-cnpj">
        <div className="card-body text-dark" id="card-body-text-dark">
          <strong><h1 className="card-title">{nomeCompany}</h1></strong>
          <h3 className="card-text">Cnpj: {cnpjCompany}</h3>
          <h3 className="card-text">Endereço: {company.logradouro}</h3>
          <h3 className="card-text">Complemento: {company.complemento}  Nº: {company.numero}</h3>
          <h3 className="card-text">Bairro: {company.bairro}</h3>
          <h3 className="card-text">Cidade: {company.municipio}-{company.uf}</h3>
          <a href='/' className="btn btn-outline-succces" >Voltar</a>
          <a href={`/SimpleMap/${nomeCompany}/${cnpjCompany}/${lat}/${long}`} className="btn btn-outline-succces" >Ver no Mapa</a>
        </div>
      </div >
      <br />
    </form >
  );
};

export default ResultsCardItem;
