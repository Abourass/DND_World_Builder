import HauntedHouse from './buildings/HauntedHouse.js';
import Academy from './buildings/Academy.js';
import Contest from './quest/Contest.js';
import Bounty from './quest/Bounty.js';
import Heist from './quest/Heist.js';
import Prison from './buildings/Prison';

console.log('=========> ACADEMY <=========')
console.log(new Academy('Boople Academy'));
console.log(new Academy('Silver Sails School'));
console.log(new Academy('Eyes Wide College'));
console.log('=========> PRISON <=========')
console.log(new Prison('Boople Prison'));
console.log(new Prison('Silver Sails Prison'));
console.log(new Prison('Eyes Wide Prison'));
console.log('=========> CONTEST <=========')
console.log(new Contest('Spanakopita'));
console.log(new Contest('Birthday'));
console.log(new Contest('Olympics'));
console.log('=========> BOUNTIES <=========')
console.log(new Bounty('Rudie Jung'));
console.log(new Bounty('Terry Blast'));
console.log(new Bounty('Megan Billy'));
console.log('=========> HEISTS <=========')
console.log(new Heist());
console.log(new Heist());
console.log(new Heist());
console.log('=========> HAUNTED HOUSES <=========')
console.log(new HauntedHouse('Simple House'));
console.log(new HauntedHouse('Oliander house'));
console.log(new HauntedHouse('Oram Manor'));
