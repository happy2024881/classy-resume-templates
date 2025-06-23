
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const DarkModeTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gray-900 text-gray-100 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 mb-6 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-white">{data.personalInfo.fullName}</h1>
            <div className="text-sm space-y-1 text-gray-200">
              <div>{data.personalInfo.email}</div>
              <div>{data.personalInfo.phone}</div>
              <div>{data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div>{data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div>{data.personalInfo.website}</div>}
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded-lg object-cover border-2 border-white"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-3">Summary</h2>
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-400">
            <p className="text-sm leading-relaxed text-gray-300">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6">
        {/* Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Experience</h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="bg-gray-800 p-4 rounded-lg mb-4 border border-gray-700">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-blue-400">{exp.jobTitle}</h3>
                    <span className="text-sm bg-purple-600 text-white px-3 py-1 rounded">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-green-400 font-semibold mb-2">{exp.company} • {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-gray-300">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-purple-400 mb-4">Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="bg-gray-800 p-4 rounded-lg mb-4 border border-gray-700">
                  <h3 className="font-bold text-blue-400">{edu.degree}</h3>
                  <div className="text-sm text-green-400">{edu.school}</div>
                  <div className="text-sm text-gray-400">{edu.location}</div>
                  <div className="text-sm text-gray-400">{edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-gray-400">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-purple-400 mb-4">Skills</h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                    <div className="flex justify-between">
                      <span className="font-medium text-blue-400">{skill.name}</span>
                      <span className="text-sm bg-green-600 text-white px-2 py-1 rounded">{skill.level}</span>
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
