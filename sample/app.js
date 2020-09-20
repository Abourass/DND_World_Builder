import create from './tools/create.js';
import Prison from '../src/buildings/Prison.js';
import Style from './tools/style.js';
import nest from './tools/nest.js';
const theme = new Style('');
create('button', '#prisonHook').addClass(['button', 'is-danger']).text('Generate Prison').on('click', () => {
    const prison = new Prison('Example Prison');
    console.table(prison);
    nest('div', '#generateOutput', (tiles) => {
        nest('div', tiles, (mainTile => {
            nest('article', mainTile, (article => {
                create('p', article).addClass('title').text('Example Prison');
                create('p', article).addClass('subtitle').text(prison.type);
                nest('div', article, (content) => {
                    nest('div', content, (titles) => {
                        nest('p', titles, (guardSection) => {
                            create('span', guardSection).text('Guards: ').set({ style: 'font-weight: 600' });
                            create('span', guardSection).text(prison.guards);
                        });
                        nest('p', titles, (convictsSection) => {
                            create('span', convictsSection).text('Convicts: ').set({ style: 'font-weight: 600' });
                            create('span', convictsSection).text(prison.guards);
                        });
                        nest('p', titles, (helpSection) => {
                            create('span', helpSection).text('Help: ').set({ style: 'font-weight: 600' });
                            create('span', helpSection).text(prison.guards);
                        });
                    }).set({ style: 'display: flex; flex-direction: column;' }).addClass(['column']);
                }).addClass(['content', 'columns']);
            })).addClass(['tile', 'is-child', 'notification']);
        })).addClass(['tile', 'is-parent']);
    }).addClass(['tile', 'is-ancestor']);
});
//# sourceMappingURL=app.js.map