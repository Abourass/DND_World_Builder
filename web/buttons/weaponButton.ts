import checkDepth from '../tools/checkDepth.js';
import Weapon from '../../src/items/Weapon.js';
import create from '../tools/create.js';
import Style from '../tools/style.js';
import nest from '../tools/nest.js';

export const weaponButton = (theme: Style) => {
  theme.add(`
    .button.is-orange {
    border-color: transparent;
    color: #000;
    background-color: #ffa000
  }
  
  .button.is-orange:hover {
    border-color: transparent;
    color: #000;
    background-color: #ffb700
  }
  
  .notification.is-orange {
    color: #000;
    background-color: #ffa000
  }
  `)

  create('button', '#weaponHook').addClass(['button', 'is-orange']).text('Generate Weapon').on('click', ()=> {
    const weapon = new Weapon();
    let target = checkDepth('#generateOutput-1')

    nest('div', target, (mainTile => {
      nest('article', mainTile, (article => {
        create('p', article).addClass('title').text('Weapon');
        create('p', article).addClass('subtitle').text(weapon.type);
        nest('div', article, (content) => {
          nest('div', content, (titles) => {
            nest('p', titles, (guardSection) => {
              create('span', guardSection).text('Look: ').set({style: 'font-weight: 600'})
              create('span', guardSection).text(weapon.look)
            });
            nest('p', titles, (convictsSection) => {
              create('span', convictsSection).text('Unique Trait: ').set({style: 'font-weight: 600'})
              create('span', convictsSection).text(weapon.unique)
            })
            nest('p', titles, (helpSection) => {
              create('span', helpSection).text('History: ').set({style: 'font-weight: 600'})
              create('span', helpSection).text(weapon.history)
            });
          }).set({style: 'display: flex; flex-direction: column;'}).addClass(['column'])
        }).addClass(['content', 'columns'])
      })).addClass(['tile', 'is-child', 'notification', 'is-orange'])
    })).addClass(['tile', 'is-parent'])
  })
}
export default weaponButton;
