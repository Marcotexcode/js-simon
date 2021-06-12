

// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.




// // 1- CREARE UN ALERT CON NUMERI RANDOM
    var numRand = [];
    randomNumber(numRand, 5);
    

    alert('Hai 30 secondi per memorizzare i numeri dopo aver premuto ok ' + numRand + '.');


// FAR PARTIRE IL TIMER DOPO AVER CHIUSO L'ALERT
    
    setTimeout(insNumeri, 3000);

    
// INSERIRE 5 NUMERI UNO ALLA VOLTA TRAMITE PROMPT E INSERIRLI IN UN ARRAY

    function insNumeri() {

        var numUtente =[];
        
        var numInd = [];
       
        for (var i = 0; i < numRand.length; i ++) { 
            var numeri = parseInt(prompt('Inserisci i 5 numeri visti percedentemente'));
            numUtente.push(numeri);
          
            if (numUtente.includes(numRand[i])){
                numInd.push(numeri); 
                document.getElementById('vinto-perso').innerHTML = 'HAI VINTO';
                document.getElementById('num-indovinati').innerHTML = 'Hai indovinato ' + numInd + '.';
                
               
            } else {
                document.getElementById('vinto-perso').innerHTML = 'HAI PERSO';
                document.getElementById('num-indovinati').innerHTML = 'Hai indovinato solo ' + numInd + '.';
                alert('perso');
                break;
            }
            
        }        
        document.getElementById('numeri-pc').innerHTML = 'Numeri da indovinare ' +  numRand + '.' ;
     return numUtente;
    }
    
    






// // FUNZIONI

     function randomNumber(arr, nMax){

         while(arr.length < nMax){
             var numeroRandom = randomNumber(1,100);    // GENERARE UN NUMERO RANDOM DA-A
             if(!arr.includes(numeroRandom)){
                 arr.push(numeroRandom);
             }
         }

         function randomNumber(min,max) {
             return Math.floor(Math.random() * (max - min + 1) + min);
         }
     }


   




