'use strict';

const test = require('tape');
const trnct = require('./');

test('trunacates vowels: [eio]', t => {
  t.plan(1);
  t.is(trnct('vowels'), 'vwls', `trnct('vowels') //=> vwls`);
});

test('skips first character', t => {
  t.plan(1);
  t.is(trnct('extension'), 'extnsn', `trnct('extension') //=> extnsn`);
});

test('works with custom vowel set', t => {
  t.plan(3);
  t.is(
    trnct('truncate', 'aeiou'), 'trnct',
    `trnct('truncate', 'aeiou') //=> trnct`
  );
  t.is(
    trnct('truncate', ['aeiou']), 'trnct',
    `trnct('truncate', ['aeiou']) //=> trnct`
  );
  t.is(
    trnct('truncate', ['a', 'e', 'i', 'o', 'u']), 'trnct',
    `trnct('truncate', ['a', 'e', 'i', 'o', 'u']) //=> trnct`
  );
});

test('handles empty input', t => {
  t.plan(1);
  t.is(trnct(), void 0, `trnct() //=> undefined`);
});

test('handles empty custom vowel set', t => {
  t.plan(3);
  t.is(trnct('vowels', []), 'vwls', `trnct('vowels', []) //=> vwls`);
  t.is(trnct('vowels', ''), 'vwls', `trnct('vowels', '') //=> vwls`);
  t.is(trnct('vowels', null), 'vwls', `trnct('vowels', null) //=> vwls`);
});
