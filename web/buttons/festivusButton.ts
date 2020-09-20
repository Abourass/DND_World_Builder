import Festivus from '../../src/world/Festivus.js';
import checkDepth from '../tools/checkDepth.js';
import create from '../tools/create.js';
import nest from '../tools/nest.js';

export const festivusButton = () => {
  create('button', '#festivusHook').addClass(['button', 'is-link']).text('Generate Festival / Religion').on('click', ()=> {
    const festival = new Festivus((Math.floor(Math.random() * 11) > 5) ? 'Festivus' : 'Christmas Two');
    let target = checkDepth('#generateOutput-1')

    nest('div', target, (mainTile => {
      nest('article', mainTile, (article => {
        create('p', article).addClass('title').text(festival.name);
        create('p', article).addClass('subtitle').text(festival.lengthOfTime);
        nest('div', article, (content) => {
          nest('div', content, (titles) => {
            nest('p', titles, (helpSection) => {
              create('span', helpSection).text('Type: ').set({style: 'font-weight: 600'})
              create('span', helpSection).text(festival.type)
            });
            nest('p', titles, (guardSection) => {
              create('span', guardSection).text('Observed by: ').set({style: 'font-weight: 600'})
              create('span', guardSection).text(festival.observance)
            });
            nest('p', titles, (convictsSection) => {
              create('span', convictsSection).text('Proceedings: ').set({style: 'font-weight: 600'})
              create('span', convictsSection).text(festival.proceedings)
            })
          }).set({style: 'display: flex; flex-direction: column;'}).addClass(['column'])
        }).addClass(['content', 'columns'])
      })).addClass(['tile', 'is-child', 'notification', 'is-link'])
    })).addClass(['tile', 'is-parent'])
  })
}
export default festivusButton;
