// Exrecice 1

// let nom = "Jean";
// let age = 30;

// console.log(nom);
// console.log(age);

// Exercice 2

let a = 10;
let b = 20;

let somme=a+b
console.log(somme);

let multi=a*b

console.log(multi);

// Exercice 3

// let nombre=prompt("Entrer un nombre")

// if (parseInt(nombre) > 10){
//     console.log("Plus grand que 10");
    
// }else{
//     console.log("Plus petit ou égal à 10");
    
// }

// Exercice 4

// let nombre = 76;
// if (parseInt(nombre)%2 ===0){
//     console.log(`Le nombre ${parseInt(nombre)} est paire`);
    
// }else{
//     console.log(`Le nombre ${parseInt(nombre)} est impaire`);
// }

// Exercice 5

// let age=prompt("Quel age avez-vous ?")

// if (parseInt(age)<18){
//     console.log(`Tu es mineur`)
    
// }else if ((parseInt(age)>=18) && (parseInt(age)<=65)){
//     console.log(`Tu es adulte`);
    
// }else if(parseInt(age)>65){
//     console.log(`Tu es senior`);
    
// }

// Exercice 6 
// let afficherCompteur = 0;


// for(let afficherCompteur=1; afficherCompteur < 11; afficherCompteur+=1) {
//     console.log(afficherCompteur);
    
// }

// Exercice 7

// let nombre=prompt("Donner un nombre")

// let compteur = 0;

// for(let compteur=1; compteur < 11; compteur+=1) {
//     console.log(`${nombre} x ${compteur} = ${nombre*compteur}`);
    
// }

// Exercice 8
// for (let i = 1; i <= 100; i++) {
//   console.log(`${i}`);
// }

// Exercice 9
const nombreAleatoire = Math.floor(Math.random() * 10) + 1;

// do{
// let devine= prompt("Devine le nombre entre 1 et 10")
  // Vérifier si l'entrée de l'utilisateur est un nombre valide
    // if (isNaN(parseInt(devine))) {
    //   alert("Veuillez entrer un nombre valide.");
    //   continue; // Passer à la prochaine itération de la boucle
    // }

//     if (parseInt(devine) !== nombreAleatoire) {
//       alert("Essaye encore !");
//     }
//   } while (parseInt(devine) !== nombreAleatoire);

//   alert("Bravo, c’est correct !");
//  let devine= prompt("Devine le nombre entre 1 et 10") 
// while (parseInt(devine) !== nombreAleatoire){
    // let devine= prompt("Devine le nombre entre 1 et 10")
    // if (parseInt(devine) !== nombreAleatoire) {
    //   alert("Essaye encore !");
    // }
// }




// Exercice 10
let afficherCompteur = 1;


for(let afficherCompteur=0; afficherCompteur < 51; afficherCompteur+=2) {
    console.log(afficherCompteur);
    
}