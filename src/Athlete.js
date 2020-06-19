export default function Athlete (name, ageCat) {
    this.name = name;
    this.ageCat = ageCat;
    this.scores = [
        {
            boulder: 1,
            score: 0,
            attempts: []
        },
        {
            boulder: 2,
            score: 0,
            attempts: []
        },
        {
            boulder: 3,
            score: 0,
            attempts: []
        },
        {
            boulder: 4,
            score: 0,
            attempts: []
        },
        {
            boulder: 5,
            score: 0,
            attempts: []
        },
        {
            boulder: 6,
            score: 0,
            attempts: []
        },
    ];
    this.startedClimbing = false;
    this.bouldersClimbed = 0;
    this.lastBoulder = false;
    this.finalScore = 0;
}

Athlete.prototype.cycle = function() {
    console.log('cycle called')
    //calc score for boulder
    if(this.scores[this.bouldersClimbed].attempts.length > 0) {
        if(this.scores[this.bouldersClimbed].attempts[0].score == 25) {
            this.scores[this.bouldersClimbed].score = 25
        } else {
            let curScore = this.scores[this.bouldersClimbed].attempts[0].score
            for(let i = 1; i < this.scores[this.bouldersClimbed].attempts.length; i++) {
                if(this.scores[this.bouldersClimbed].attempts[i].score > curScore) {
                    curScore = this.scores[this.bouldersClimbed].attempts[i].score - (i / 10)
                } 
            }
            this.scores[this.bouldersClimbed].score = curScore
        }
    }
    //increment boulders climbed by one
    if(this.bouldersClimbed < 3) {
        this.bouldersClimbed = this.bouldersClimbed + 1
    }
    if(this.bouldersClimbed === 3) {
        this.bouldersClimbed = this.bouldersClimbed + 1;
        this.lastBoulder = true;
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