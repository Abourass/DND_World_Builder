import create from './tools/create.js';
import Prison from '../src/buildings/Prison.js';
import Style from './tools/style.js';
import Bulma from './css/Bulma.js';
const theme = new Style(Bulma);
create('button', 'body').text('Click me').on('click', () => {
    console.log(new Prison('Silvie'));
});
//# sourceMappingURL=app.js.map