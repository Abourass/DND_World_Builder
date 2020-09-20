import chooseRandomlyFrom from '../lib/random.js';

export class HauntedHouse {
  public name: string;
  public location: string;
  public causedBy: string;
  public ghostDemeanor: string;
  public ghostDesire: string;

  constructor(name: string, location = null, causedBy = null, ghostDemeanor = null, ghostDesire = null) {
    this.name = name;
    this.location = (location === null) ? this.generateLocation() : location;
    this.causedBy = (causedBy === null) ? this.generateCause() : causedBy;
    this.ghostDemeanor = (ghostDemeanor === null) ? this.generateGhostDemeanor() : ghostDemeanor;
    this.ghostDesire = (ghostDesire === null) ? this.generateGhostDesire() : ghostDesire;
  }

  generateLocation(){
    const standardLocation = 'Somewhere associated with death, such as a graveyard or charnel ground.';
    const locations = [
      standardLocation,
      standardLocation,
      "A mansion, villa, château or other large, multi-roomed abode.",
      "Somewhere traditionally associated with healing, such as a hospital or the temple of a god of health.",
      "Site of a battle or wide-scale conflict.",
      "A geographic location such as a grove, lake or cave.",
      "The entirety of a small settlement, or for larger communities, a district of the city.",
    ]

    return (Math.floor(Math.random() * 9) !== 8)
      ? chooseRandomlyFrom(locations)
      : `${chooseRandomlyFrom(locations)}, additionally the location is now abandoned`
  }

  generateCause(){
    const violence = 'A violent and senseless murder, perhaps even more than one.';
    const death = 'The owners simply died one day, probably of old age, sickness, or misfortune. They apparently didn\'t get the message and just stuck around.'
    const causes = [
      violence,
      violence,
      violence,
      death,
      death,
      'An Oath was broken at this place, and the oathbreaker is damned to haunt the site.',
      'Some powerful Aberration, Dragon or another eldritch being died here. They never really left.',
      'A semi-divine being, such as an Outsider or a powerful Warlock or Cleric, died here. Their soul still lurks in the area, aspecting it towards their alignment.'
    ]

    return chooseRandomlyFrom(causes);
  }

  generateGhostDemeanor(){
    const ghostDemeanors = [
      "Violently, and with great hostility. The ghosts here will manifest and attempt to attack interlopers.",
      "Undead are inevitably drawn to the place where these ghosts are trapped. The spirits can influence their behavior to carry out their wills.",
      "The ghosts exist as illusions, figments and strange notions inside the minds of visitors. The spirits will attempt to ensnare those under it's influence into freeing it, or to help it move on.",
      "These spirits are invisible and intangible, but they have the ability to move objects, and can do so at high enough velocity to do damage.",
      "Any who come to this place are at risk of possession by the souls that dwell here, from sapient beings to animals.",
      "The specters here have the ability to influence heat and cold, able to cause patches of ice or even manifest balls of flame.",
      "Distant from this world, these shades can see past what mortals can. They can share their insights into the future with those that sleep within their haunt, whether the victim wishes it or not.",
      "Memories and recollections are toys for these ghosts, able to replay spans of time from their subject's minds, or to cloud their thoughts and make them forget what has transpired here.",
    ]

    return chooseRandomlyFrom(ghostDemeanors)
  }

  generateGhostDesire(){
    const escape = 'Freedom! Escape! To roam the world as they will as a disembodied spirit.';
    const vengeance = 'Vengeance on their tormentors, whether their murderers, or those that simply wronged them in life.';
    const desires = [
      escape,
      escape,
      vengeance,
      vengeance,
      "Resolution, restitution or justice for what has been done to them.",
      "Respect and deference in the form of sacrifice and worship.",
      "To endlessly repeat the circumstances leading up to their deaths.",
      "Slaking the various vices that they held to in life, in spite of whether or not that's still possible.",
    ]

    return chooseRandomlyFrom(desires);
  }
}
export default HauntedHouse;
