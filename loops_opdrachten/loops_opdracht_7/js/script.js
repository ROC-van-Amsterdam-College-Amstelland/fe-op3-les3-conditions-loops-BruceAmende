//javascript code


for(var teller = 1 ; teller <= 100 ; teller+=1 ){

    if(teller % 3 == 0 && teller % 5 == 0) {
        document.getElementById("getal").innerHTML += "<strong>VET COOL</strong><br>";

        



    }

    

   
  

    if(teller % 3 == 0){

        document.getElementById("getal").innerHTML += "<strong>VET</strong><br>";


    }

   else if(teller % 5 == 0){

        document.getElementById("getal").innerHTML += "<strong>COOL</strong><br>";


    }




    else{

        document.getElementById("getal").innerHTML += teller + "<br>";

        
    }
    

}