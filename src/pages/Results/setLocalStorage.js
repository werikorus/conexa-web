function setLocalData(dadoscnpj) {
  let empresas = JSON.parse(localStorage
    .getItem('companies')) || []

  //  se ja tem o mesmo valor dentro do localStorage, remover 
  const index = empresas.indexOf(dadoscnpj)
  const existsInLocalStorage = (index !== -1);

  if (existsInLocalStorage) {
    empresas.splice(index, 1)
  } else {
    empresas.push(dadoscnpj)
  };

  // insere no local starage
  localStorage.setItem('companies', JSON.stringify(empresas));

};