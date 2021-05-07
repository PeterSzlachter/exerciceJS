var number = 15;
var guessNum;

do 
{
    guessNum = prompt('Devine le nombre', '');
    if(guessNum > number)
    {
        alert("Plus petit");
    }
    else if(guessNum < number)
    {
        alert("Plus grand");
    }
}
while(number != guessNum)

alert("Vous avez trouvé");
