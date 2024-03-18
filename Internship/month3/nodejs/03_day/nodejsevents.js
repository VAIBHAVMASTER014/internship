const EventEmitter = require('events');

class Emitter extends EventEmitter{}

const emitter = new Emitter();

console.log(emitter)
emitter.on('message', (message) => {
  console.log(message);
});

emitter.emit('message', 'Hello World');