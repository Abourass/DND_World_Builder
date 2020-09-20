import chooseRandomlyFrom from '../lib/random.js';

export class Bounty {
  public name: string;
  public worth: string;
  public crime: string;
  public whereabouts: string;
  public unique: string;

  constructor(name: string, worth = null, crime = null, whereabouts = null, unique = null) {
    this.name = name;
    this.worth = (worth === null) ? this.generateWorth() : worth;
    this.crime = (crime === null) ? this.generateCrime() : crime;
    this.whereabouts = (whereabouts === null) ? this.generateWhereabouts() : whereabouts;
    this.unique = (unique === null) ? this.generateUnique() : unique;
  }

  generateWorth(){
    const lowWorth = 'A pittance, barely worth getting on the trail for.';
    const modestWorth = 'Enough to be worth one\'s time, but also enough to bring a rival onto the scene.';
    const moderateWorth = 'A tidy amount, enough to finance months of decent living. There are probably two or three other hunters looking to find them as well';
    const largeWorth = 'A huge score. While not enough to retire, it would be a massive boon. There will be quite a lot of competitors, perhaps five or six.'
    const hugeWorth = 'A king\'s ransom, probably financed by an organization, rather than an individual. A dozen or more rivals will undoubtedly be after it as well.'
    const worthRatio = [lowWorth, modestWorth, modestWorth, modestWorth, moderateWorth, moderateWorth, moderateWorth, largeWorth, hugeWorth];

    return chooseRandomlyFrom(worthRatio);
  }

  generateCrime(){
    const crimes = [
      'Murder',
      'Theft',
      'Heresy',
      'Oath-breaking',
      'Sedition',
      'Smuggling',
      'Kidnapping',
    ]

    if (Math.floor(Math.random() * 9) === 8){
      const firstCrime = Math.floor(Math.random() * crimes.length)
      let secondCrime = Math.floor(Math.random() * crimes.length)

      while (firstCrime === secondCrime){
        secondCrime = Math.floor(Math.random() * crimes.length)
      }

      return `${crimes[firstCrime]} and ${crimes[secondCrime]}`
    }

    return chooseRandomlyFrom(crimes)
  }

  generateWhereabouts(){
    const hidingPlaces = [
    `They're desperate; choose a cardinal direction, that's the direction they're fleeing to`,
    `A member of their family, or a close friend`,
    `They are taking their chances with the wilderness, and are hiding in the woods, a cave, or another isolated location.`,
    `The house of a noble or other powerful person`,
    `They've taken up with a group of criminals, whether that be an organized crime syndicate, or a group of bandits`,
    `A religious organization, claiming sanctuary`,
    `They have taken on another identity or are living in disguise`,
    `They aren't fleeing; they intend to kill their pursuers`
    ]

    return chooseRandomlyFrom(hidingPlaces)
  }

  generateUnique(){
    const uniqueTraits = [
    "They are an important member of their community. They may have many potential allies.",
    "They are a spellcaster of some sort.",
    "They're innocent of the crimes they have been accused of.",
    "They are extremely wealthy. They have more than enough money for bribes.",
    "They are an extremely skilled warrior.",
    "They have the favor of an eldritch creature, a minor deity, or even an outsider or fiend.",
    "They are a member of a rival government or community. Killing or capturing them may have far-reaching consequences.",
    "They have either a magical or technological item or some other form of enhancement that gives them an unexpected advantage.",
    ]

    return chooseRandomlyFrom(uniqueTraits)
  }
}
export default Bounty
