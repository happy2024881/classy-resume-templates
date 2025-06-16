
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const AcademicTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-10 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-serif font-bold mb-2">{data.personalInfo.fullName}</h1>
        <hr className="w-1/3 mx-auto border-t-2 border-gray-400 mb-3" />
        <div className="text-sm text-gray-700 space-y-1">
          <div>{data.personalInfo.email} | {data.personalInfo.phone}</div>
          <div>{data.personalInfo.location}</div>
          {data.personalInfo.linkedIn && <div>{data.personalInfo.linkedIn}</div>}
          {data.personalInfo.website && <div>{data.personalInfo.website}</div>}
        </div>
      </div>

      {/* Research Interests / Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-lg font-serif font-bold mb-3 border-b border-gray-400 pb-1">RESEARCH INTERESTS</h2>
          <p className="text-sm leading-relaxed text-justify">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Education (Primary focus for academic) */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-serif font-bold mb-3 border-b border-gray-400 pb-1">EDUCATION</h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-base">{edu.degree}</h3>
                <span className="text-sm italic">{edu.graduationDate}</span>
              </div>
              <div className="text-sm italic">{edu.school}, {edu.location}</div>
              {edu.gpa && <div className="text-sm">GPA: {edu.gpa}</div>}
            </div>
          ))}
        </div>
      )}

      {/* Academic/Professional Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-serif font-bold mb-3 border-b border-gray-400 pb-1">ACADEMIC EXPERIENCE</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold">{exp.jobTitle}</h3>
                <span className="text-sm italic">
                  {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div className="text-sm italic mb-2">{exp.company}, {exp.location}</div>
              {exp.description && (
                <p className="text-sm leading-relaxed">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Technical Skills */}
      {data.skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-serif font-bold mb-3 border-b border-gray-400 pb-1">TECHNICAL SKILLS</h2>
          <div className="grid grid-cols-1 gap-2">
            {data.skills.map((skill) => (
              <div key={skill.id} className="text-sm">
                <span className="font-semibold">{skill.name}:</span> {skill.level}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Publications Section (Placeholder) */}
      <div className="mb-6">
        <h2 className="text-lg font-serif font-bold mb-3 border-b border-gray-400 pb-1">PUBLICATIONS</h2>
        <p className="text-sm italic text-gray-600">Available upon request</p>
      </div>

      {/* References */}
      <div>
        <h2 className="text-lg font-serif font-bold mb-3 border-b border-gray-400 pb-1">REFERENCES</h2>
        <p className="text-sm italic text-gray-600">Available upon request</p>
      </div>
    </div>
  );
};
