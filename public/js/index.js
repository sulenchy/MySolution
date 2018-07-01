$(document).ready(function(){
    $('select').formSelect();
  
    fetch('https://free.currencyconverterapi.com/api/v5/currencies')
      .then(response => {
        if (response.status !== 200) {
          console.log('it looks like their was an error fetching list of currencies')
        } else {
          response.json().then(data => {
            console.log(data)
            Object.keys(data.results).sort().forEach(currencyKey => {
              let currencyData = data.results[currencyKey]
              // console.log(currencyData)
              $('.currencies').append(`<option value="${currencyKey}">${currencyKey}</option>`)
              // console.log(data.results[currencyKey])
              $('select').formSelect();
            })
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
    
    $('#to, #from, #amount').change(convert)
  });
  
  
  let convert = () => {
    let fromVal = $('#from').val()
    let toVal = $('#to').val()
    let amountVal = $('#amount').val()
  
    if (fromVal && toVal) {
      if (fromVal.length > 0 && toVal.length > 0) {
        if (amountVal < 1) {
          amountVal = 1
        }
  
        fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=${fromVal}_${toVal}`).then(response => {
          if (response.status !== 200) {
            console.log('there was an error fetching conversion rates')
          }
  
          response.json().then(data => {
            let rate = data.results[`${fromVal}_${toVal}`].val
            $('#converted').val(`${data.results[`${fromVal}_${toVal}`].to} ${Math.floor(rate * (amountVal || 1)).toLocaleString("en-US", {minimumFractionDigits: 2})}`)
          })
        })
      }
    }
  }