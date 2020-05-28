const rounds = [
    {
        title: '3BoulderOnsight',
        data: {
            numBoulders: 3,
            activeTime: 4,
            restTime: 4,
        },
    },
    {
        title: '4BoulderOnsight',
        data: {
            numBoulders: 4,
            activeTime: 5,
            restTime: 4,
        },
    },
    {
        title: '5BoulderOnsight',
        data: {
            numBoulders: 5,
            activeTime: 4,
            restTime: 4,
        },
    },
    {
        title: '6BoulderOnsight',
        data: {
            numBoulders: 6,
            activeTime: 4,
            restTime: 4,
        },
    }
]

export const Rounds = {
    BoulderOnsight3 : {
        title: '3 Boulder Onsight',
        numBoulders: 3,
        activeTime: 4,
        restTime: 4,
    },
    BoulderOnsight4 : {
        title: '4 Boulder Onsight',
        numBoulders: 4,
        activeTime: 4,
        restTime: 4,
    },
    BoulderOnsight5 : {
        title: '5 Boulder Onsight',
        numBoulders: 5,
        activeTime: 4,
        restTime: 4,
    },
    BoulderOnsight6 : {
        title: '6 Boulder Onsight',
        numBoulders: 6,
        activeTime: 4,
        restTime: 4,
    }
}

export default function getRound(title) {
    var res = rounds.find(round => {
       if(round.title == title) {
           res = round
       }
    })
    return res
}
