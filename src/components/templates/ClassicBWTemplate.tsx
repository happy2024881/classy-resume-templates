
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const ClassicBWTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header */}
      <div className="text-center border-b-2 border-black pb-4 mb-6">
        <h1 className="text-3xl font-bold mb-2">{data.personalInfo.fullName}</h1>
        <div className="text-sm flex justify-center space-x-4">
          <span>{data.personalInfo.email}</span>
          <span>•</span>
          <span>{data.personalInfo.phone}</span>
          <span>•</span>
          <span>{data.personalInfo.location}</span>
        </div>
        {(data.personalInfo.linkedIn || data.personalInfo.website) && (
          <div className="text-sm mt-1 flex justify-center space-x-4">
            {data.personalInfo.linkedIn && <span>{data.personalInfo.linkedIn}</span>}
            {data.personalInfo.linkedIn && data.personalInfo.website && <span>•</span>}
            {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
          </div>
        )}
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase tracking-wide">Summary</h2>
          <p className="text-sm leading-relaxed">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3 uppercase tracking-wide">Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold">{exp.jobTitle}</h3>
                <span className="text-sm">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
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
            <h2 className="text-lg font-bold mb-3 uppercase tracking-wide">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <h3 className="font-bold">{edu.degree}</h3>
                <div className="text-sm">{edu.school}</div>
                <div className="text-sm">{edu.location} • {edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mb-3 uppercase tracking-wide">Skills</h2>
            <div className="space-y-1">
              {data.skills.map((skill) => (
                <div key={skill.id} className="text-sm flex justify-between">
                  <span>{skill.name}</span>
                  <span className="font-semibold">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
