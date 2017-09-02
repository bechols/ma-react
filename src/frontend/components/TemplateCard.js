import React from 'react';
import { Card } from 'react-toolbox/lib/card';
import { CardTitle } from 'react-toolbox/lib/card';
import PropTypes from 'prop-types';
import theme from './TemplateCard.css';

const TemplateCard = ({ templateId, templateName, templateDescription, selected, onTemplateClick }) => (
  <Card
    theme={theme}
    raised
    onClick={()=>onTemplateClick(templateId)}
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
  templateName: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onTemplateClick: PropTypes.func.isRequired
};

export default TemplateCard;
