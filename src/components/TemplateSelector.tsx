
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Template, ResumeData } from '@/types/resume';

interface TemplateSelectorProps {
  templates: Template[];
  selectedTemplate: string;
  onTemplateSelect: (templateId: string) => void;
}

// Sample data for preview
const sampleData: ResumeData = {
  personalInfo: {
    fullName: 'John Doe',
    email: 'john@email.com',
    phone: '(555) 123-4567',
    location: 'New York, NY',
    summary: 'Professional summary text here...'
  },
  experience: [
    {
      id: '1',
      jobTitle: 'Software Engineer',
      company: 'Tech Company',
      location: 'NYC',
      startDate: '2022',
      endDate: '2024',
      current: false,
      description: 'Work experience description...'
    }
  ],
  education: [
    {
      id: '1',
      degree: 'Bachelor of Science',
      school: 'University',
      location: 'Boston',
      graduationDate: '2022'
    }
  ],
  skills: [
    { id: '1', name: 'JavaScript', level: 'Expert' },
    { id: '2', name: 'React', level: 'Advanced' }
  ]
};

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  templates,
  selectedTemplate,
  onTemplateSelect
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Choose Template</h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => {
          const TemplateComponent = template.component;
          
          return (
            <Card
              key={template.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedTemplate === template.id
                  ? 'ring-2 ring-blue-500 bg-blue-50'
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => onTemplateSelect(template.id)}
            >
              <CardContent className="p-4">
                <div className="aspect-[8.5/11] bg-gray-100 rounded mb-3 overflow-hidden">
                  <div className="transform scale-[0.15] origin-top-left w-[566.67%] h-[566.67%]">
                    <TemplateComponent data={sampleData} />
                  </div>
                </div>
                <h4 className="font-medium text-sm">{template.name}</h4>
                <p className="text-xs text-gray-600 mt-1">{template.description}</p>
                <Button
                  size="sm"
                  variant={selectedTemplate === template.id ? "default" : "outline"}
                  className="w-full mt-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    onTemplateSelect(template.id);
                  }}
                >
                  {selectedTemplate === template.id ? 'Selected' : 'Select'}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
