import create from './tools/create.js';
import Prison from '../src/buildings/Prison.js';

create('button', 'body').text('Click me').on('click', ()=> {
  console.log(new Prison('Silvie'))
})
