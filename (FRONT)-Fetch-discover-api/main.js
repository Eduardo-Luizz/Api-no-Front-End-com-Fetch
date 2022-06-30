const url = "http://localhost:5500/api"

function getUsers() {
  fetch(url) // Batendo na url
    .then( response => response.json()) // Se sucesso .then e retorna resposta
    .then( data => renderApiResult.textContent = JSON.stringify(data)) // pegou o data q armazena os dados e pegou o id da dib html para mostrar no front (Convertido para JSON)
    .catch( error => console.error(error) );          // Se erro .catch e retorna erro
}

getUsers()