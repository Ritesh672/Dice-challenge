

document.getElementById("button").addEventListener("click", function dice(){

    var num1 = Math.random () * 6;
    num1 = Math.floor(num1) + 1;

    document.getElementById("p-image").src = "images/dice1.html";
    if (num1 === 1)
    {
     document.getElementById("p-image").src = "images/dice1.html";
    }
    else if (num1 === 2){
        document.getElementById("p-image").src = "images/dice2.html";
    }
    else if (num1 === 3)
    {
        document.getElementById("p-image").src = "images/dice3.html";
    }
    else if (num1 === 4)
    {
        document.getElementById("p-image").src = "images/dice4.html";
    }
    else if (num1 === 5)
    {
        document.getElementById("p-image").src = "images/dice5.html";
    }
    else if (num === 6)
    {
        document.getElementById("p-image").src = "images/dice6.html";
    }
});



