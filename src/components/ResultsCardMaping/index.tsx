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
  company: Company;
};

// function excluirHistorico(){
//   localStorage.removeItem('companies')
// }

const cardDOM = document.querySelector('#card-body-text-dark');

const ResultsCardItem: React.FC<ResultsCardItemProps> = ({ company }) => {
  return (
    <form >
      <div className="card text-center" id="results-cnpj">
        <div className="card-body text-dark" id="card-body-text-dark">
          <strong><h1 className="card-title">{company.nome}</h1></strong>
          <h3 className="card-text">Cnpj: {company.cnpj}</h3>
          <h3 className="card-text">Cidade: {company.municipio}-{company.uf}</h3>
          <a href={`/SimpleMap/${company.nome}/${company.cnpj}/${company.cep}`} className="btn btn-outline-succces" >Ver no Mapa</a>
          <a className="btn btn-outline-succces" >Excluir</a>
        </div>
      </div >
      <br />
    </form>
  );
};

export default ResultsCardItem;
