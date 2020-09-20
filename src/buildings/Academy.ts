import chooseRandomlyFrom from '../random.js';

export class Academy {
  public name: string;
  public type: string;
  public studentBody: string;
  public reputation: string;
  public unique: string;

  constructor(name: string, type = null, studentBody = null, reputation = null, unique = null) {
    this.name = name;
    this.type = (type === null) ? this.generateType() : type;
    this.studentBody = (studentBody === null) ? this.generateStudentBody() : studentBody;
    this.reputation = (reputation === null) ? this.generateReputation() : reputation;
    this.unique = (unique === null) ? this.generateUniqueness() :unique;
  }

  generateType(){
    const schoolTypes: string[] = [
      'This is a military academy; people here are taught how to lead others in battle, and schooled in various tactics and strategies.',
      'Religious instruction, whether that be bent towards a particular deity, pantheon, or type of faith',
      'The skills and traditions of a guild, whether that be of a craft or a skilled trade.',
      'Magic, whether it be to train magic-users, artifice, or to study the topic of magic in general.',
      'The skills of winning friends and influencing people; rhetoric, diplomacy and public speaking.',
      'The arts. Poetry, sculpture, painting and performance.',
      'Natural philosophy, mathematics and medicine.',
      'The art of government work, whether that be as a scholar, administrator or clerk.'
    ]

    return chooseRandomlyFrom(schoolTypes);
  }

  generateStudentBody(){
    const cash = 'Any who can post the cost, whether that be in kind or in cash.';

    const studentTypes: string[] = [
      cash, cash, cash,
      'Members of the nobility, or the elite.',
      'Those of a particular faith.',
      'An ethnic or sectarian minority.',
      'Only those with a unique skill set or reputation can study here. An audition of some stripe will be necessary.',
      'Those serving the ruling regime are taught here; one can only study here with the permission of the government.',
    ]

    return chooseRandomlyFrom(studentTypes);
  }

  generateReputation(){
    const positive = 'Very positive; this is a place known far and wide for it\'s ability to cultivate students.';
    const neutral = 'The place is famous or infamous due to the actions of some of it\'s alumni. They could be heroes or villains, but they are widely known.'

    const reputations: string[] = [
      positive, positive, positive,
      neutral, neutral, neutral,
      'Largely negative. The school could be known for turning out poor students, or even criminals.',
      'Obscure and largely unknown outside of it\'s home region, this place of instruction has yet to make a name for itself.',
    ]

    return chooseRandomlyFrom(reputations);
  }

  generateUniqueness(){
    const uniqueTraits: string[] = [
      'The place is isolated enough that it must be partially self-sufficient. Pupils may be expected to help run the facility.',
      'The institution is ran by a religious order. They may or may not try to attempt to convert their students.',
      'The grounds themselves are famous. They could have been the site of some great battle, or there could be some famous event which transpired here.',
      'Due to some sort of enchantment or supernatural property, the lands of this school are possessed by some sort of strange occurrences. Time could flow slower inside, magic could be easier (or more difficult) to perform, or perhaps the gods cannot see what transpires here.',
      'Some nefarious conspiracy is being hatched here. The student body or faculty could be fostering or encouraging rebels, or there could be some sort of cabal or secret society being formed.',
      'The institution is a secret or has been hidden in some way from members of the general populace. Only students and staff are permitted here.',
      'A member of the faculty is some strange creature, such as a Golem, Dragon or even an Aberration.',
      'The knowledge offered by this school is far in advance of anything else in the surrounding region. Graduates here seem almost wondrous in what their learning equips them to do.'
    ]

    return chooseRandomlyFrom(uniqueTraits);
  }
}
export default Academy
