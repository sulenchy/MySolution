( function() {
    const form = document.querySelector('#search-form');
    const toSelect = document.querySelector('#toSelect');
    const fromSelect = document.querySelector('#fromSelect');
    const fromUnit = document.querySelector('#fromUnit');
    let searchedForText;
    const toUnit = document.querySelector('#toUnit');


    const query = `${fromSelect}_${toSelect}`;

    form.addEventListener('convert', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;

        fetch(`https://free.currencyconverterapi.com/api/v5/currencies`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem')
                }

                response.json().then( data => {
                    console.log(data)
                })
            })            
            .catch(err => {
                console.log(err);
            });

        
        const getCurrencies = (data) => {
            console.log(`data gotten`);
            // let htmlContent = '';
            // //const data = JSON.parse(this.responseText);

            // if (data.articles && data.articles.length > 1) {
            //     htmlContent = '<ul>' + data.articles.map(article =>
            //         `<li class="article">
            //         <h2><a href="${article.url}">${article.title}</a></h2>
            //         <p>${article.description}</p></li>`
            //     ).join('') + '</ul>';
            // } else {
            //     htmlContent = '<div class="error-no-articles">No articles available</div>';
            // }
            // responseContainer.insertAdjacentHTML('beforeend', htmlContent);
        }
    });
})();

