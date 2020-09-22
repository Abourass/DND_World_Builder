import Disaster from '../../src/world/Disaster.js';
import checkDepth from '../tools/checkDepth.js';
import create from '../tools/create.js';
import nest from '../tools/nest.js';

export const disasterButton = () => {
  create('button', '#disasterHook').addClass(['button', 'is-black']).text('Generate Disaster').on('click', ()=> {
    const disaster = new Disaster();
    let target = checkDepth('#generateOutput-1')

    nest('div', target, (mainTile => {
      nest('article', mainTile, (article => {
        create('p', article).addClass('title').text('Disaster');
        create('p', article).addClass('subtitle').text(disaster.catastrophe);
        nest('div', article, (content) => {
          nest('div', content, (titles) => {
            nest('p', titles, (guardSection) => {
              create('span', guardSection).text('Cause: ').set({style: 'font-weight: 600'})
              create('span', guardSection).text(disaster.cause)
            });
            nest('p', titles, (convictsSection) => {
              create('span', convictsSection).text('Scale: ').set({style: 'font-weight: 600'})
              create('span', convictsSection).text(disaster.scale)
            })
            nest('p', titles, (helpSection) => {
              create('span', helpSection).text('Community Response: ').set({style: 'font-weight: 600'})
              create('span', helpSection).text(disaster.communityResponse)
            });
          }).set({style: 'display: flex; flex-direction: column;'}).addClass(['column'])
        }).addClass(['content', 'columns'])
      })).addClass(['tile', 'is-child', 'notification', 'is-black'])
    })).addClass(['tile', 'is-parent'])
  })
}
export default disasterButton;
