import chooseRandomlyFrom from '../lib/random.js';
export class Weapon {
    constructor(type = null, look = null, unique = null, history = null) {
        this.type = (type === null) ? this.generateType() : type;
        this.look = (look === null) ? this.generateLook() : look;
        this.unique = (unique === null) ? this.generateUnique() : unique;
        this.history = (history === null) ? this.generateHistory() : history;
    }
    generateType() {
        const types = [
            "Sword, one or two-handed",
            "Axe, one or two-handed",
            "Piercing pole-arm such as lance or spear.",
            "Simple and stout club, perhaps banded with iron or just a heavy hunk of wood.",
            "Sledge, pick or war-hammer.",
            "Firearm or Crossbow, with bullets or bolts.",
            "Bow; short, compound or long, with arrows.",
            "Edged pole-arm, such as a halberd, or glaive.",
        ];
        return chooseRandomlyFrom(types);
    }
    generateLook() {
        const looks = [
            "Notched or dented from heavy use, but still serviceable and of quality make.",
            "Like it was not cleaned after it's last use. There's still blood caked onto it or the ammunition.",
            "It is unremarkable, but it is tied with something like ribbons, a banner or other prominent hanging ornaments.",
            "Lovingly cared for, and embellished with carvings or other forms of inlaid art.",
            "Decorated with precious metals or gems, but still just as deadly as any other weapon.",
            "Crude, being made of improvised or otherwise scavenged materials. It is startlingly effective.",
            "A display piece. It could be made out of valuable but useless materials such as gold or silver, or it could be simply be dull or lack the necessary balance to be used.",
            "Strange and bewildering, such as being crafted of glass, coral, wood or marble. It is likely magical in some way, given that it is still useable."
        ];
        return chooseRandomlyFrom(looks);
    }
    generateUnique() {
        const average = 'This weapon is average for its kind.';
        const uniqueTraits = [
            average, average,
            "Weapon must be appeased with violence if taken out with the intent of being used. If this is not is done, the next 1d4 attacks with the weapon are with Disadvantage.",
            "The weapon glow or hums within the presence of a certain kind of foe.",
            "The owner of this weapon always knows where it is.",
            "Weapon refuses to harm it's owner.",
            "A certain Outsider, Elemental or other powerful being has a link to this item. It can offer aid, in return for service."
        ];
        return chooseRandomlyFrom(uniqueTraits);
    }
    generateHistory() {
        const mystery = 'It is a mystery. Anyone who knew is dead or lost';
        const ancestry = 'The weapon has been passed down for generations, while it has not been responsible for anything momentous it has been cherished.';
        const histories = [
            mystery, mystery,
            ancestry, ancestry,
            "It was wielded by a culture hero, and was handed down to the current owner through familial or personal connections",
            "The weapon is or was wielded by members of an organization that is or was famous. They may want it back or to know how it came into the current owner's hands.",
            "The weapon itself is not notable, but it was produced by a well-known maker during a major and terrible war. Possessing it marks out someone as a veteran or descendant of a veteran.",
            "This weapon is a deodand responsible for someone famous' death."
        ];
        return chooseRandomlyFrom(histories);
    }
}
export default Weapon;
//# sourceMappingURL=Weapon.js.map