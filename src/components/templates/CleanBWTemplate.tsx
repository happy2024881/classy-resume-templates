
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const CleanBWTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-10 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black font-light">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-thin mb-3 tracking-wider">{data.personalInfo.fullName}</h1>
        <div className="flex justify-center space-x-3 text-sm">
          <span>{data.personalInfo.email}</span>
          <span>|</span>
          <span>{data.personalInfo.phone}</span>
          <span>|</span>
          <span>{data.personalInfo.location}</span>
        </div>
        {(data.personalInfo.linkedIn || data.personalInfo.website) && (
          <div className="flex justify-center space-x-3 text-sm mt-1">
            {data.personalInfo.linkedIn && <span>{data.personalInfo.linkedIn}</span>}
            {data.personalInfo.linkedIn && data.personalInfo.website && <span>|</span>}
            {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
          </div>
        )}
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8 text-center">
          <p className="text-sm leading-relaxed italic max-w-3xl mx-auto">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-center text-lg font-normal mb-6 tracking-widest uppercase">Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-6 text-center">
              <h3 className="font-medium text-lg">{exp.jobTitle}</h3>
              <div className="text-sm mb-1">{exp.company} • {exp.location}</div>
              <div className="text-sm text-gray-600 mb-3">
                {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
              </div>
              {exp.description && (
                <p className="text-sm leading-relaxed max-w-2xl mx-auto">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-12">
        {/* Education */}
        {data.education.length > 0 && (
          <div className="text-center">
            <h2 className="text-lg font-normal mb-6 tracking-widest uppercase">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <h3 className="font-medium">{edu.degree}</h3>
                <div className="text-sm">{edu.school}</div>
                <div className="text-sm text-gray-600">{edu.location}</div>
                <div className="text-sm text-gray-600">{edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm text-gray-600">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="text-center">
            <h2 className="text-lg font-normal mb-6 tracking-widest uppercase">Skills</h2>
            <div className="space-y-1">
              {data.skills.map((skill) => (
                <div key={skill.id} className="text-sm">
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
