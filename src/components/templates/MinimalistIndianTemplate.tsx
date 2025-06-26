
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const MinimalistIndianTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-12 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-gray-800">
      {/* Clean Header */}
      <div className="text-center mb-12 pb-8 border-b border-gray-200">
        <h1 className="text-5xl font-light text-gray-900 mb-4 tracking-tight">{data.personalInfo.fullName}</h1>
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
            {data.personalInfo.linkedIn && data.personalInfo.website && (
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            )}
            {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
          </div>
        )}
        {data.personalInfo.photo && (
          <div className="mt-6">
            <img
              src={data.personalInfo.photo}
              alt="Profile"
              className="w-24 h-24 rounded object-cover border border-gray-200 mx-auto"
            />
          </div>
        )}
      </div>

      {/* Professional Summary */}
      {data.personalInfo.summary && (
        <div className="mb-12">
          <h2 className="text-xl font-light text-gray-700 mb-6 tracking-wide uppercase">Summary</h2>
          <p className="text-sm leading-relaxed text-gray-600 max-w-4xl">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-light text-gray-700 mb-6 tracking-wide uppercase">Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-8 pb-6 border-b border-gray-100 last:border-b-0">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-medium text-gray-900">{exp.jobTitle}</h3>
                <span className="text-sm text-gray-500">
                  {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div className="text-sm text-gray-600 mb-3">{exp.company} • {exp.location}</div>
              {exp.description && (
                <p className="text-sm leading-relaxed text-gray-600">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-16">
        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-xl font-light text-gray-700 mb-6 tracking-wide uppercase">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                <div className="text-sm text-gray-600">{edu.school}</div>
                <div className="text-sm text-gray-500">{edu.location} • {edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm text-gray-500">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-light text-gray-700 mb-6 tracking-wide uppercase">Skills</h2>
            <div className="space-y-2">
              {data.skills.map((skill) => (
                <div key={skill.id} className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
