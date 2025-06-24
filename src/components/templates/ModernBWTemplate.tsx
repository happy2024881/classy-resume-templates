
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const ModernBWTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header */}
      <div className="bg-black text-white p-6 mb-6 -mx-8 -mt-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-3">{data.personalInfo.fullName}</h1>
            <div className="text-sm space-y-1">
              <div>{data.personalInfo.email} | {data.personalInfo.phone}</div>
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
                className="w-24 h-24 rounded object-cover border-2 border-white"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3 pb-1 border-b border-gray-300">About</h2>
          <p className="text-sm leading-relaxed">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3 pb-1 border-b border-gray-300">Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4 pl-4 border-l-2 border-gray-300">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold">{exp.jobTitle}</h3>
                <span className="text-sm">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
              </div>
              <div className="font-semibold mb-2 text-gray-600">{exp.company} • {exp.location}</div>
              {exp.description && (
                <p className="text-sm leading-relaxed">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mb-3 pb-1 border-b border-gray-300">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <h3 className="font-bold">{edu.degree}</h3>
                <div className="text-sm text-gray-600">{edu.school}</div>
                <div className="text-sm text-gray-600">{edu.location} • {edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm text-gray-600">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mb-3 pb-1 border-b border-gray-300">Skills</h2>
            <div className="space-y-2">
              {data.skills.map((skill) => (
                <div key={skill.id} className="flex justify-between">
                  <span className="text-sm">{skill.name}</span>
                  <span className="text-sm font-bold">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
