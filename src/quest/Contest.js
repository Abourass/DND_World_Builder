import chooseRandomlyFrom from '../lib/random.js';
export class Contest {
    constructor(name, type = null, regarded = null, stakes = null, unique = null) {
        this.name = name;
        this.type = (type === null) ? this.generateType() : type;
        this.regarded = (regarded === null) ? this.generateRegard() : regarded;
        this.stakes = (stakes === null) ? this.generateStakes() : stakes;
        this.unique = (unique === null) ? this.generateUnique() : unique;
    }
    generateType() {
        const types = [
            "It involves the use of dice, cards or some other form of randomization.",
            "It has pieces, perhaps a board, rules to abide by and a goal by which one player can overcome their competitor(s).",
            "Athletic feats, whether solitary or with or against others.",
            "A performance, whether that be telling a story, poem, dancing or playing music.",
            "Observing the behavior of animals, whether that be through contending with one another, or some other",
            "A test of nerve between two or more competitors, e.g. a game of Chicken.",
            "Tests of knowledge, trivia or other forms of learning.",
        ];
        if (Math.floor(Math.random() * 9) === 8) {
            const firstType = Math.floor(Math.random() * types.length);
            let secondType = Math.floor(Math.random() * types.length);
            while (firstType === secondType) {
                secondType = Math.floor(Math.random() * types.length);
            }
            return `${types[firstType]} as well as ${types[secondType]}`;
        }
        return chooseRandomlyFrom(types);
    }
    generateRegard() {
        const regards = [
            "It is seen as a fad, or some other flash in the pan.",
            "It is ritualized, whether as a method of determining guilt, or for a religious purpose.",
            "Only the poor and ne'er-do-wells supposedly play this game.",
            "It is popular, but foreign and seen with a bit of suspicion by the local authorities.",
            "It has been banned by the powers that be and is officially illegal.",
            "It has a proud tradition in the local community. Nearly everyone plays or bets on those playing.",
            "The diversion used to be quite popular, but now is more associated with the old or the unfashionable.",
            "This game is nearly or entirely extinct."
        ];
        return chooseRandomlyFrom(regards);
    }
    generateStakes() {
        const none = 'Non-existent. It is exclusively played for fun or honor.';
        const small = 'Piddling. A few pieces of the cheapest denomination of wealth around.';
        const moderate = 'A moderate amount. This wouldn\'t be enough to ruin someone in one game, but repeated losses could.';
        const large = 'This game is not played for money, but rather possessions, favors or tidbits of information.';
        const staggering = 'Staggering. Only the very wealthiest individuals, or entire groups of poorer ones, can endure the cost of a loss.';
        const stakeRatios = [none, small, small, small, moderate, moderate, large, large, staggering];
        return chooseRandomlyFrom(stakeRatios);
    }
    generateUnique() {
        const uniqueTraits = [
            "Something about the make-up of the rules, or the motions associated with the game are magical and ensure that cheating is impossible.",
            "The game was designed by some sort of celestial or fiend, and has numerous symbolic associations built into it that make it function as a form of weak worship.",
            "The local psychopomp favors this diversion, and winning a game against them may allow the victor a stay against death.",
            "This form of contest may be invoked locally to determine innocence or guilt, or in lieu of a trial altogether.",
            "Even if it is not popular, everyone locally knows the rules of this game. Even monsters and spirits.",
            "Local favor with a particular deity (or perhaps just their cult) can be established by demonstrating skill in this contest.",
            "The game is associated with a certain important life event, such as marriage, funerals or some other milestone. While not exclusively played there, the connection may raise eyebrows.",
            "It's just a normal game."
        ];
        return chooseRandomlyFrom(uniqueTraits);
    }
}
export default Contest;
//# sourceMappingURL=Contest.js.map