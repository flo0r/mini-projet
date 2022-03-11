const fs = require('fs')

class Fichier {
    constructor(fichier) {
        this.fichier = fichier
    }
    lire() {
        this.contenu = fs.readFileSync(this.fichier, {encoding:'utf8', flag:'r'})
    }
    ecrire(contenu) {
        fs.writeFileSync(this.fichier, '\n' + contenu, {encoding:'utf8', flag: 'a+'})
    }
    supprimer() {
        fs.rmSync(this.fichier)
    }
    vider() {
        fs.truncate(this.fichier)
    }
    affichage() {
        if(this.contenu != undefined)
            console.log('Mon contenu : \n' + this.contenu)
    }
}

let monFichier = new Fichier('myFile.txt')

monFichier.lire()
monFichier.affichage()
monFichier.ecrire('blabla')
monFichier.vider()
//monFichier.supprimer()