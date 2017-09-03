import React from 'react';
import { Card } from 'react-toolbox/lib/card';
import { CardTitle } from 'react-toolbox/lib/card';
import PropTypes from 'prop-types';
import theme from './TemplateCard.css';

const TemplateCard = ({ templateId, includedEndpoints, templateName, templateDescription, selectedTemplate, selected, onTemplateClick, availableEndpoints, availableTemplates }) => (
  <Card
    theme={theme}
    raised
    onClick={()=>onTemplateClick(templateId, includedEndpoints, selectedTemplate, availableEndpoints, availableTemplates)}
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
  selectedTemplate: PropTypes.number,
  selected: PropTypes.bool.isRequired,
  onTemplateClick: PropTypes.func.isRequired,
  availableTemplates: PropTypes.array.isRequired,
  availableEndpoints: PropTypes.array.isRequired
};

export default TemplateCard;
