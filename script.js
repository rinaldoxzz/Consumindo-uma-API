//Pega o meu botão.
const button = document.getElementById('update');

//Gera um número aleatorio de 1 a 100.
const numRandom = Math.floor(Math.random() * 100) + 1;

//Armazena a URL da API e concatena com o valor aleatorio gerado.
const url = `https://jsonplaceholder.typicode.com/posts/${numRandom}`

//Consome a API no metodo GET para obter os dados
fetch(url)

    //Converte a resposta da API em  JSON
    .then((response) => response.json())

    //Preenche os dados do formulario com a resposta recebida da API
    .then((dados) => {
        document.getElementById('userId').value = dados.userId;
        document.getElementById('id').value = dados.id;
        document.getElementById('title').value = dados.title;
        document.getElementById('body').value = dados.body;
    });

//Cria uma função onlick no meu botão.
button.addEventListener('click', (event) => {
    event.preventDefault();

    //Armazena os valores atuais dos campos do formulário.
    const userId = document.getElementById('userId').value;
    const id = document.getElementById('id').value;
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    //Consome a PAI no metodo PUT para atualizar os dados.
    fetch(`https://jsonplaceholder.typicode.com/posts/${numRandom}`, {
        method: 'PUT',
        body: JSON.stringify({

            //Envia os dados atuais do formulario armazenados nas variaveis para a API
            id: id,
            title: title,
            body: body,
            userId: userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        //Converte os dados para tipo JSON
        .then((response) => response.json())

        //Exibe no console os dados atualizados
        .then((json) => console.log(json));
});

