class Parente {
    constructor(a, b) {
        this.a = a
        if(null != this.b)
            this.b = b
    }
}

class Fille extends Parente {
    constructor(c) {
        super(c, null)
    }

    toto() {
        
    }
}

