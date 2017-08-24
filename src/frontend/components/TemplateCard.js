import React from 'react';
import { Card } from 'react-toolbox/lib/card';
import { CardTitle } from 'react-toolbox/lib/card';


const TemplateCard = ({ children, ...other }) => (
  <Card raised>
    <CardTitle title='CardTitle'/>
  </Card>
);

export default TemplateCard;
