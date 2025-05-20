// // Exercice 1 : Déclaration et modification de variables

// let nom = "Jean";
// let age = 25;

// age = 30;

// console.log(`Nom : ${nom}`); // Affiche "Jean"
// console.log(`Âge : ${age}`); // Affiche 30

// // --------------------------------------------------
// // Exercice 2 : Opérations mathématiques

// let a = 10;
// let b = 20;

// let somme = a + b;
// console.log(`Somme : ${somme}`); // Affiche 30

// let produit = a * b;
// console.log(`Produit : ${produit}`); // Affiche 200

// // --------------------------------------------------
// // Exercice 3 : Conditions de base

// let nb = parseInt(prompt("Entrez un nombre :"));

// if (nb > 10) {
//   console.log("Plus grand que 10");
// } else {
//   console.log("Plus petit ou égal à 10");
// }

// // --------------------------------------------------
// // Exercice 4 : Pair ou impair

// let nombre = 7; // Remplace 7 par un chiffre de ton choix

// if (nombre % 2 === 0) {
//   console.log(nombre + " est pair");
// } else {
//   console.log(nombre + " est impair");
// }

// // --------------------------------------------------
// // Exercice 5 : Vérification d’âge

// let ageCheck = parseInt(prompt("Quel est ton âge ?"));

// if (ageCheck < 18) {
//   console.log("Tu es mineur");
// } else if (ageCheck >= 18 && ageCheck <= 65) {
//   console.log("Tu es adulte");
// } else {
//   console.log("Tu es senior");
// }

// // --------------------------------------------------
// // Exercice 6 : Boucle for

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // --------------------------------------------------
// // Exercice 7 : Table de multiplication

// let table = parseInt(prompt("Entrez un nombre :"));

// for (let i = 1; i <= 10; i++) {
//   console.log(`${table} x ${i} = ${table * i}`);
// }

// // --------------------------------------------------
// // Exercice 8 : Somme des nombres

// let total = 0;

// for (let i = 1; i <= 100; i++) {
//     total += i;
// }

// console.log(`La somme des nombres de 1 à 100 est : ${total}`);

// // --------------------------------------------------
// // Exercice 9 : Boucle while

// let correct = false;
// let solution = Math.floor(Math.random() * 10) + 1;

// while (!correct) {
//   let tentative = parseInt(prompt("Devine un nombre entre 1 et 10 :"));

//   if (tentative === solution) {
//     console.log("Bravo, c'est correct !");
//     correct = true;
//   } else {
//     console.log("Essaye encore");
//   }
// }

// // --------------------------------------------------
// // Exercice 10 : Liste des nombres pairs

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// // --------------------------------------------------
// // Exercice 11 : Compte à rebours

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// console.log("C'est terminé !");

// // --------------------------------------------------
// // Exercice 12 : Mini-calculatrice

// let nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
// let nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));
// let operation = prompt("Entrez l'opération (+, -, *, /) :");

// if (operation === "+") {
//   console.log(`"Résultat : ${nombre1 + nombre2}`);
// } else if (operation === "-") {
//   console.log(`"Résultat : ${nombre1 - nombre2}`);
// } else if (operation === "*") {
//   console.log(`"Résultat : ${nombre1 * nombre2}`);
// } else if (operation === "/") {
//   if (nombre2 !== 0) {
//     console.log(`Résultat : ${nombre1 / nombre2}`);
//   } else {
//     console.log("Division par zéro impossible !");
//   }
// } else {
//   console.log("Opération non valide");
// }

// // --------------------------------------------------
// // Exercice 13 : Trouver le plus grand nombre
// // Partie 1 : Avec un tableau prédéfini

// // let nombres = [12, 45, 3, 22, 34];
// // let max = nombres[0];

// // for (let i = 1; i < nombres.length; i++) {
// //   if (nombres[i] > max) {
// //     max = nombres[i];
// //   }
// // }

// // console.log(`Le plus grand nombre est : ${max}`);

// // Bonus : Avec 50 nombres aléatoires

// // let nombres = [];
// // for (let i = 0; i < 50; i++) {
// //   nombres.push(Math.floor(Math.random() * 100)); // Nombres aléatoires entre 0 et 99
// // }

// // let max = nombres[0];
// // for (let i = 1; i < nombres.length; i++) {
// //   if (nombres[i] > max) {
// //     max = nombres[i];
// //   }
// // }

// // console.log(`Tableau : ${nombres}`);
// // console.log(`Le plus grand nombre est : ${max}`);

// // Exercice 15:
let etudiants = [
  {nom : "Julie", note : 12},
  {nom : "Pierre", note : 8},
  {nom : "Bob", note : 18}
];

function trouverMeilleurEtudiant(liste) {
  let etudiant = liste[0];
  for(let i = 1 ; i < liste.length ; i++) {
    if(liste[i].note > etudiant.note) {
      etudiant = liste[i];
    }
  }
  return etudiant;
}

console.log(trouverMeilleurEtudiant(etudiants));


function trouverMeilleurEtudiantReduce(liste) {
  return liste.reduce((previous, current) => (current.note > previous.note) ? current : previous);
}

console.log(trouverMeilleurEtudiantReduce(etudiants));

// Exercice 16 :
let mots = ["chat", "éléphant", "oiseau"];

function motLePlusLong(liste) {
  let mot = "";
  for(let i = 0 ; i < liste.length ; i++) {
    if(liste[i].length > mot.length) {
      mot = liste[i];
    }
  }
  return mot;
}

console.log(motLePlusLong(mots));

function motLePlusLongReduce(liste) {
  return liste.reduce((previous, current) => (current.length > previous.length) ? current : previous);
}

console.log(motLePlusLongReduce(mots));