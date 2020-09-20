import Contest from '../../src/quest/Contest.js';
import checkDepth from '../tools/checkDepth.js';
import create from '../tools/create.js';
import nest from '../tools/nest.js';
export const contestButton = () => {
    create('button', '#contestHook').addClass(['button', 'is-success']).text('Generate Contest').on('click', () => {
        const contest = new Contest((Math.floor(Math.random() * 11) > 5) ? 'Olympics' : 'Spanakopita');
        let target = checkDepth('#generateOutput-1');
        nest('div', target, (mainTile => {
            nest('article', mainTile, (article => {
                create('p', article).addClass('title').text(contest.name);
                create('p', article).addClass('subtitle').text(contest.type);
                nest('div', article, (content) => {
                    nest('div', content, (titles) => {
                        nest('p', titles, (guardSection) => {
                            create('span', guardSection).text('Regarded: ').set({ style: 'font-weight: 600' });
                            create('span', guardSection).text(contest.regarded);
                        });
                        nest('p', titles, (convictsSection) => {
                            create('span', convictsSection).text('Stakes: ').set({ style: 'font-weight: 600' });
                            create('span', convictsSection).text(contest.stakes);
                        });
                        nest('p', titles, (helpSection) => {
                            create('span', helpSection).text('Unique Trait: ').set({ style: 'font-weight: 600' });
                            create('span', helpSection).text(contest.unique);
                        });
                    }).set({ style: 'display: flex; flex-direction: column;' }).addClass(['column']);
                }).addClass(['content', 'columns']);
            })).addClass(['tile', 'is-child', 'notification', 'is-success']);
        })).addClass(['tile', 'is-parent']);
    });
};
export default contestButton;
//# sourceMappingURL=contestButton.js.map