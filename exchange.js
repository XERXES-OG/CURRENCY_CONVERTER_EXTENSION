document.addEventListener('DOMContentLoaded', () =>{
const amount=document.getElementById('amount');
const currency=document.getElementById('currency');
const convert=document.getElementById('convert');
const result=document.getElementById('result');

const API_key="";
const apiURL="https://api.api-ninjas.com/v1/exchangerate?pair=USD_";
convert.addEventListener('click' , () => {
    console.log('hi')
    const amountTotal=amount.value;
    console.log('total',amountTotal)
    const currencyTotal=currency.value;
    const url=apiURL+currencyTotal;
    console.log('url',url)

    fetch(url,{
        header: {
         'X-API-KEY': API_key   
        }
    })
    .then(response => response.json())
    .then(data=> {
        const rate=data.exchage_rate;
        console.log('rate',rate)
        const resultp = amountTotal*rate;
        console.log('result', resultp)
        result.innerHTML = `${amountTotal} ${currencyTotal} =  ${resultp} USD`;

    })
    .catch(error =>{
        console.error('Request Failed:', error);
        result.innerHTML='An error occurred. Try Later.'

    })
})
})