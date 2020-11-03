import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ResultsCardItem, { Company } from '../../components/ResultsCardMaping';
import './result-styles.css';

function Historico() {
  const [companies, setCompanies] = useState([]);
  async function getvalues() {
    const storage = JSON.parse(localStorage.getItem('companies'));
    setCompanies(storage);
  };
  return (
    <div id="page-content" onLoad={getvalues}>
      <PageHeader
        title="Últimas pesquisas"
      />
      <div className="page-results-maping">
        <main id="ResultsCards">
          {companies.map((company: Company) => {
            return <ResultsCardItem key={0} company={company} />;
          })};
        </main>
        <br />
        <Link to="/" id="button-back">Voltar</Link>
      </div>
    </div >
  );
};
export default Historico;