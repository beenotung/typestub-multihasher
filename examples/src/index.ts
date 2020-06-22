import multihasher = require('typestub-multihasher');

multihasher('sha256')(Buffer.from('test')).then(console.log);
// print: QmZ5NmGeStdit7tV6gdak1F8FyZhPsfA843YS9f2ywKH6w
