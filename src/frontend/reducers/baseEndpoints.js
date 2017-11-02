function Endpoint (id, name = '', description = '', optionalColumns = []) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.optionalColumns = optionalColumns;
}

const propertyCensus = new Endpoint(0, 'property/census', 'Statistical geographic areas including census tracts and urban areas');
const propertyDetails = new Endpoint(1, 'property/details', 'Property assessment');
const propertyDetailsEnhanced = new Endpoint(2, 'property/details_enhanced', 'In-depth property characteristics');
const propertyFlood = new Endpoint(3, 'property/flood', 'Flood hazard information');
const propertyGeocode = new Endpoint(4, 'property/geocode', 'Normalized and converted property address to latitude and longitude');
const propertyLtvDetails = new Endpoint(5, 'property/ltv_details', 'Detailed loan-to-value information');
const propertyMortgageLien = new Endpoint(6, 'property/mortgage_lien', 'Liens / mortgages since last arm’s length transaction');
const propertyNod = new Endpoint(7, 'property/nod', 'Notice of default information');
const propertyOnMarket = new Endpoint(8, 'property/on_market', 'Information for listed properties');
const propertyOwnerOccupied = new Endpoint(9, 'property/owner_occupied', 'Home-owner occupancy information');
const propertyRentalOnMarket = new Endpoint(10, 'property/rental_on_market', 'Rental information for listed properties');
const propertyRentalValue = new Endpoint(11, 'property/rental_value', 'Proprietary rental valuation models for each property, computed and updated monthly');
const propertyRentalValueWithinBlock = new Endpoint(12, 'property/rental_value_within_block', 'Position of rental property values relative to the block’s distribution');
const propertyRentalYield = new Endpoint(13, 'property/rental_yield', 'Ratio of the annual rental income from the property to the value of the property');
const propertySalesHistory = new Endpoint(14, 'property/sales_history', 'Sales history over the past 25 years for each sale and/or transfer');
const propertySchool = new Endpoint(15, 'property/school', 'Nearby schools');
const propertyValue = new Endpoint(16, 'property/value', 'HouseCanary AVM');
const propertyValueWithinBlock = new Endpoint(17, 'property/value_within_block', 'Position of a property\'s value within the distribution of values on the block',
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
  propertyDetailsEnhanced,
  propertyFlood,
  propertyGeocode,
  propertyLtvDetails,
  propertyMortgageLien,
  propertyNod,
  propertyOnMarket,
  propertyOwnerOccupied,
  propertyRentalOnMarket,
  propertyRentalValue,
  propertyRentalValueWithinBlock,
  propertyRentalYield,
  propertySalesHistory,
  propertySchool,
  propertyValue,
  propertyValueWithinBlock
];

export default baseEndpoints;
