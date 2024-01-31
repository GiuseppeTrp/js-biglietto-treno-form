


  
 





// dichiaro le variabili di input 

const inputKm = document.getElementById("km");

const inputAge = document.getElementById("age");
const inputName = document.getElementById("fullName");

const inputGenerate = document.getElementById("generate");
 
let cpCode = Math.floor(Math.random() * 10000 + 21);



let cartiage =  Math.floor(Math.random() * 10000);

// calcolo del przzo per km
basePrice = inputKm.value * 0.21;





// attivo l'input del button tramite la funzione
inputGenerate.addEventListener("click",
    function() {
      // se il valore di km è diverso da < 1 allora eseguo
      if( ! (inputKm.value < 1) ) {
           basePrice = inputKm.value * 0.21;               
         } //se l'età è uguale a ".." eseguo ed applico lo sconto del 20%
          if ( inputAge.value == "underage"){
        document.getElementById("price").innerHTML = (basePrice - (( basePrice * 20) / 100)).toFixed(2) + "€";
        document.getElementById("cpCode").innerHTML =  cpCode;
        document.getElementById("cartiage").innerHTML =  cartiage ;
        document.getElementById("rebate").innerHTML =  "20% off on <br> your ticket"  ;
        document.getElementById("name").innerHTML =  inputName.value;
                     //se l'età è uguale a ".." eseguo ed applico lo sconto del 40%
              } else if(inputAge.value == "over65"){
                document.getElementById("price").innerHTML =  (basePrice - (( basePrice * 40) / 100)).toFixed(2) + "€";
                document.getElementById("cpCode").innerHTML =  cpCode;
                document.getElementById("cartiage").innerHTML =  cartiage ;
                document.getElementById("rebate").innerHTML =  "40% off on <br> your ticket"  ;
                document.getElementById("name").innerHTML =  inputName.value;
        
              }
// Altrimenti applica i value degli input precedentemente creati  senza applicare lo sconto
      else {  
            document.getElementById("price").innerHTML =  basePrice.toFixed(2) + "€";
            document.getElementById("cpCode").innerHTML =  cpCode;
            document.getElementById("cartiage").innerHTML =  cartiage ;
            document.getElementById("rebate").innerHTML =  "No-Rebate" ;
            document.getElementById("name").innerHTML =  inputName.value;

      }









    });
    

    console.log( basePrice);
    




  

  
 










