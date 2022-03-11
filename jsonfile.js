const Fichier = require('./file.js')

class FichierJson extends Fichier {
    constructor(monFichier) {
        super(monFichier)
    }

    LireJson() {
        this.lire(this.fichier)

        console.log(JSON.parse(this.contenu))
    }
}

module.exports = FichierJson