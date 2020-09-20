import create from './tools/create.js';
import Prison from '../src/buildings/Prison.js';
import Style from './tools/style.js';
const theme = new Style('');
create('button', 'body').text('Click me').on('click', () => {
    console.log(new Prison('Silvie'));
});
//# sourceMappingURL=app.js.map