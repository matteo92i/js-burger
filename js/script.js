var calcolaPrezzo = document.getElementById('calcolaPrezzo')

var sommaBurger = document.getElementById('sommaFinale');

calcolaPrezzo.addEventListener( 'click', function() {

    var risultatoFinale = 0;
    var checkSomma = document.getElementsByClassName('check-somma');
    var sconto = "matteopro";
    var codiceSconto = document.getElementById('sconto')
    for(var i =0; i < checkSomma.length; i++){
        if(checkSomma[i].checked){

            risultatoFinale += parseInt(checkSomma[i].value) 

        }
    }
    sommaBurger.innerHTML= + risultatoFinale + '£'
    
    if(codiceSconto.value === sconto){
    alert('il prezzo è stato scontato')
    sommaBurger.innerHTML=  parseInt(+risultatoFinale + -5 )+ '£'
}

})



    



