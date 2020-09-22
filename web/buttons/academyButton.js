import Academy from '../../src/buildings/Academy.js';
import checkDepth from '../tools/checkDepth.js';
import create from '../tools/create.js';
import nest from '../tools/nest.js';
export const academyButton = () => {
    create('button', '#academyHook').addClass(['button', 'is-primary']).text('Generate Academy').on('click', () => {
        const academy = new Academy('Academy');
        let target = checkDepth('#generateOutput-1');
        nest('div', target, (mainTile => {
            nest('article', mainTile, (article => {
                create('p', article).addClass('title').text(academy.name);
                create('p', article).addClass('subtitle').text(academy.type);
                nest('div', article, (content) => {
                    nest('div', content, (titles) => {
                        nest('p', titles, (guardSection) => {
                            create('span', guardSection).text('Student Body: ').set({ style: 'font-weight: 600' });
                            create('span', guardSection).text(academy.studentBody);
                        });
                        nest('p', titles, (convictsSection) => {
                            create('span', convictsSection).text('Reputation: ').set({ style: 'font-weight: 600' });
                            create('span', convictsSection).text(academy.reputation);
                        });
                        nest('p', titles, (helpSection) => {
                            create('span', helpSection).text('Unique Trait: ').set({ style: 'font-weight: 600' });
                            create('span', helpSection).text(academy.unique);
                        });
                    }).set({ style: 'display: flex; flex-direction: column;' }).addClass(['column']);
                }).addClass(['content', 'columns']);
            })).addClass(['tile', 'is-child', 'notification', 'is-primary']);
        })).addClass(['tile', 'is-parent']);
    });
};
export default academyButton;
//# sourceMappingURL=academyButton.js.map