
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const CreativeBlueTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-8">
        <h1 className="text-4xl font-bold mb-3">{data.personalInfo.fullName}</h1>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span>📧</span>
              <span>{data.personalInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📱</span>
              <span>{data.personalInfo.phone}</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span>📍</span>
              <span>{data.personalInfo.location}</span>
            </div>
            {data.personalInfo.linkedIn && (
              <div className="flex items-center space-x-2">
                <span>💼</span>
                <span className="text-xs">{data.personalInfo.linkedIn}</span>
              </div>
            )}
            {data.personalInfo.website && (
              <div className="flex items-center space-x-2">
                <span>🌐</span>
                <span className="text-xs">{data.personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* About Me */}
        {data.personalInfo.summary && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
              <span className="mr-2">👋</span>
              About Me
            </h2>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm leading-relaxed text-gray-700">{data.personalInfo.summary}</p>
            </div>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
              <span className="mr-2">💼</span>
              Work Experience
            </h2>
            {data.experience.map((exp, index) => (
              <div key={exp.id} className="mb-6 relative">
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{exp.jobTitle}</h3>
                        <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                        </span>
                      </div>
                      <div className="text-blue-600 font-semibold mb-3">{exp.company} • {exp.location}</div>
                      {exp.description && (
                        <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 gap-8">
          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">🎓</span>
                Education
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4 bg-blue-50 p-4 rounded-lg">
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
              <h2 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">⚡</span>
                Skills
              </h2>
              <div className="space-y-3">
                {data.skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-gray-600">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" 
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
