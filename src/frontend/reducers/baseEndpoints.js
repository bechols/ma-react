function Endpoint (id, name = '', description = '', optionalColumns = []) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.optionalColumns = optionalColumns;
}

const propertyCensus = new Endpoint(0, 'property/census', 'Statistical geographic areas including census tracts and urban areas');
const propertyDetails = new Endpoint(1, 'property/details', 'Property assessment');
const propertyValue = new Endpoint(2, 'property/value', 'HouseCanary AVM');
const propertyFlood = new Endpoint(3, 'property/flood', 'Flood risk');
const propertyValueWithinBlock = new Endpoint(4, 'property/value_within_block', 'Position of a property\'s value within the distribution of values on the block',
  [{
    colHeader: 'value_within_block__client_value',
    contentDescription: 'Total estimated dollar value',
    example: '253075'
  }, {
    colHeader: 'value_within_block__client_value_sqft',
    contentDescription: 'Estimated dollar value per square foot',
    example: '275'
  }]
);

const baseEndpoints = [
  propertyCensus,
  propertyDetails,
  propertyValue,
  propertyFlood,
  propertyValueWithinBlock
];

export default baseEndpoints;
