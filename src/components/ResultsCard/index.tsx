import React from 'react';
import './styles.css';

export interface ResultsMessage {
  message: string;
};

interface ResultsMessageItemProps {
  resultsMessage: ResultsMessage;
};

const ResultsCardMessageItem: React.FC<ResultsMessageItemProps> = ({ resultsMessage }) => {
  console.log(resultsMessage.message);

  // { retorna os resultados em elementos HTML }
  return (
    <div className="card text-center" id="results-cnpj" >
      <div className="overflow">
        <div className="card-body text-dark" id="card-body-text-dark">
          <strong><h1 className="card-title">{resultsMessage.message}.</h1></strong>
          {/* <a href='/' className="btn btn-outline-succces" >OK</a> */}
        </div>
      </div>
    </div >
  );
};

export default ResultsCardMessageItem;
