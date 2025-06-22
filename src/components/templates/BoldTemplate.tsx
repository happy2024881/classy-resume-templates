
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const BoldTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-black text-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg">
      {/* Header */}
      <div className="text-center mb-8 pb-8 border-b-2 border-white">
        <h1 className="text-5xl font-black uppercase tracking-wider mb-4">{data.personalInfo.fullName}</h1>
        <div className="text-lg space-x-6">
          <span>{data.personalInfo.email}</span>
          <span>|</span>
          <span>{data.personalInfo.phone}</span>
          <span>|</span>
          <span>{data.personalInfo.location}</span>
        </div>
        {(data.personalInfo.linkedIn || data.personalInfo.website) && (
          <div className="text-sm mt-2 space-x-6">
            {data.personalInfo.linkedIn && <span>{data.personalInfo.linkedIn}</span>}
            {data.personalInfo.website && data.personalInfo.linkedIn && <span>|</span>}
            {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
          </div>
        )}
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-black uppercase tracking-wide mb-4 bg-white text-black px-4 py-2 inline-block">
            Executive Summary
          </h2>
          <p className="text-sm leading-relaxed bg-gray-900 p-4 rounded">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-black uppercase tracking-wide mb-6 bg-white text-black px-4 py-2 inline-block">
            Experience
          </h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-6 bg-gray-900 p-5 rounded">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.jobTitle}</h3>
                  <div className="text-gray-300 font-semibold">{exp.company} | {exp.location}</div>
                </div>
                <div className="text-sm bg-white text-black px-3 py-1 rounded font-bold">
                  {exp.startDate} - {exp.current ? 'PRESENT' : exp.endDate}
                </div>
              </div>
              {exp.description && (
                <p className="text-sm leading-relaxed text-gray-200">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-xl font-black uppercase tracking-wide mb-4 bg-white text-black px-4 py-2 inline-block">
              Education
            </h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4 bg-gray-900 p-4 rounded">
                <h3 className="font-bold text-white">{edu.degree}</h3>
                <div className="text-gray-300">{edu.school}</div>
                <div className="text-gray-400 text-sm">{edu.location}</div>
                <div className="text-gray-400 text-sm">{edu.graduationDate}</div>
                {edu.gpa && <div className="text-gray-400 text-sm">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-black uppercase tracking-wide mb-4 bg-white text-black px-4 py-2 inline-block">
              Skills
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {data.skills.map((skill) => (
                <div key={skill.id} className="bg-gray-900 p-3 rounded">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">{skill.name}</span>
                    <span className="text-xs bg-white text-black px-2 py-1 rounded font-bold">{skill.level}</span>
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
