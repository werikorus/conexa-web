import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ResultsCardMessageItem, { ResultsMessage } from '../../components/ResultsCard/index';
import ResultsCardItem, { Company } from '../../components/ResultsCardMaping';
import './result-styles.css';

function Historico() {
  const [companies, setCompanies] = useState([]);
  const [messages, setMessages] = useState([]);
  async function getvalues() {
    const storage = JSON.parse(localStorage.getItem('companies'));

    if (storage===null){
      var messageReturn = [{
        message: "Ainda não há históricos"
      }];
      setMessages(messageReturn);
    }else{
      setCompanies(storage);
    };

  };
  return (
    <div id="page-content" onLoad={getvalues}>
      <PageHeader
        title="Últimas pesquisas"
      />
      <div className="page-results-maping">
        <main id="ResultsCards">

          {/* if have not find the company, returns a message saying that not found */}
          {messages.map((message: ResultsMessage) => {
            return <ResultsCardMessageItem key={0} resultsMessage={message} />;
          })}
           <br />

          {/* if have find, then shows the campany's informations */}
          {companies.map((company: Company) => {
            return <ResultsCardItem key={0} company={company} lat={0} long={0} />;
          })}

          <Link to="/" id="button-back">Voltar</Link>
        </main>
        <br />
      </div>
    </div >
  );
};
export default Historico;
