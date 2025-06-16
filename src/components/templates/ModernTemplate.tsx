
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const ModernTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
        <h1 className="text-4xl font-light mb-2">{data.personalInfo.fullName}</h1>
        <div className="text-sm opacity-90 space-y-1">
          <div>{data.personalInfo.email} | {data.personalInfo.phone}</div>
          <div>{data.personalInfo.location}</div>
          {(data.personalInfo.linkedIn || data.personalInfo.website) && (
            <div>
              {data.personalInfo.linkedIn && <span>{data.personalInfo.linkedIn}</span>}
              {data.personalInfo.website && data.personalInfo.linkedIn && <span> | </span>}
              {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
            </div>
          )}
        </div>
      </div>

      <div className="p-8">
        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-3 border-l-4 border-blue-600 pl-4">About Me</h2>
            <p className="text-sm leading-relaxed text-gray-700">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4 border-l-4 border-blue-600 pl-4">Experience</h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-6 relative pl-6">
                <div className="absolute left-0 top-2 w-3 h-3 bg-blue-600 rounded-full"></div>
                <div className="absolute left-1.5 top-5 w-0.5 h-full bg-blue-200"></div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{exp.jobTitle}</h3>
                    <span className="text-sm text-gray-600 bg-blue-100 px-2 py-1 rounded">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-blue-700 font-medium mb-2">{exp.company} • {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-blue-800 mb-4 border-l-4 border-blue-600 pl-4">Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <div className="text-blue-700 text-sm">{edu.school}</div>
                  <div className="text-gray-600 text-sm">{edu.location} • {edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-gray-600">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-blue-800 mb-4 border-l-4 border-blue-600 pl-4">Skills</h2>
              <div className="space-y-3">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-gray-600">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ 
                          width: skill.level === 'Expert' ? '100%' : 
                                 skill.level === 'Advanced' ? '75%' : 
                                 skill.level === 'Intermediate' ? '50%' : '25%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
