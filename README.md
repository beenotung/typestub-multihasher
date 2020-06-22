# typestub-multihasher

TypeStub for multihasher

[![npm Package Version](https://img.shields.io/npm/v/typestub-multihasher.svg?maxAge=2592000)](https://www.npmjs.com/package/typestub-multihasher)

source: https://github.com/mikeal/multihasher

## TL;DL
add types to npm package multibase and allow client to import only once directly

## Example
```typescript
import multihasher = require('typestub-multihasher');

multihasher('sha256')(Buffer.from('test')).then(console.log);
// print: QmZ5NmGeStdit7tV6gdak1F8FyZhPsfA843YS9f2ywKH6w
```
