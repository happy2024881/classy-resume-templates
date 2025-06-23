
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const WatercolorTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-gray-800 relative overflow-hidden">
      {/* Watercolor Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-200 via-blue-200 to-indigo-200 rounded-full opacity-30 blur-3xl -z-10"></div>
      
      {/* Header */}
      <div className="relative z-10 mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-5xl font-serif mb-4 text-gray-800">{data.personalInfo.fullName}</h1>
            <div className="text-sm text-gray-600 space-y-1">
              <div>{data.personalInfo.email}</div>
              <div>{data.personalInfo.phone}</div>
              <div>{data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div>{data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div>{data.personalInfo.website}</div>}
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-8">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8 relative">
          <div className="absolute -left-4 -top-2 w-20 h-20 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20 blur-xl"></div>
          <h2 className="text-2xl font-serif mb-4 text-gray-700 relative z-10">About</h2>
          <p className="text-base leading-relaxed text-gray-700 relative z-10 font-light">{data.personalInfo.summary}</p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-8">
        {/* Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-8 relative">
              <div className="absolute -right-4 -top-2 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 blur-xl"></div>
              <h2 className="text-2xl font-serif mb-6 text-gray-700 relative z-10">Experience</h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-6 relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium text-gray-800">{exp.jobTitle}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-gray-600 mb-3 font-medium">{exp.company} • {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-gray-700 font-light">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-8">
          {/* Education */}
          {data.education.length > 0 && (
            <div className="relative">
              <div className="absolute -left-4 -top-2 w-16 h-16 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 blur-xl"></div>
              <h2 className="text-xl font-serif mb-4 text-gray-700 relative z-10">Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4 relative z-10">
                  <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                  <div className="text-sm text-gray-600">{edu.school}</div>
                  <div className="text-sm text-gray-500">{edu.location} • {edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-gray-500">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="relative">
              <div className="absolute -right-4 -top-2 w-18 h-18 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20 blur-xl"></div>
              <h2 className="text-xl font-serif mb-4 text-gray-700 relative z-10">Skills</h2>
              <div className="space-y-2 relative z-10">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{skill.level}</span>
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
