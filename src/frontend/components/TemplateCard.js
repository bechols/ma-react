import React from 'react';
import { Card } from 'react-toolbox/lib/card';
import { CardTitle } from 'react-toolbox/lib/card';
import PropTypes from 'prop-types';
import theme from './TemplateCard.css';

const TemplateCard = ({ templateId, includedEndpoints, templateName, templateDescription, selected, onTemplateClick }) => (
  <Card
    theme={theme}
    raised
    onClick={()=>onTemplateClick(templateId, includedEndpoints)}
    className={selected ? theme.selected : null}
  >
    <CardTitle
      title={templateName}
      subtitle={templateDescription}
    />
  </Card>
);

TemplateCard.PropTypes = {
  templateId: PropTypes.number.isRequired,
  includedEndpoints: PropTypes.array.isRequired,
  templateName: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onTemplateClick: PropTypes.func.isRequired
};

export default TemplateCard;
