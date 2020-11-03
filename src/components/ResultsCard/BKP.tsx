import React from 'react';
import './styles.css';

interface ResultsCardProps {
  corpo_html: Element;
};

const ResultsCard: React.FC<ResultsCardProps> = (props) => {
  // { retorna os resultados em elementos HTML }
  return (
    <div className="card text-center" id="results-cnpj" >
      <div className="overflow">
        <div className="card-body text-dark" id="card-body-text-dark">
          <strong><h1 className="card-title">Aguarde...</h1></strong>
        </div>
      </div>
    </div >
  );
};

export default ResultsCard;
