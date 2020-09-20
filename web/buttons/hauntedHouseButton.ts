import HauntedHouse from '../../src/buildings/HauntedHouse.js';
import checkDepth from '../tools/checkDepth.js';
import create from '../tools/create.js';
import nest from '../tools/nest.js';

export const hauntedHouseButton = () => {
  create('button', '#hauntedHook').addClass(['button', 'is-dark']).text('Generate Haunted House').on('click', ()=> {
    const hauntedHouse = new HauntedHouse('Example House');
    let target = checkDepth('#generateOutput-1')

    nest('div', target, (mainTile => {
      nest('article', mainTile, (article => {
        create('p', article).addClass('title').text(hauntedHouse.name);
        create('p', article).addClass('subtitle').text(hauntedHouse.location);
        nest('div', article, (content) => {
          nest('div', content, (titles) => {
            nest('p', titles, (guardSection) => {
              create('span', guardSection).text('Haunting Caused By: ').set({style: 'font-weight: 600'})
              create('span', guardSection).text(hauntedHouse.causedBy)
            });
            nest('p', titles, (convictsSection) => {
              create('span', convictsSection).text('Ghost Demeanor: ').set({style: 'font-weight: 600'})
              create('span', convictsSection).text(hauntedHouse.ghostDemeanor)
            })
            nest('p', titles, (helpSection) => {
              create('span', helpSection).text('Ghost Desire: ').set({style: 'font-weight: 600'})
              create('span', helpSection).text(hauntedHouse.ghostDesire)
            });
          }).set({style: 'display: flex; flex-direction: column;'}).addClass(['column'])
        }).addClass(['content', 'columns'])
      })).addClass(['tile', 'is-child', 'notification', 'is-dark'])
    })).addClass(['tile', 'is-parent'])
  })
}
export default hauntedHouseButton;
