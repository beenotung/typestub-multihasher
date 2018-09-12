import multihasher =require('typestub-multihasher');

multihasher('sha256')(Buffer.from('test')).then(console.log);
