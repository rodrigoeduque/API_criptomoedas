//Inserir aqui a chave da API
var apikey = {
    key: 'e8ba6c58-c346-41c9-9f08-fecc89a07d54'
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
        apikey.key)
    .then((response) => {
        if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then((api) => {

        var texto = "";
        
        


        // Buscar 10 primeiras
        for (let i = 0; i < 10; i++) {

            //Show API information


            texto = texto + `
                   
            <div class="uk-child-width-1-2@s" uk-grid>
            <div>
                <div class="uk-dark uk-background-muted uk-padding">
                    <h3>${api.data[i].name}</h3>
                    <p>${api.data[i].symbol}</p>
                    <p>Rank: ${api.data[i].rank}
                </div>
            </div>
        </div>
        </div>  
        `;

            document.getElementById("coins").innerHTML = texto;

        }
    })
    .catch((error) => {
        console.error(error.message);
    });