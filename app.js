//console.log('Hello World!')

const tdKm = document.getElementById('km-viaggio');
const tdPrezzo =document.getElementById('prezzo-base');
const tdSconto =document.getElementById('sconto');
const tdTotale =document.getElementById('prezzo-finito');
console.log(tdKm, tdPrezzo, tdSconto, tdTotale);


let kmViaggio = parseFloat(prompt ('Quanti km devi percorrere?'));
let età = parseInt (prompt('Quanti anni hai?'));
console.log(kmViaggio, età);

const COSTO_KM = 0.21;
const SCONTO_GIOVANI = 0.2;
const SCONTO_ANZIANI = 0.4;

if( isNaN(kmViaggio) & isNaN(età) ) {

    console.error (' I dati inseriti sono sbagliati')

} else {

    console.log('Dati corretti')

    let prezzoBase = kmViaggio * COSTO_KM;
    console.log(prezzoBase);

    let sconto = 0;
}

    if(età < 18) {
        //giovani
        let sconto = prezzoBase * SCONTO_GIOVANI;
        console.log(sconto);


    } else if(età > 65){
       //anziani 
       let sconto = prezzoBase * SCONTO_ANZIANI;
       console.log(sconto);
    }

    // sconto
    let sconto = prezzoBase * SCONTO_GIOVANI;
    console.log(sconto);
    let prezzo = prezzoBase - sconto;
    console.log(prezzo);

    let prezzoFinito = prezzoBase - sconto;
    console.log(prezzoFinito);

    tdKm.innerHTML = `${kmViaggio}`;
    tdPrezzo.innerHTML = `${prezzoBase.toFixed(2)}`;
    tdSconto.innerHTML = `${sconto.toFixed(2)}`;
    tdTotale.innerHTML = `${prezzoFinito.toFixed(2)}`;

    console.log(sconto, tdSconto.innerHTML);
    console.log(prezzoFinito, tdTotale.innerHTML);
    console.log(prezzoBase, tdPrezzo.innerHTML);
    console.log(kmViaggio, tdKm.innerHTML);