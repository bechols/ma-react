function Template (id, name, description, endpoints) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.endpoints = endpoints;
}

const loanCollateralAnalysis = new Template(0,
  'Loan Collateral Analysis',
  'Current and forecasted value, market data, and property attributes',
  [0, 1]);
const rentalAnalysis = new Template(
  1,
  'Rental Analysis',
  'Estimated rental yield and forecast, plus property details',
  [1, 3]);

const baseTemplates = [
  loanCollateralAnalysis,
  rentalAnalysis
];

export default baseTemplates;
