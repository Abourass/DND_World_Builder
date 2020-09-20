import checkDepth from '../tools/checkDepth.js';
import Heist from '../../src/quest/Heist.js';
import create from '../tools/create.js';
import nest from '../tools/nest.js';


export const heistButton = () => {
  create('button', '#heistHook').addClass(['button', 'is-info']).text('Generate Heist').on('click', ()=> {
    const heist = new Heist();
    let target = checkDepth('#generateOutput-1')

    nest('div', target, (mainTile => {
      nest('article', mainTile, (article => {
        create('p', article).addClass('title').text('Heist');
        create('p', article).addClass('subtitle').text(heist.where);
        nest('div', article, (content) => {
          nest('div', content, (titles) => {
            nest('p', titles, (guardSection) => {
              create('span', guardSection).text('Loot: ').set({style: 'font-weight: 600'})
              create('span', guardSection).text(heist.loot)
            });
            nest('p', titles, (convictsSection) => {
              create('span', convictsSection).text('Security: ').set({style: 'font-weight: 600'})
              create('span', convictsSection).text(heist.security)
            })
            nest('p', titles, (helpSection) => {
              create('span', helpSection).text('Twist: ').set({style: 'font-weight: 600'})
              create('span', helpSection).text(heist.twist)
            });
          }).set({style: 'display: flex; flex-direction: column;'}).addClass(['column'])
        }).addClass(['content', 'columns'])
      })).addClass(['tile', 'is-child', 'notification', 'is-info'])
    })).addClass(['tile', 'is-parent'])
  })
}
export default heistButton;
