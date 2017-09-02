import React from 'react';
import TemplateCard from './TemplateCard';
import { Button } from 'react-toolbox/lib/button';
import theme from './Templates.css';
import PropTypes from 'prop-types';

const Templates = ({ availableTemplates, selectedTemplate, selectedEndpoints, onTemplateClick, onToggleListVisibility }) => (
  <div>
    <div className={theme.Templates}>
      {availableTemplates.map((template, idx) => (
        <TemplateCard
          key={availableTemplates[idx].id}
          templateId={availableTemplates[idx].id}
          templateName={availableTemplates[idx].name}
          templateDescription={availableTemplates[idx].description}
          selected={availableTemplates[idx].id === selectedTemplate}
          onTemplateClick={onTemplateClick}
        />
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button onClick={onToggleListVisibility}>Customize</Button>
      {selectedEndpoints
        && <Button onClick={null}>Clear All</Button>
      }
    </div>
  </div>
);

Templates.PropTypes = {
  availableTemplates: PropTypes.array.isRequired,
  selectedTemplate: PropTypes.number.isRequired,
  selectedEndpoints: PropTypes.array.isRequired,
  onTemplateClick: PropTypes.func.isRequired,
  onToggleListVisibility: PropTypes.func.isRequired
};

export default Templates;