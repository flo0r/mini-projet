const fs = require('fs')

class Fichier {

    constructor(nomFichier) {
        this.nomFichier = nomFichier
    }

    Lire() {
        this.contenu = fs.readFileSync(this.nomFichier)
    }
    Ecrire (unContenu) {
        fs.writeFileSync(this.nomFichier, "\n" + unContenu, {flag : 'a+'})
    }

    Supprimer() {
        fs.truncate(this.nomFichier)
    }

    Affichage() {
        if(undefined != this.contenu)
            console.log("Mon contenu : \n" + this.contenu)
    }
}

let monFichier = new Fichier('monFichier.txt')
monFichier.Lire()
monFichier.Affichage()
monFichier.Ecrire('nouveau contenu')