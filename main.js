const chilometriDaPercorrere=prompt("Inserire chilometri da percorrere");
console.log(chilometriDaPercorrere);

const etaPasseggero=prompt("inserire età passeggero");
console.log(etaPasseggero);

let prezzoPerBiglietto=chilometriDaPercorrere*0.21;
console.log(prezzoPerBiglietto)


if(etaPasseggero<18){
    let sconto=prezzoPerBiglietto*0.2;
    prezzoFinaleTotale=prezzoPerBiglietto-sconto;
    prezzoFinale=prezzoFinaleTotale.toFixed(2);
    console.log(prezzoFinaleTotale)
}else if(etaPasseggero>65){
    let sconto=prezzoPerBiglietto*0.4;
    prezzoFinaleTotale=prezzoPerBiglietto-sconto;
    prezzoFinale=prezzoFinaleTotale.toFixed(2);
    console.log(prezzoFinaleTotale)
}else{
    prezzoFinale=prezzoPerBiglietto.toFixed(2);
    console.log(prezzoPerBiglietto)
}

document.getElementById("chilometriDaPercorrere").innerHTML= chilometriDaPercorrere;
document.getElementById("etaPasseggero").innerHTML= etaPasseggero;
document.getElementById("prezzoFinale").innerHTML= prezzoFinale;

