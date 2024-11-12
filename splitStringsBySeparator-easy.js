"use strict";

const splitWordsBySeparator = (words, separator) => {
  return words.flatMap(word => word.split(separator)).filter(item => item !== '');
};