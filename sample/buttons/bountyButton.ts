import checkDepth from '../tools/checkDepth.js';
import Bounty from '../../src/quest/Bounty.js';
import create from '../tools/create.js';
import nest from '../tools/nest.js';

export const bountyButton = () => {
  create('button', '#bountyHook').addClass(['button', 'is-danger']).text('Generate Bounty').on('click', ()=> {
    const bounty = new Bounty((Math.floor(Math.random() * 11) > 5) ? 'John Doe' : 'Jane Doe');
    let target = checkDepth('#generateOutput-1')

    nest('div', target, (mainTile => {
      nest('article', mainTile, (article => {
        create('p', article).addClass('title').text(bounty.name);
        create('p', article).addClass('subtitle').text(bounty.crime);
        nest('div', article, (content) => {
          nest('div', content, (titles) => {
            nest('p', titles, (guardSection) => {
              create('span', guardSection).text('Worth: ').set({style: 'font-weight: 600'})
              create('span', guardSection).text(bounty.worth)
            });
            nest('p', titles, (convictsSection) => {
              create('span', convictsSection).text('Criminal Whereabouts: ').set({style: 'font-weight: 600'})
              create('span', convictsSection).text(bounty.whereabouts)
            })
            nest('p', titles, (helpSection) => {
              create('span', helpSection).text('Unique Trait: ').set({style: 'font-weight: 600'})
              create('span', helpSection).text(bounty.unique)
            });
          }).set({style: 'display: flex; flex-direction: column;'}).addClass(['column'])
        }).addClass(['content', 'columns'])
      })).addClass(['tile', 'is-child', 'notification', 'is-danger'])
    })).addClass(['tile', 'is-parent'])
  })
}
export default bountyButton;
