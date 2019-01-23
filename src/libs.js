import _ from 'lodash';

const format = ({ word, count }) => `${word} ${count}`;

const formatGroup = (group) => {
  const newGroup = [];

  _.forEach(group, (g) => {
    newGroup.push(format(g));
  });

  return _.join(newGroup, '\r\n');
};

const split = (str) => _.split(str, /\s+/);

const group = (array) => {
  const newArray = [];

  _.forEach(array, (a) => {
    const obj = _.find(newArray, (n) => (a === n.word));

    if (obj) {
      obj.count += 1;
    } else {
      newArray.push({ word: a, count: 1 });
    }
  });

  return newArray;
};

const sort = (sortGroup) => _.sortBy(sortGroup, (g) => (-g.count));

const wordCount = (str) => {
  if (_.get(str, 'length', 0) > 0) {
    const wordArray = split(str);
    let groupWords = group(wordArray);
    groupWords = sort(groupWords);
    const result = formatGroup(groupWords);

    return result;
  }
  return str;
};

export default wordCount;
