// Write your code below
const bobsFollowers = ['Prince', 'Sandra', 'Emmanuel', 'James']
const tinasFollowers = ['Prince', 'Jude', 'Emmanuel']
const mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {

            mutualFollowers.push(tinasFollowers[j])

        }

    }
}