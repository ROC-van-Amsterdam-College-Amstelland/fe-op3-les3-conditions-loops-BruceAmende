//javascript code

var myOperator = "/";
var myNumber1 = prompt("Geef een getal");
var myNumber2 = prompt("Geef nog een getal");
var resultaat;



if(myOperator == "*"){

    resultaat = Number (myNumber1) * Number (myNumber2);
    document.getElementById("tekst").innerHTML = resultaat;
}





else if(myOperator == "/"){

    resultaat = myNumber1 / myNumber2;
    document.getElementById("tekst").innerHTML = resultaat;
   


}