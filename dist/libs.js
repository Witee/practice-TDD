'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var format = function format(_ref) {
  var word = _ref.word,
      count = _ref.count;
  return word + ' ' + count;
};

var formatGroup = function formatGroup(group) {
  var newGroup = [];

  _lodash2.default.forEach(group, function (g) {
    newGroup.push(format(g));
  });

  return _lodash2.default.join(newGroup, '\r\n');
};

var split = function split(str) {
  return _lodash2.default.split(str, /\s+/);
};

var group = function group(array) {
  var newArray = [];

  _lodash2.default.forEach(array, function (a) {
    var obj = _lodash2.default.find(newArray, function (n) {
      return a === n.word;
    });

    if (obj) {
      obj.count += 1;
    } else {
      newArray.push({ word: a, count: 1 });
    }
  });

  return newArray;
};

var sort = function sort(sortGroup) {
  return _lodash2.default.sortBy(sortGroup, function (g) {
    return -g.count;
  });
};

var wordCount = function wordCount(str) {
  if (_lodash2.default.get(str, 'length', 0) > 0) {
    var wordArray = split(str);
    var groupWords = group(wordArray);
    groupWords = sort(groupWords);
    var result = formatGroup(groupWords);

    return result;
  }
  return str;
};

exports.default = wordCount;