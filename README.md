# wdz

## DEPRECATED

These are super simple functions, you can write them yourself or grab them from
another library (they're also in my util lib `zeelib`).

----

`words` and `unwords` functions.

[Donate](https://ko-fi.com/zacanger)

--------

## Installation

`npm i wdz`

## Usage

```javascript
const { words, unwords } = require('wdz')

words('foo bar baz') // => [ 'foo', 'bar', 'baz' ]
unwords(words('foo bar baz')) // => 'foo bar baz'
```

[LICENSE](./LICENSE.md)
