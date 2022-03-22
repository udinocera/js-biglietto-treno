let chilometriDaPercorrere=prompt("Inserire chilometri da percorrere");
chilometriDaPercorrere=parseInt(chilometriDaPercorrere);

let etaPasseggero=prompt("inserire età passeggero");
etaPasseggero=parseInt(etaPasseggero);

let prezzoPerBiglietto=chilometriDaPercorrere*0.21;
let sconto;
let prezzoFinale;
let prezzoFinaleIntero;




if(etaPasseggero<18){
    sconto=prezzoPerBiglietto*0.21;
    prezzoFinaleIntero=prezzoPerBiglietto-sconto;
    prezzoFinale=prezzoFinaleIntero.toFixed(2);
}else if(etaPasseggero>65){
    sconto=prezzoPerBiglietto*0.40;
    prezzoFinaleIntero=prezzoPerBiglietto-sconto;
    prezzoFinale=prezzoFinaleIntero.toFixed(2);
}else{
    prezzoFinale=prezzoPerBiglietto.toFixed(2);
}

document.getElementById("chilometriDaPercorrere").innerHTML= chilometriDaPercorrere;
document.getElementById("etaPasseggero").innerHTML= etaPasseggero;
document.getElementById("prezzoFinale").innerHTML= prezzoFinale;

