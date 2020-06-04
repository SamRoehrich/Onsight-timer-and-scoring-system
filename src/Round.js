export default function Round (athletes) {
    this.athletes = athletes;
    this.activeTime = 4;
    this.restTime = 4;
    this.stacks = [];
    this.numBoulders = 4;
    this.onDeck = [];
    this.inIso = [];
    this.climbing = [];
    this.finished = [];
    this.roundStarted = false;
    this.athletesLeft = athletes.length
}

Round.prototype.startRound = function () {
    this.roundStarted = true;
    this.inIso.push(...this.athletes)
    this.onDeck.push(this.athletes[0])
    this.inIso.shift()
}

Round.prototype.transition = function () {
    let tempClimbing = [...this.climbing]
    let tempOnDeck = [...this.onDeck]
    this.climbing = []
    this.onDeck = []
    //check if an athlete is done, remove from climbing arr and push to finished arr
    tempClimbing.map((athlete, i) => {
        if(athlete.lastBoulder == true) {
            this.finished.push(athlete);
    }})
    tempOnDeck.map(athlete => {
        this.climbing.push(athlete)
    })
    tempClimbing.map(athlete => {
        this.onDeck.push(athlete)
    })
}

Round.prototype.getOnDeck = function () {
    return this.onDeck
}

Round.prototype.getClimbing = function () {
    return this.climbing
}