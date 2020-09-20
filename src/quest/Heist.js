"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heist = void 0;
const random_js_1 = __importDefault(require("../random.js"));
class Heist {
    constructor(loot = null, where = null, security = null, twist = null) {
        this.loot = (loot === null) ? this.generateLoot() : loot;
        this.where = (where === null) ? this.generateWhere() : where;
        this.security = (security === null) ? this.generateSecurity() : security;
        this.twist = (twist === null) ? this.generateTwist() : twist;
    }
    generateLoot() {
        const money = 'A truly obscene amount of money, treasure or other form of portable wealth.';
        const lootChoices = [
            money,
            money,
            "A trove of information that would potentially lead to the executions of those involved.",
            "A personal item, such as a treasure keepsake, or one of deep cultural significance.",
            "Someone extremely important, and either extremely valuable if ransomed to the right person, or able to pay for their own freedom.",
            "An object of significant import, such as a cursed or blessed item, relic, or even a religious tome or spellbook.",
            "Something seemingly impossible to steal, such as someone's honor, a monument or a concept.",
            "The initial job was a ruse to distract from the true heist! Roll twice on this table, the first result is the ruse, the second is the true target",
        ];
        return random_js_1.default(lootChoices);
    }
    generateWhere() {
        const locations = [
            "Somewhere mobile, such as a caravan or a ship.",
            "A fortress or castle.",
            "A place of worship, important to one or more faiths.",
            "Private residence such as a villa or mansion.",
            "A bank or other form of mercantile warehouse.",
            "A museum, archive, university or library.",
            "Tomb, crypt or dungeon.",
            "A hoard for some great beast or eldritch being.",
        ];
        return random_js_1.default(locations);
    }
    generateSecurity() {
        const guards = [
            "Lots of poorly trained guards.",
            "A squad of drilled and trained security professionals.",
            "Trained animals, whether those be dogs, or blink dogs.",
            "Traps, mechanical or magical in nature.",
            "Powerful fortean effects such as doors which are out of sync with reality, to terrible curses.",
            "The environment itself; it could be held in the midst of a great and never-ending storm, in a secluded and parched desert, or the bottom of a flooded caldera.",
        ];
        const twist = Math.floor(Math.random() * 9);
        if (twist === 7) {
            const firstTwist = Math.floor(Math.random() * guards.length);
            let secondTwist = Math.floor(Math.random() * guards.length);
            while (firstTwist === secondTwist) {
                secondTwist = Math.floor(Math.random() * guards.length);
            }
            return `${guards[firstTwist]} and ${guards[secondTwist]}`;
        }
        if (twist === 8) {
            const firstTwist = Math.floor(Math.random() * guards.length);
            let secondTwist = Math.floor(Math.random() * guards.length);
            let thirdTwist = Math.floor(Math.random() * guards.length);
            while (firstTwist === secondTwist) {
                secondTwist = Math.floor(Math.random() * guards.length);
            }
            while (firstTwist === thirdTwist) {
                thirdTwist = Math.floor(Math.random() * guards.length);
            }
            while (secondTwist === thirdTwist) {
                thirdTwist = Math.floor(Math.random() * guards.length);
            }
            return `${guards[firstTwist]} and ${guards[secondTwist]} as well as ${guards[thirdTwist]}`;
        }
        return random_js_1.default(guards);
    }
    generateTwist() {
        const twists = [
            "One of the members of the crew is a traitor! They've been working with the mark the whole time.",
            'The job is a set-up, designed to draw one of the crew out into the open.',
            'The mark has been tipped off, security will be aware that the crew is coming.',
            "The group has a person on the inside. They'll be able to help when the situation seems its bleakest.",
            'The target has been moved, or is otherwise not where it is supposed to be.',
            'Multiple groups have been tipped off to the existence of the haul, and all of them are pursuing it.',
            `The group revealed the existence of another score while in the course of this one - but they have to jump on it now! Roll once more on the "What's being stolen?" table, then present it during the course of the caper.`,
            'The heist was set up by the mark themselves, for their own nefarious purpose.'
        ];
        const twist = Math.floor(Math.random() * 9);
        if (twist === 7) {
            const firstTwist = Math.floor(Math.random() * twists.length);
            let secondTwist = Math.floor(Math.random() * twists.length);
            while (firstTwist === secondTwist) {
                secondTwist = Math.floor(Math.random() * twists.length);
            }
            return `${twists[firstTwist]} and ${twists[secondTwist]}`;
        }
        if (twist === 8) {
            const firstTwist = Math.floor(Math.random() * twists.length);
            let secondTwist = Math.floor(Math.random() * twists.length);
            let thirdTwist = Math.floor(Math.random() * twists.length);
            while (firstTwist === secondTwist) {
                secondTwist = Math.floor(Math.random() * twists.length);
            }
            while (firstTwist === thirdTwist) {
                thirdTwist = Math.floor(Math.random() * twists.length);
            }
            while (secondTwist === thirdTwist) {
                thirdTwist = Math.floor(Math.random() * twists.length);
            }
            return `${twists[firstTwist]} and ${twists[secondTwist]} as well as ${twists[thirdTwist]}`;
        }
        return random_js_1.default(twists);
    }
}
exports.Heist = Heist;
exports.default = Heist;
