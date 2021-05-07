let firstNum, secondNum, product;
let regex = /^(-)?[0-9]+\.[0-9]+$/ // ^

firstNum = prompt('Choisir un premier nombre à virgule','Premier nombre à virgule');
secondNum = prompt('Choisir un dexième nombre à virgule','Premier nombre à virgule');

if(regex.test(firstNum) &&  regex.test(secondNum)) 
{
    firstNum = parseInt(firstNum);
    product = firstNum * secondNum ;
    alert(`Le résultat du produit est : ${product}`);
}
else
{
    alert("Les valeurs ne sont pas des nombres décimaux");
}
