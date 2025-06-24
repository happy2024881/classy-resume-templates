
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const StructuredBWTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header */}
      <div className="border-4 border-black p-4 mb-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">{data.personalInfo.fullName}</h1>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-right">
              <div>Email: {data.personalInfo.email}</div>
              <div>Phone: {data.personalInfo.phone}</div>
            </div>
            <div className="text-left">
              <div>Location: {data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div>LinkedIn: {data.personalInfo.linkedIn}</div>}
            </div>
          </div>
          {data.personalInfo.website && (
            <div className="text-sm mt-1">Website: {data.personalInfo.website}</div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <div className="border-2 border-black p-4">
            <h2 className="text-center font-bold mb-2 uppercase">Professional Summary</h2>
            <p className="text-sm leading-relaxed text-center">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-center font-bold mb-4 text-lg uppercase bg-black text-white py-2">Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4 border border-black p-3">
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <h3 className="font-bold">{exp.jobTitle}</h3>
                  <div className="text-sm">{exp.company}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm">{exp.location}</div>
                  <div className="text-sm">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</div>
                </div>
              </div>
              {exp.description && (
                <p className="text-sm leading-relaxed border-t border-gray-300 pt-2">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-center font-bold mb-3 bg-black text-white py-2 uppercase">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-3 border border-black p-3">
                <h3 className="font-bold text-sm">{edu.degree}</h3>
                <div className="text-xs">{edu.school}</div>
                <div className="text-xs">{edu.location}</div>
                <div className="text-xs">{edu.graduationDate}</div>
                {edu.gpa && <div className="text-xs">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-center font-bold mb-3 bg-black text-white py-2 uppercase">Skills</h2>
            <div className="space-y-1">
              {data.skills.map((skill) => (
                <div key={skill.id} className="border border-black p-2 text-center text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="block text-xs">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
