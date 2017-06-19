const _ = require('lodash');

const studants = [{
  name : 'Jonh',
  note: 7.6
},{
  name: 'Mary',
  note: 8.6
},{
  name: 'Piter',
  note: 8.1
}];

const average = _.sumBy(studants, 'note') / studants.length;
console.log(average);
