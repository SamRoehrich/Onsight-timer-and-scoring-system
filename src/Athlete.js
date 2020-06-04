export default function Athlete (name, ageCat) {
    this.name = name;
    this.ageCat = ageCat;
    this.scores = [
        {
            boulder: 1,
            score: 0,
            attempts: 0
        },
        {
            boulder: 2,
            score: 0,
            attempts: 0
        },
        {
            boulder: 3,
            score: 0,
            attempts: 0
        },
        {
            boulder: 4,
            score: 0,
            attempts: 0
        },
        {
            boulder: 5,
            score: 0,
            attempts: 0
        },
        {
            boulder: 6,
            score: 0,
            attempts: 0
        },
    ];
    this.finalScore = 0;
    this.bouldersClimbed = 0;
    this.lastBoulder = false;
}

Athlete.prototype.cycle = function() {
    if(this.bouldersClimbed == 4) {
        this.lastBoulder == true;
        return
    }
    if(this.bouldersClimbed < 4){
        this.bouldersClimbed += 1;
    }
    this.onDeck = !this.onDeck;
}

Athlete.prototype.start = function() {
    this.inIso == false;
    this.onDeck == true;
}
