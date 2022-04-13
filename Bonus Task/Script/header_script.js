let pr = document.getElementsByClassName("prices");
const prT = [];
for(let i = 0; i < pr.length; i++){
    prT[i] = pr[i].innerHTML;
}
function changeCurrency(){
    const v = document.getElementById("currency_select").value;
    let p = document.getElementsByClassName("prices");
    let cs = document.getElementsByClassName("currency_prices")
    let c = cs[0].innerHTML;
    if(v == "kz" && c[0] == "U"){
        for(let i = 0; i < p.length; i++){
            p[i].innerHTML = prT[i];
            cs[i].innerHTML = "KZT&nbsp";
        }
    }
    else if(v == "us" && c[0] == "K"){
        for(let i = 0; i < p.length; i++){
            p[i].innerHTML = (p[i].innerHTML / 436).toFixed(2   );
            cs[i].innerHTML = "USD&nbsp";
        }
    }
}