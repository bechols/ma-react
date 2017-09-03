import React from 'react';
import TemplateCard from './TemplateCard';
import { Button } from 'react-toolbox/lib/button';
import theme from './Templates.css';
import PropTypes from 'prop-types';

const Templates = ({ availableEndpoints, availableTemplates, selectedTemplate, selectedEndpoints, onTemplateClick, onToggleListVisibility, onClearAll }) => (
  <div>
    <div className={theme.Templates}>
      {availableTemplates.map((template, idx) => (
        <TemplateCard
          key={availableTemplates[idx].id}
          templateId={availableTemplates[idx].id}
          includedEndpoints={availableTemplates[idx].endpoints}
          templateName={availableTemplates[idx].name}
          templateDescription={availableTemplates[idx].description}
          selected={availableTemplates[idx].id === selectedTemplate}
          selectedTemplate={selectedTemplate}
          onTemplateClick={onTemplateClick}
          availableEndpoints={availableEndpoints}
        />
      ))}
    </div>
    <div className={theme.ButtonDiv}>
      <Button onClick={onToggleListVisibility}>Customize</Button>
      {selectedEndpoints.length !== 0
        && <Button onClick={onClearAll}>Clear All</Button>
      }
    </div>
  </div>
);

Templates.PropTypes = {
  availableEndpoints: PropTypes.array.isRequired,
  availableTemplates: PropTypes.array.isRequired,
  selectedTemplate: PropTypes.number.isRequired,
  selectedEndpoints: PropTypes.array.isRequired,
  onTemplateClick: PropTypes.func.isRequired,
  onToggleListVisibility: PropTypes.func.isRequired,
  onClearAll: PropTypes.func.isRequired
};

export default Templates;
