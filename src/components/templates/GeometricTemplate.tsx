
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const GeometricTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-gray-800 relative overflow-hidden">
      {/* Geometric background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-blue-500 rotate-45"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-red-500 rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-green-500 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-yellow-500"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header with geometric accent */}
        <div className="relative mb-8">
          <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
          <div className="pl-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">{data.personalInfo.fullName}</h1>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 mr-3"></div>
                  {data.personalInfo.email}
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 mr-3 rotate-45"></div>
                  {data.personalInfo.phone}
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 mr-3 rounded-full"></div>
                  {data.personalInfo.location}
                </div>
              </div>
              <div className="space-y-1">
                {data.personalInfo.linkedIn && (
                  <div className="flex items-center">
                    <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-l-transparent border-r-transparent border-b-purple-500 mr-3"></div>
                    {data.personalInfo.linkedIn}
                  </div>
                )}
                {data.personalInfo.website && (
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 mr-3 transform rotate-45"></div>
                    {data.personalInfo.website}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-8 relative">
            <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-blue-400"></div>
            <div className="pl-6 border-l-4 border-gray-200">
              <h2 className="text-xl font-bold mb-3 text-gray-900 flex items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 mr-3 rotate-45"></div>
                Summary
              </h2>
              <p className="text-sm leading-relaxed">{data.personalInfo.summary}</p>
            </div>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-red-400 to-yellow-400 mr-3"></div>
              Experience
            </h2>
            {data.experience.map((exp, index) => (
              <div key={exp.id} className="mb-6 relative">
                <div className={`absolute -left-2 top-0 w-1 h-full bg-gradient-to-b ${
                  index % 3 === 0 ? 'from-red-400 to-pink-400' :
                  index % 3 === 1 ? 'from-blue-400 to-purple-400' :
                  'from-green-400 to-teal-400'
                }`}></div>
                <div className="pl-6 border-l-4 border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{exp.jobTitle}</h3>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="font-semibold text-gray-600 mb-3">{exp.company} • {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed">{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 gap-8">
          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 mr-3 rotate-45"></div>
                Education
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4 relative">
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400"></div>
                  <div className="pl-6 border-l-4 border-gray-200">
                    <h3 className="font-bold">{edu.degree}</h3>
                    <div className="text-sm text-gray-600">{edu.school}</div>
                    <div className="text-sm text-gray-500">{edu.location} • {edu.graduationDate}</div>
                    {edu.gpa && <div className="text-sm text-gray-500">GPA: {edu.gpa}</div>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-red-400 mr-3 rounded-full"></div>
                Skills
              </h2>
              <div className="space-y-3">
                {data.skills.map((skill, index) => (
                  <div key={skill.id} className="flex items-center">
                    <div className={`w-3 h-3 mr-3 ${
                      index % 4 === 0 ? 'bg-blue-500' :
                      index % 4 === 1 ? 'bg-green-500 rotate-45' :
                      index % 4 === 2 ? 'bg-red-500 rounded-full' :
                      'bg-yellow-500 rotate-45'
                    }`}></div>
                    <span className="text-sm flex-1">{skill.name}</span>
                    <span className="text-sm font-bold text-gray-600">{skill.level}</span>
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
