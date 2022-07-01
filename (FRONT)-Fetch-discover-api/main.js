const url = "http://localhost:5500/api"

function getUsers() {
  fetch(url) // Batendo na url
    .then( response => response.json()) // Se sucesso .then e retorna resposta
    .then( data => renderApiResult.textContent = JSON.stringify(data)) // pegou o data q armazena os dados e pegou o id da dib html para mostrar no front (Convertido para JSON)
    .catch( error => console.error(error) );          // Se erro .catch e retorna erro
}

function getUser() {
  fetch(`${url}/16`) // Muda o id pra ver na tela
    .then( response => response.json())
    .then( data => {
      UserName.textContent = data.name;
      UserCity.textContent = data.city;
      userAvatar.src = data.avatar;
    } )
    .catch( error => console.error(error) );
}

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=utf-8"
    }
  }) // Está é a request
  .then(response => response.json())
  .then(data => alertApi.textContent = data)
  .catch( error => console.error(error) );
}

const newUser = {
  name: "Olivia Sars",
  avatar: "https://picsum.photos/200/300",
  city: "Rio do sul"
}

addUser(newUser)
getUsers()
getUser()

// 5,90 notas de 100 