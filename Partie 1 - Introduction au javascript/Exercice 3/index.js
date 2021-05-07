let age;
 age = prompt("Quel est votre age ?","77");
 if(age >= 18 && age < 100)
 {
     alert("Vous êtes majeur");
 }
 else if ( age < 18 && age > 0)
 {
     alert("Vous êtes mineur");
 }
 else
 {
     alert("Erreur de saisie");
 }