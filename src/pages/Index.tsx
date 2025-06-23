
import React, { useState } from 'react';
import { ResumeForm } from '@/components/ResumeForm';
import { TemplateSelector } from '@/components/TemplateSelector';
import { ResumePreview } from '@/components/ResumePreview';
import { ResumeData } from '@/types/resume';
import { templates } from '@/data/templates';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Palette, Eye } from 'lucide-react';

const initialData: ResumeData = {
  personalInfo: {
    fullName: 'John Doe',
    email: 'john.doe@email.com',
    phone: '(555) 123-4567',
    location: 'New York, NY',
    linkedIn: 'linkedin.com/in/johndoe',
    website: 'johndoe.com',
    summary: 'Experienced software engineer with a passion for creating innovative solutions and leading development teams. Specialized in full-stack development with expertise in modern web technologies.'
  },
  experience: [
    {
      id: '1',
      jobTitle: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'New York, NY',
      startDate: '2022-01',
      endDate: '',
      current: true,
      description: 'Lead development of scalable web applications using React, Node.js, and AWS. Mentor junior developers and collaborate with cross-functional teams to deliver high-quality software solutions.'
    },
    {
      id: '2',
      jobTitle: 'Software Engineer',
      company: 'Digital Innovations',
      location: 'San Francisco, CA',
      startDate: '2020-03',
      endDate: '2021-12',
      current: false,
      description: 'Developed and maintained multiple client-facing applications. Improved application performance by 40% through code optimization and implementation of best practices.'
    }
  ],
  education: [
    {
      id: '1',
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      location: 'Boston, MA',
      graduationDate: '2020-05',
      gpa: '3.8'
    }
  ],
  skills: [
    { id: '1', name: 'JavaScript', level: 'Expert' },
    { id: '2', name: 'React', level: 'Expert' },
    { id: '3', name: 'Node.js', level: 'Advanced' },
    { id: '4', name: 'Python', level: 'Advanced' },
    { id: '5', name: 'AWS', level: 'Intermediate' },
    { id: '6', name: 'Docker', level: 'Intermediate' }
  ]
};

const Index = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);
  const [selectedTemplateId, setSelectedTemplateId] = useState('modern');

  const selectedTemplate = templates.find(t => t.id === selectedTemplateId) || templates[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Professional Resume Builder</h1>
            <p className="text-lg text-gray-600">Create stunning resumes with our collection of 35 professional templates</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="form" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="form" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Content</span>
            </TabsTrigger>
            <TabsTrigger value="templates" className="flex items-center space-x-2">
              <Palette className="h-4 w-4" />
              <span>Templates</span>
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>Preview</span>
            </TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Form Section */}
            <TabsContent value="form" className="lg:col-span-5 space-y-0">
              <div className="bg-white rounded-lg shadow-lg p-6 max-h-[80vh] overflow-y-auto">
                <ResumeForm data={resumeData} onChange={setResumeData} />
              </div>
            </TabsContent>

            {/* Template Selection */}
            <TabsContent value="templates" className="lg:col-span-5 space-y-0">
              <div className="bg-white rounded-lg shadow-lg p-6 max-h-[80vh] overflow-y-auto">
                <TemplateSelector
                  templates={templates}
                  selectedTemplate={selectedTemplateId}
                  onTemplateSelect={setSelectedTemplateId}
                />
              </div>
            </TabsContent>

            {/* Preview Section for mobile */}
            <TabsContent value="preview" className="lg:col-span-7 space-y-0 lg:hidden">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <ResumePreview data={resumeData} selectedTemplate={selectedTemplate} />
              </div>
            </TabsContent>

            {/* Always show preview on desktop */}
            <div className="hidden lg:block lg:col-span-7">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
                <ResumePreview data={resumeData} selectedTemplate={selectedTemplate} />
              </div>
            </div>
          </div>
        </Tabs>
      </div>

      {/* Footer */}
      <div className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 Professional Resume Builder. Create your perfect resume today.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
