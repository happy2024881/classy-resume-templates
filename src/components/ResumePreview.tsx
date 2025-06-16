
import React from 'react';
import { ResumeData, Template } from '@/types/resume';
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';

interface ResumePreviewProps {
  data: ResumeData;
  selectedTemplate: Template;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data, selectedTemplate }) => {
  const TemplateComponent = selectedTemplate.component;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Preview</h3>
        <div className="flex space-x-2">
          <Button onClick={handlePrint} size="sm" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Download PDF</span>
          </Button>
          <Button onClick={handlePrint} size="sm" variant="outline" className="flex items-center space-x-2">
            <Eye className="h-4 w-4" />
            <span>Full Preview</span>
          </Button>
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden bg-gray-100 p-4">
        <div className="transform scale-75 origin-top-left bg-white shadow-lg" style={{ width: '133.33%', height: '133.33%' }}>
          <TemplateComponent data={data} />
        </div>
      </div>

      <div className="text-sm text-gray-600">
        <p>Template: <span className="font-medium">{selectedTemplate.name}</span></p>
        <p>{selectedTemplate.description}</p>
      </div>
    </div>
  );
};
