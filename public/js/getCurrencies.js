// const convertCurrency = (frmVar, toVar) => {
//     const query = `${frmVar}_${toVar}`;
//     fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=${query}&compact=ultra`)
//         .then(res => res.json())
//         .catch(error => console.error('error is', error))
//         .then(data => {
//             console.log(data);
//         });
// }

// const getCurrencies = () => {
//     fetch(`https://free.currencyconverterapi.com/api/v5/currencies`)
//         .then(res => res.json())
//         .catch(error => console.error('error is', error))
//         .then(data => {
//             let arr = [];
//             for (let cur of Object.keys(data.results)) {
//                 arr.push(data.results[cur].id);
//             }
//             //console.log(`List of Currencies : ${arr.sort()}`);
//             return arr.sort();
//         });
// }

// const getCurr = getCurrencies();

// let fromSelect = document.getElementById("fromSelect");
// let toSelect = document.getElementById("toSelect");
// let count = fromSelect.options.length;
// let item = document.createElement("option");
// for (let element of getCurr){
//     item.text = element;
//     fromSelect.options.add(item, count);
//     toSelect.options.add(item, count);
// }    


// const populateSelectInput = (getCurr) => {
    
   
// }


// export default {convertCurrency,getCurrencies,populateSelectInput};