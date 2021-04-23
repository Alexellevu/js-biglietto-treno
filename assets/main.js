//chiediamo all' utente i km da fare e l 'età
var numKm = parseInt(prompt('inserisci i km del viaggio'));
console.log(numKm);
var età = parseInt(prompt('inserisci la tua età'));
console.log(età);

//calcoliamo il prezzo moltiplicando i km inseriti dall'utente per 0,21.
var prezzo = numKm * 0.21;
console.log(prezzo);


//variabili con lo sconto per i minorenni
var sconto_min = ((prezzo*20)/100);
var prezzo_min = prezzo - sconto_min;
console.log(prezzo_min);

//variabili con lo sconto per gli anziani
var sconto_anziani = ((prezzo*40)/100);
var prezzo_anziani = prezzo - sconto_anziani;
console.log(prezzo_anziani);

//if ed else per stabilire i prezzi in base alle fasce d'età
if(età < 18){
    console.log(prezzo_min);
    document.getElementById('prezzo_finale').innerHTML = ("il costo del tuo viaggio sarà " + prezzo_min.toFixed(2) + " euro");
}else if(età > 65){
    console.log(prezzo_anziani);
    document.getElementById('prezzo_finale').innerHTML = ("il costo del tuo viaggio sarà " + prezzo_anziani.toFixed(2) + " euro");
}
    else{console.log(prezzo);
        document.getElementById('prezzo_finale').innerHTML = ("il costo del tuo viaggio sarà " + prezzo.toFixed(2) + " euro");
    }

    


