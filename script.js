
// // Exercice 1 : Déclaration et modification de variables

// let nom = "Jean";
// let age = 30;

// console.log(nom);
// console.log(age);

// // --------------------------------------------------
// // Exercice 2 : Opérations mathématiques

// let a = 10;
// let b = 20;

// let somme = a + b;
// console.log(somme);

// let multi=a*b

// console.log(multi);

// // --------------------------------------------------
// // Exercice 3 : Conditions de base

// let nombre=prompt("Entrez un nombre")

// if (parseInt(nombre) > 10){
//     console.log("Plus grand que 10");
// }else{
//     console.log("Plus petit ou égal à 10");
// }

// // --------------------------------------------------
// // Exercice 4 : Pair ou impair

// let nombre = 76;
// if (parseInt(nombre)%2 ===0){
//     console.log(`Le nombre ${parseInt(nombre)} est paire`);
// }else{
//     console.log(`Le nombre ${parseInt(nombre)} est impaire`);
// }

// // --------------------------------------------------
// // Exercice 5 : Vérification d’âge

// let age=prompt("Quel age avez-vous ?")

// if (parseInt(age)<18){
//     console.log(`Tu es mineur`)

// }else if ((parseInt(age)>=18) && (parseInt(age)<=65)){
//     console.log(`Tu es adulte`);

// }else if(parseInt(age)>65){
//     console.log(`Tu es senior`);

// }

// // --------------------------------------------------
// // Exercice 6 : Boucle for
// let afficherCompteur = 0;


// for(let afficherCompteur=1; afficherCompteur < 11; afficherCompteur+=1) {
//     console.log(afficherCompteur);

// }

// // --------------------------------------------------
// // Exercice 7 : Table de multiplication
// // --------------------------------------------------

// let nombre=prompt("Donner un nombre")

// let compteur = 0;

// for(let compteur=1; compteur < 11; compteur+=1) {
//     console.log(`${nombre} x ${compteur} = ${nombre*compteur}`);

// }

// // --------------------------------------------------
// // Exercice 8 : Somme des nombres
// // --------------------------------------------------
// let somme = 0;

// for (let compteur=0; compteur <= 100; compteur++) { 
//   somme += compteur; 
// //   += addition + affectation
// console.log(somme);
// }


// // --------------------------------------------------
// // Exercice 9 : Boucle while
// // --------------------------------------------------

// let nombre;
// let nombreAleatoire = Math.floor(Math.random() * 10) + 1;
// console.log(nombreAleatoire);

// while (nombre !== nombreAleatoire) {
//     nombre = parseInt(prompt(`Devine un nombre entre 1 et 10`))
//     if (nombre === nombreAleatoire) {
//         console.log(`Bravo`);

//     } else {
//         console.log(`Essaye encore`);
//     }

// }

// console.log(nombre);

// // --------------------------------------------------
// // Exercice 10 : Liste des nombres pairs
// // --------------------------------------------------
// let afficherCompteur = 1;

// for(let afficherCompteur=0; afficherCompteur < 51; afficherCompteur+=2) {
//     console.log(afficherCompteur);
// }

// // --------------------------------------------------
// // Exercice 11 : Compte à rebours
// // --------------------------------------------------

let i = 10;

for (let i = 10; i >= 0; i--) {
    console.log(i);
    if (i === 0) {
        console.log(`c'est terminé`);
    }
}

// Exercice 12

// let firstNumber = parseInt(prompt("Donner un premier nombre"))
// console.log(firstNumber);
// let secondNumber = parseInt(prompt("Donner un second nombre"))
// console.log(secondNumber);
// let operation = prompt("Donner une opération")
// console.log(operation);

// switch (operation) {
//   case "+":
//     console.log(`${firstNumber+secondNumber}`);
//     break;
//   case "-":
//     console.log(`${firstNumber-secondNumber}`);
//     break;
//   case "*":
//     console.log(`${firstNumber*secondNumber}`);
//     break;
//   case "/":
//     console.log(`${firstNumber/secondNumber}`);
//     break
// }

// Exercice 13

const table = [12, 45, 3, 22, 34];
// let maxNumber = Math.max(...table);

console.log(Math.max(...table));
