var Emitter = require('events');

var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('Somewhere someone said Hello!');
});

emtr.on('greet', function(){
    console.log('A greeting occurred!');
});

console.log('this will be logged first');
emtr.emit('greet');