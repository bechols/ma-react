import React from 'react';
import TemplateCard from './TemplateCard';

const Templates = ({ availableTemplates, selectedTemplate, onTemplateClick, onToggleListVisibility }) => {
  return (
    <div>
    {availableTemplates.map((template, idx) => (
      <TemplateCard key={idx} />
    ))}
    </div>
  );
};

export default Templates;
