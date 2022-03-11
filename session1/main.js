const Fichier = require('./file.js')
const FichierJson = require('./jsonfile.js')

// Partie 1 : Lecture simple d'un fichier
/*let monFichier = new Fichier('myFile.txt')

monFichier.lire()
monFichier.affichage()
monFichier.ecrire('blabla')
monFichier.vider()*/
//monFichier.supprimer()

// Partie 2 : Lecture simple d'un fichier Json

let monFichierJson = new FichierJson('myJsonFile.json')
monFichierJson.lireJson()
monFichierJson.ecrireJson('typeA', 'elec2')