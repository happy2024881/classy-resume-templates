
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const SimpleBWTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-12 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-light mb-4">{data.personalInfo.fullName}</h1>
        <div className="text-sm grid grid-cols-2 gap-8">
          <div>
            <div>📧 {data.personalInfo.email}</div>
            <div>📱 {data.personalInfo.phone}</div>
            <div>📍 {data.personalInfo.location}</div>
          </div>
          <div>
            {data.personalInfo.linkedIn && <div>💼 {data.personalInfo.linkedIn}</div>}
            {data.personalInfo.website && <div>🌐 {data.personalInfo.website}</div>}
          </div>
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-light mb-4">About</h2>
          <p className="text-sm leading-relaxed">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-light mb-4">Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium">{exp.jobTitle}</h3>
                <span className="text-sm">{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</span>
              </div>
              <div className="text-sm mb-2 font-light">{exp.company}, {exp.location}</div>
              {exp.description && (
                <p className="text-sm leading-relaxed">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-12">
        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-2xl font-light mb-4">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <h3 className="font-medium">{edu.degree}</h3>
                <div className="text-sm font-light">{edu.school}</div>
                <div className="text-sm font-light">{edu.location}, {edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm font-light">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-2xl font-light mb-4">Skills</h2>
            <div className="space-y-2">
              {data.skills.map((skill) => (
                <div key={skill.id} className="flex justify-between">
                  <span className="text-sm">{skill.name}</span>
                  <span className="text-sm font-light">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
