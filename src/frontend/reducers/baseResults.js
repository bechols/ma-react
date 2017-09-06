function Job (id, date, file, template, endpoints, status, link) {
  this.id = id;
  this.date = date;
  this.file = file;
  this.template = template;
  this.endpoints = endpoints;
  this.status = status;
  this.link = link;
}

const previousResult1 = new Job('A7N4U8', 'Aug 22 2017', 'portfolio_tape.csv', '', [1, 2], 'Complete', 'https://www.housecanary.com');
const previousResult2 = new Job('RD99AV', 'Aug 31 2017', 'hudson_county.csv', '', [0, 1, 2], 'Complete', 'https://www.housecanary.com');

const baseResults = [
  previousResult1,
  previousResult2
];

export default baseResults;
