function addDOM() {
  var nomeCompany = '';
  var cnpjCompany = '';
  var companies = [];

  // var nomeCompany = dados.nome;
  // nomeCompany = nomeCompany.replace('/', '*');

  // var cnpjCompany = dados.cnpj;
  // cnpjCompany = cnpjCompany.replace('/', '*');

  const CardsCNPJ = document.querySelector('#card-body-text-dark');

  const postsTemplate =
    `<strong><h1 className="card-title">${'nomeCompany'}</h1></strong>
   <h3 className="card-text">Cnpj: ${'cnpjCompany'}</h3>
   <h3 className="card-text">Endereço: ${'dados.logradouro'}</h3>
   <h3 className="card-text">Complemento: ${'dados.complemento'}  Nº: ${'data.numero'}</h3>
   <h3 className="card-text">Bairro: ${'dados.bairro'}</h3>
   <h3 className="card-text">Cidade: ${'dados.municipio'}-${'dados.uf'}</h3>
   <a href='/' class="btn btn-outline-succces" >Voltar</a>
   <a href='/SimpleMap/${'nomeCompany'}/${'cnpjCompany'}/${'dados.lati'}/${'dados.long'}' class="btn btn-outline-succces" >Ver no Mapa</a>`;
  CardsCNPJ.innerHTML = postsTemplate;
  companies = CardsCNPJ;
  return companies;
};