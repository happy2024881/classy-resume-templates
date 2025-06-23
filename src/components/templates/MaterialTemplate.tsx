
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const MaterialTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gray-50 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-gray-800">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-blue-500">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-gray-900">{data.personalInfo.fullName}</h1>
            <div className="text-sm space-y-1 text-gray-600">
              <div className="flex items-center"><span className="w-4 h-4 mr-2">✉️</span>{data.personalInfo.email}</div>
              <div className="flex items-center"><span className="w-4 h-4 mr-2">📞</span>{data.personalInfo.phone}</div>
              <div className="flex items-center"><span className="w-4 h-4 mr-2">📍</span>{data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div className="flex items-center"><span className="w-4 h-4 mr-2">💼</span>{data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div className="flex items-center"><span className="w-4 h-4 mr-2">🌐</span>{data.personalInfo.website}</div>}
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded-lg object-cover shadow-md"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
            <h2 className="text-xl font-bold mb-3 text-green-600">Summary</h2>
            <p className="text-sm leading-relaxed text-gray-700">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6">
        {/* Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-6">
              <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500">
                <h2 className="text-xl font-bold mb-4 text-purple-600">Professional Experience</h2>
                {data.experience.map((exp) => (
                  <div key={exp.id} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-gray-800">{exp.jobTitle}</h3>
                      <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <div className="font-semibold mb-2 text-purple-600">{exp.company} • {exp.location}</div>
                    {exp.description && (
                      <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {/* Education */}
          {data.education.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-500">
              <h2 className="text-xl font-bold mb-4 text-orange-600">Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                  <div className="text-sm text-orange-600">{edu.school}</div>
                  <div className="text-sm text-gray-600">{edu.location}</div>
                  <div className="text-sm text-gray-600">{edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-gray-600">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
              <h2 className="text-xl font-bold mb-4 text-red-600">Skills</h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">{skill.level}</span>
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
