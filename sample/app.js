import create from './tools/create.js';
import Prison from '../src/buildings/Prison.js';
import Style from './tools/style.js';
// @ts-ignore
import Bulma from 'https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css';
const theme = new Style(Bulma);
create('button', 'body').text('Click me').on('click', () => {
    console.log(new Prison('Silvie'));
});
//# sourceMappingURL=app.js.map