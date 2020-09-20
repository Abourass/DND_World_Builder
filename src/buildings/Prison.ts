import chooseRandomlyFrom from '../lib/random.js';

export class Prison {
  public name: string
  public type: string;
  public convicts: string;
  public guards: string;
  public help: string;

  constructor(name:string, type = null, convicts = null, guards = null, help = null) {
    this.name = name;
    this.type = (type === null) ? this.generateType() : type;
    this.convicts = (convicts === null) ? this.generateConvicts() : convicts;
    this.guards = (guards === null) ? this.generateGuards() : guards;
    this.help = (help === null) ? this.generateHelp() : help;
  }

  generateType(){
    const standard = 'Bars, stones, cells and blocks. A typical penitentiary.';
    const types = [
      standard,
      standard,
      standard,
      "Somewhere desolate and isolated, perhaps the side of a mountain or the endless expanse of the steppe. No bars are necessary because there's nowhere to go.",
      "A slum or segregated area of either an existing city or structure, or perhaps one now given over entirely to the purpose. The area is walled off and the perimeter guarded.",
      "Exile. Prisoners are dropped off on some (supposedly) uninhabited island. They're likely still under a watchful eye, but it is much smaller than it otherwise would be.",
      "This place is more akin to a religious community than a true prison. Prisoners are enrolled as initiates and are required to go through certain rituals to be released.",
      "The prison is a labor camp, perhaps prisoners are forced to work at various crafts, farm or they're simply on a chain gang.",
    ]

    return chooseRandomlyFrom(types);
  }

  generateConvicts(){
    const standard = 'This is a place for hardened criminals - thieves, murderers, rapists and robbers. The folk here are likely violent and skilled in the ways of criminality';
    const convicts = [
      standard,
      standard,
      "Debtors, those who owe the powers that be enough that they've been thrown in gaol to work off their debts.",
      "Political prisoners. Folk who have fallen afoul of whatever temporal authority controls the penitentiary.",
      "The inmates here are prisoners of war, taken in battle or surrender.",
      "These souls are the victims of a religious purge or inquisition. They could be heretics, or they could be worshipers of an entirely other faith.",
      "This place was built to house a special kind of inmate, Magic-users. It has additional layers of security, of course.",
      "They're ghosts. This place was meant to shackle the souls of condemned beyond the grave as a form of additional punishment.",
    ]

    return chooseRandomlyFrom(convicts);
  }

  generateGuards(){
    const guards = [
      'Vicious and unrelenting, they are a well-paid monolith of authoritative violence.',
      `Lazy and indolent, they will not notice all but the most egregious violations such as murders or escape attempts.`,
      `They have been utterly co-opted by a criminal group; the true masters of this place are whomever you rolled for "How about the other Cons?"`,
      `The guards are prisoners themselves, generally those who earned trust through following the rules. The upper hierarchy may be normal guards, or perhaps there may be periodic checks to ensure that the population hasn't changed.`,
      `Members of a religious order dedicated to punishment or otherwise oppression of criminals and the condemned.`,
      `The prison is guarded by wild animals and the elements. There may be border guards or occasional patrols, but they are few and far between`,
      `There are only a few guards, but they are preternatural in some way, ranging from Cerberoi and Minotaur to Spirits or Elementals.`,
      `There aren't any. Some sort of eldritch force keeps people here, from a curse to even a form of spell.`,
    ]

    return chooseRandomlyFrom(guards);
  }

  generateHelp(){
    const helps = [
      "A snitch, with wary eyes and open ears. They're a fantastic source of information, but they may also be informing others about you.",
      "A smuggler, with connections to the outside and a means to get things in. Smugglers will do most anything before revealing their sources.",
      "A tough, frightening and capable of coercing near anyone into compliance.",
      "A killer, skilled and predatory. Willing to murder nearly anyone for the right price.",
      "A fixer, with the ears of the administration or the guards. They can arrange for the rules to be bent - for a favor.",
      "A crafter, able to take disparate materials and turn them into damn near anything, from weapons to drugs or drink.",
      "A kingpin, able to organize other prisoners (at least some of them) and to bend them towards their own ends.",
      "A seer, priest or other form of magic-user who is able to communicate with the outside, or if given the materials and seclusion, cast spells.",
    ]

    return chooseRandomlyFrom(helps)
  }
}
export default Prison;
