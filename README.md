# wdz

`words` and `unwords` functions.

[![Support with PayPal](https://img.shields.io/badge/paypal-donate-yellow.png)](https://paypal.me/zacanger) [![Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/zacanger) [![ko-fi](https://img.shields.io/badge/donate-KoFi-yellow.svg)](https://ko-fi.com/U7U2110VB)

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
