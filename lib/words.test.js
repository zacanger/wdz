const test = require('tape').test
const words = require('./words')

test('words', (t) => {
  t.deepEqual(words('foo bar'), ['foo', 'bar'], 'makes arr split on space')
  t.deepEqual(words(''), [], 'returns an empty array for an empty string')
  t.end()
})
