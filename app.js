//console.log('Hello World!')

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
    //let sconto = prezzoBase * SCONTO_GIOVANI
    //let prezzo = prezzoBase - sconto