import Messenger from './lib/messenger';

const telegram = new Messenger();

telegram.listen().then(() => { console.log('Listening'); });
