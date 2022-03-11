const Fichier = require('./file.js')

class FichierJson extends Fichier {
    constructor(monFichier) {
        super(monFichier)
    }

    lireJson() {
        this.lire(this.fichier)

        this.contenuJson = JSON.parse(this.contenu)
        console.log(this.contenu)
        console.log(this.contenuJson)

        console.log(this.contenuJson.model)

    }

    ecrireJson (cle, valeur) {
        this.lireJson()
        this.contenuJson[cle] = valeur

        this.ecrire(JSON.stringify(this.contenuJson), 'w')
    }
}

module.exports = FichierJson