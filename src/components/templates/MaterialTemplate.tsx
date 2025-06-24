
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const MaterialTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gray-50 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-gray-800">
      {/* Header Card */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-6 border-l-4 border-blue-500">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4 text-gray-900">{data.personalInfo.fullName}</h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              {data.personalInfo.email}
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              {data.personalInfo.phone}
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
              {data.personalInfo.location}
            </div>
          </div>
          {(data.personalInfo.linkedIn || data.personalInfo.website) && (
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mt-2">
              {data.personalInfo.linkedIn && (
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  {data.personalInfo.linkedIn}
                </div>
              )}
              {data.personalInfo.website && (
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  {data.personalInfo.website}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Summary Card */}
      {data.personalInfo.summary && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-green-500">
          <h2 className="text-xl font-medium mb-3 text-gray-900 flex items-center">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">S</div>
            Summary
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience Cards */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-light mb-4 text-gray-900 flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">E</div>
            Experience
          </h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="bg-white rounded-lg shadow-md p-6 mb-4 border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-medium text-gray-900">{exp.jobTitle}</h3>
                <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div className="text-blue-600 font-medium mb-3">{exp.company} • {exp.location}</div>
              {exp.description && (
                <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
        {/* Education Card */}
        {data.education.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <h2 className="text-xl font-medium mb-4 text-gray-900 flex items-center">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">ED</div>
              Education
            </h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
                <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                <div className="text-sm text-purple-600">{edu.school}</div>
                <div className="text-sm text-gray-600">{edu.location} • {edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm text-gray-600">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills Card */}
        {data.skills.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
            <h2 className="text-xl font-medium mb-4 text-gray-900 flex items-center">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">SK</div>
              Skills
            </h2>
            <div className="space-y-3">
              {data.skills.map((skill, index) => (
                <div key={skill.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      index % 4 === 0 ? 'bg-blue-500' :
                      index % 4 === 1 ? 'bg-green-500' :
                      index % 4 === 2 ? 'bg-red-500' :
                      'bg-purple-500'
                    }`}></div>
                    <span className="text-sm text-gray-700">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
