export default function Athlete (name, ageCat) {
    this.name = name;
    this.ageCat = ageCat;
    this.onDeck = false;
    this.scores = {
        boulder1: {
            score: 0,
            attempts: 0
        },
        boulder2: {
            score: 0,
            attempts: 0
        },
        boulder3: {
            score: 0,
            attempts: 0
        },
        boulder4: {
            score: 0,
            attempts: 0
        },
        boulder5: {
            score: 0,
            attempts: 0
        },
        boulder6: {
            score: 0,
            attempts: 0
        },
        superFinal: {
            score: 0,
            attempts: 0
        },
        superFinal2: {
            score: 0,
            attempts: 0
        },
    };
    this.inIso = true;
    this.finalScore = 0;
    this.position = 0;
}

Athlete.prototype.onFloor = function () {
    this.onDeck = true;
    return !this.inIso;
}

Athlete.prototype.getScore = function () {
    var total = 0;
    for(let score in this.scores) {
        total += score.score;
    }
    return total;
}

Athlete.prototype.updateScore = function(boulder, score) {
    
}