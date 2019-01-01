const test = require('tape').test
const unwords = require('./unwords')

test('unwords', (t) => {
  t.equal(unwords([ 'foo', 'bar' ]), 'foo bar', 'makes string joined with space')
  t.end()
})
