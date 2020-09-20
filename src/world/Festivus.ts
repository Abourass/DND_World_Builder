import chooseRandomlyFrom from '../lib/random.js';

export class Festivus {
  public name: string;
  public type: string;
  public observance: string;
  public proceedings: string;
  public lengthOfTime: string;

  constructor(name: string, type = null, observance = null, proceedings = null, lengthOfTime = null) {
    this.name = name;
    this.type = (type === null) ? this.generateType() : type;
    this.observance = (observance === null) ? this.generateObservance() : observance;
    this.proceedings = (proceedings === null) ? this.generateProceedings() : proceedings;
    this.lengthOfTime = (lengthOfTime === null) ? this.generateLength() : lengthOfTime;
  }

  generateType(){
    const types = [
      "Religious, explicitly performing rituals and celebrations in regards to a faith.",
      "Civic, sponsored by or in celebration of the prevailing government or society.",
      "Cultural. A sort of blend of Civic and Religious holidays, cultural celebrations tend towards jovial atmospheres and often draw upon local folklore or legend.",
      "Commemoration, set aside for mourning or celebrating some grand event.",
      "Celestial, celebrating or noting something like an eclipse, lunar cycle, comet or similarly sidereal event.",
      "Seasonal, focusing on the passage of one set of weather patterns for another",
      "Environmental, coinciding with the return of some plant or animal to the area."
    ]

    return chooseRandomlyFrom(types)
  }

  generateObservance(){
    const typical = 'A particular faith, sect or culture';
    const racial = 'Members of a certain race or ethnicity.';
    const observances = [
      typical, typical, typical,
      racial, racial,
      "A small region such as a few villages or towns, perhaps even a city.",
      "A large region such as a kingdom or an empire.",
      "Members of a certain profession or guild."
    ]

    return chooseRandomlyFrom(observances)
  }

  generateProceedings(){
    const feasting = 'Public feasting, drinking and celebrations.';
    const performance = 'People are gathered for stories, speeches, songs and other forms of public performance.';
    const proceedings = [
      feasting, feasting,
      performance, performance,
      "A procession, from a civilized area to a ritual site.",
      "Somber rituals, observances and sacrifices (whether they be living creatures or otherwise)",
      "A ritualized competition or combat that could range from bloodless sport to free-for-alls which result in the deaths of one or more participants.",
      "Certain norms and taboos are meant to be challenged during this festival; perhaps folk dress opposite to their normal gender expression, act in strange or transgressive ways, or debts may be forced to be forgiven."
    ]

    return chooseRandomlyFrom(proceedings);
  }

  generateLength(){
    const day = 'An entire day.';
    const lengths = [
      'Only a few hours, such as during the daylight hours or through the night.',
      day, day, day,
      'Several days.',
      'An entire week.',
      'A month.'
    ]

    return chooseRandomlyFrom(lengths);
  }
}
export default Festivus
