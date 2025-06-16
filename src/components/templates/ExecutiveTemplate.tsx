
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const ExecutiveTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-10 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header */}
      <div className="text-center mb-8 border-b-4 border-gray-800 pb-6">
        <h1 className="text-4xl font-bold mb-2">{data.personalInfo.fullName}</h1>
        <div className="text-sm text-gray-600 mb-2">
          {data.personalInfo.email} • {data.personalInfo.phone} • {data.personalInfo.location}
        </div>
        {(data.personalInfo.linkedIn || data.personalInfo.website) && (
          <div className="text-sm text-gray-600">
            {data.personalInfo.linkedIn && <span>{data.personalInfo.linkedIn}</span>}
            {data.personalInfo.website && data.personalInfo.linkedIn && <span> • </span>}
            {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
          </div>
        )}
      </div>

      {/* Executive Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">EXECUTIVE SUMMARY</h2>
          <p className="text-sm leading-relaxed text-justify">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Professional Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">PROFESSIONAL EXPERIENCE</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-6">
              <div className="border-l-4 border-gray-800 pl-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold">{exp.jobTitle}</h3>
                  <span className="text-sm font-semibold text-gray-600">
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="text-base font-semibold text-gray-700 mb-2">{exp.company} | {exp.location}</div>
                {exp.description && (
                  <p className="text-sm leading-relaxed text-gray-800">{exp.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">EDUCATION</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <h3 className="font-bold">{edu.degree}</h3>
                <div className="text-sm font-semibold text-gray-700">{edu.school}</div>
                <div className="text-sm text-gray-600">{edu.location} • {edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm text-gray-600">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Core Competencies */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">CORE COMPETENCIES</h2>
            <div className="space-y-2">
              {data.skills.map((skill) => (
                <div key={skill.id} className="flex justify-between items-center">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
