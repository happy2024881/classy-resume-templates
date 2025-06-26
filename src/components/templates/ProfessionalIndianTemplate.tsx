
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const ProfessionalIndianTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Professional Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 -mx-8 -mt-8 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{data.personalInfo.fullName}</h1>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div className="space-y-1">
                <div className="flex items-center">
                  <span className="w-4">📧</span>
                  <span className="ml-2">{data.personalInfo.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4">📱</span>
                  <span className="ml-2">{data.personalInfo.phone}</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center">
                  <span className="w-4">🏠</span>
                  <span className="ml-2">{data.personalInfo.location}</span>
                </div>
                {data.personalInfo.linkedIn && (
                  <div className="flex items-center">
                    <span className="w-4">💼</span>
                    <span className="ml-2">{data.personalInfo.linkedIn}</span>
                  </div>
                )}
                {data.personalInfo.website && (
                  <div className="flex items-center">
                    <span className="w-4">🌐</span>
                    <span className="ml-2">{data.personalInfo.website}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-8">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-32 h-32 rounded object-cover border-4 border-white shadow-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* Executive Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-200">Executive Summary</h2>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm leading-relaxed text-gray-700">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      {/* Professional Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-5 pb-2 border-b-2 border-blue-200">Professional Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-6 p-5 bg-gray-50 rounded-lg border-l-4 border-indigo-400">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-xl text-blue-900">{exp.jobTitle}</h3>
                  <div className="text-indigo-600 font-semibold text-base">{exp.company}</div>
                  <div className="text-gray-600 text-sm">{exp.location}</div>
                </div>
                <div className="text-right">
                  <span className="bg-blue-900 text-white px-4 py-2 rounded font-medium text-sm">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
              </div>
              {exp.description && (
                <div className="mt-4">
                  <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Educational Background */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-200">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4 p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-400">
                <h3 className="font-bold text-base text-blue-900">{edu.degree}</h3>
                <div className="text-sm text-indigo-600 font-semibold">{edu.school}</div>
                <div className="text-sm text-gray-600">{edu.location}</div>
                <div className="text-sm text-gray-600">{edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm text-gray-600 font-medium">CGPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Technical Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-200">Core Competencies</h2>
            <div className="space-y-3">
              {data.skills.map((skill) => (
                <div key={skill.id} className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-blue-900">{skill.name}</span>
                    <span className="bg-blue-900 text-white px-3 py-1 rounded text-xs font-medium">{skill.level}</span>
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
