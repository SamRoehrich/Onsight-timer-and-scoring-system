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
    this.startedClimbing = false;
    this.bouldersClimbed = 0;
    this.lastBoulder = false;
    this.finalScore = 0;
}

Athlete.prototype.cycle = function() {
    console.log('cycle called')
    if(this.bouldersClimbed < 3) {
        this.bouldersClimbed = this.bouldersClimbed + 1
        return null
    }
    if(this.bouldersClimbed === 3) {
        this.bouldersClimbed = this.bouldersClimbed + 1;
        this.lastBoulder === true;
        return null
    }
}

Athlete.prototype.getBouldersClimbed = function () {
    return this.bouldersClimbed
}

Athlete.prototype.getLastBoulder = function () {
    return this.lastBoulder
}

Athlete.prototype.setLastBoulder = function () {
    this.lastBoulder == true
}

Athlete.prototype.getStartedClimbing = function () {
    return this.startedClimbing
}

Athlete.prototype.setStartedClimbing = function () {
    return !this.startedClimbing
}