
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const ExecutiveBWTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{data.personalInfo.fullName}</h1>
            <div className="text-sm space-y-1">
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
                className="w-24 h-24 rounded object-cover border-2 border-black"
              />
            </div>
          )}
        </div>
        <div className="mt-4 h-px bg-black"></div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">EXECUTIVE SUMMARY</h2>
          <p className="text-sm leading-relaxed">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">PROFESSIONAL EXPERIENCE</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-6 border-l-4 border-black pl-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{exp.jobTitle}</h3>
                <span className="text-sm bg-black text-white px-2 py-1">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div className="font-semibold mb-2">{exp.company} • {exp.location}</div>
              {exp.description && (
                <p className="text-sm leading-relaxed">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4">EDUCATION</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <h3 className="font-bold">{edu.degree}</h3>
                <div className="text-sm">{edu.school}</div>
                <div className="text-sm">{edu.location}</div>
                <div className="text-sm">{edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4">CORE COMPETENCIES</h2>
            <div className="space-y-2">
              {data.skills.map((skill) => (
                <div key={skill.id} className="border border-black p-2 text-center">
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
