
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const TypewriterBWTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black font-mono">
      {/* Header */}
      <div className="border-2 border-black p-4 mb-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2 tracking-wider">{data.personalInfo.fullName.toUpperCase()}</h1>
          <div className="text-xs space-y-1">
            <div>EMAIL: {data.personalInfo.email}</div>
            <div>PHONE: {data.personalInfo.phone}</div>
            <div>LOCATION: {data.personalInfo.location}</div>
            {data.personalInfo.linkedIn && <div>LINKEDIN: {data.personalInfo.linkedIn}</div>}
            {data.personalInfo.website && <div>WEBSITE: {data.personalInfo.website}</div>}
          </div>
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-sm font-bold mb-2 tracking-widest">SUMMARY:</h2>
          <div className="border border-black p-3 bg-gray-50">
            <p className="text-xs leading-relaxed">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold mb-3 tracking-widest">WORK EXPERIENCE:</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4 border border-black">
              <div className="bg-black text-white p-2 text-xs">
                <div className="flex justify-between">
                  <span>{exp.jobTitle.toUpperCase()}</span>
                  <span>{exp.startDate} - {exp.current ? 'PRESENT' : exp.endDate}</span>
                </div>
              </div>
              <div className="p-3">
                <div className="text-xs font-bold mb-2">{exp.company.toUpperCase()} - {exp.location.toUpperCase()}</div>
                {exp.description && (
                  <p className="text-xs leading-relaxed">{exp.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-sm font-bold mb-3 tracking-widest">EDUCATION:</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-3 border border-black p-2">
                <h3 className="text-xs font-bold">{edu.degree.toUpperCase()}</h3>
                <div className="text-xs">{edu.school.toUpperCase()}</div>
                <div className="text-xs">{edu.location.toUpperCase()}</div>
                <div className="text-xs">{edu.graduationDate}</div>
                {edu.gpa && <div className="text-xs">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-sm font-bold mb-3 tracking-widest">SKILLS:</h2>
            <div className="space-y-1">
              {data.skills.map((skill) => (
                <div key={skill.id} className="border border-black p-2 text-center">
                  <div className="text-xs font-bold">{skill.name.toUpperCase()}</div>
                  <div className="text-xs">[{skill.level.toUpperCase()}]</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center border-t-2 border-black pt-2">
        <div className="text-xs tracking-widest">--- END OF DOCUMENT ---</div>
      </div>
    </div>
  );
};
