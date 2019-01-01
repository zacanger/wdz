# wdz

`words` and `unwords` functions.

--------

## Installation

`npm i wdz`

## Usage

```javascript
const { words, unwords } = require('wdz')

words('foo bar baz') // => [ 'foo', 'bar', 'baz' ]
unwords(words('foo bar baz')) // => 'foo bar baz'
```

## License

[MIT](./LICENSE.md)
