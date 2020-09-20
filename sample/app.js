import create from './tools/create.js';
import Prison from '../src/buildings/Prison.js';
import Style from './tools/style.js';
const theme = new Style('');
create('button', '#buttons').addClass('button').text('Generate Prison').on('click', () => {
    console.log(new Prison('Example Prison'));
});
//# sourceMappingURL=app.js.map