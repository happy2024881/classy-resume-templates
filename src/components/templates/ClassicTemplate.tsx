
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const ClassicTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-4 mb-6">
        <div className="flex items-center justify-center space-x-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold uppercase tracking-wide">{data.personalInfo.fullName}</h1>
            <div className="mt-2 text-sm space-x-4">
              <span>{data.personalInfo.email}</span>
              <span>•</span>
              <span>{data.personalInfo.phone}</span>
              <span>•</span>
              <span>{data.personalInfo.location}</span>
            </div>
            {(data.personalInfo.linkedIn || data.personalInfo.website) && (
              <div className="mt-1 text-sm space-x-4">
                {data.personalInfo.linkedIn && <span>{data.personalInfo.linkedIn}</span>}
                {data.personalInfo.website && data.personalInfo.linkedIn && <span>•</span>}
                {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
              </div>
            )}
          </div>
          {data.personalInfo.photo && (
            <div>
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-800"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-600 mb-2">Professional Summary</h2>
          <p className="text-sm leading-relaxed">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-600 mb-3">Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-base">{exp.jobTitle}</h3>
                <span className="text-sm text-gray-600">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div className="text-sm font-semibold text-gray-700">{exp.company} | {exp.location}</div>
              {exp.description && (
                <p className="text-sm mt-2 leading-relaxed">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-600 mb-3">Education</h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-base">{edu.degree}</h3>
                <span className="text-sm text-gray-600">{edu.graduationDate}</span>
              </div>
              <div className="text-sm text-gray-700">{edu.school} | {edu.location}</div>
              {edu.gpa && <div className="text-sm text-gray-600">GPA: {edu.gpa}</div>}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-lg font-bold uppercase border-b border-gray-600 mb-3">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {data.skills.map((skill) => (
              <div key={skill.id} className="text-sm">
                <span className="font-semibold">{skill.name}</span> - {skill.level}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
