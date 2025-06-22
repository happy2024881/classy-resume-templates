
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const TimelineTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header */}
      <div className="text-center mb-8 pb-6 border-b border-gray-300">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{data.personalInfo.fullName}</h1>
        <div className="flex justify-center items-center space-x-6 text-sm text-gray-600">
          <span>{data.personalInfo.email}</span>
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <span>{data.personalInfo.phone}</span>
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <span>{data.personalInfo.location}</span>
        </div>
        {(data.personalInfo.linkedIn || data.personalInfo.website) && (
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-600 mt-2">
            {data.personalInfo.linkedIn && <span>{data.personalInfo.linkedIn}</span>}
            {data.personalInfo.website && data.personalInfo.linkedIn && <span className="w-1 h-1 bg-gray-400 rounded-full"></span>}
            {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
          </div>
        )}
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Professional Summary</h2>
            <p className="text-sm leading-relaxed text-gray-700 italic">"{data.personalInfo.summary}"</p>
          </div>
        </div>
      )}

      {/* Timeline Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Career Timeline</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gray-300"></div>
            
            {data.experience.map((exp, index) => (
              <div key={exp.id} className={`relative mb-8 ${index % 2 === 0 ? 'ml-0 mr-1/2 pr-8' : 'ml-1/2 pl-8'}`}>
                {/* Timeline dot */}
                <div className={`absolute w-4 h-4 bg-blue-500 rounded-full ${index % 2 === 0 ? '-right-2' : '-left-2'} top-6 z-10`}></div>
                
                <div className={`bg-gray-50 p-5 rounded-lg shadow-sm ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{exp.jobTitle}</h3>
                    <div className="text-blue-600 font-semibold">{exp.company} • {exp.location}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-8 mt-8">
        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="bg-blue-50 p-4 rounded-lg mb-4 text-center">
                <h3 className="font-bold text-blue-900">{edu.degree}</h3>
                <div className="text-sm text-blue-700">{edu.school}</div>
                <div className="text-sm text-gray-600">{edu.location}</div>
                <div className="text-sm text-gray-600">{edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm text-gray-600">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">Core Skills</h2>
            <div className="space-y-3">
              {data.skills.map((skill) => (
                <div key={skill.id} className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
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
  );
};
