'use strict';

/**
 * Truncate all specified vowels from given word unless it is the first character
 * @name trnct
 * @param {String} str input
 * @param {Array<String>|String} [vowels=['e', 'i', 'o']] vowels to truncate
 * @returns {String} truncated string
 *
 * @example
 * trnct('extension');
 * //=> 'extnsn'
 * trnct('extension', 'ei');
 * //=> 'extnson'
 */
module.exports = function trnct(str, vowels) {
  if (!str) return str;
  vowels = Array.isArray(vowels) ? vowels.join('') : vowels;
  vowels = vowels || 'eio';
  const re = new RegExp(`(?<=^.+)[${vowels}]`, 'ig');
  return str.replace(re, '');
};
