const option = {
    method: "GET",
    mode: 'cors',
    cache: 'default'
}
fetch('https://api.coincap.io/v2/assets/bitcoin', option)
.then(response => {response.json()
    .then( data => console.log(data))
})
.catch(e => console.log('Deu Erro: '+ e,message));
