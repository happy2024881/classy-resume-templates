
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const TimelineBWTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header */}
      <div className="text-center mb-8 pb-4 border-b-2 border-black">
        <h1 className="text-4xl font-bold mb-4">{data.personalInfo.fullName}</h1>
        <div className="text-sm space-x-4">
          <span>{data.personalInfo.email}</span>
          <span>•</span>
          <span>{data.personalInfo.phone}</span>
          <span>•</span>
          <span>{data.personalInfo.location}</span>
        </div>
        {(data.personalInfo.linkedIn || data.personalInfo.website) && (
          <div className="text-sm mt-2 space-x-4">
            {data.personalInfo.linkedIn && <span>{data.personalInfo.linkedIn}</span>}
            {data.personalInfo.linkedIn && data.personalInfo.website && <span>•</span>}
            {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
          </div>
        )}
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">PROFILE</h2>
          <p className="text-sm leading-relaxed">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience Timeline */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">EXPERIENCE</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-black"></div>
            {data.experience.map((exp, index) => (
              <div key={exp.id} className="relative pl-12 pb-6">
                <div className="absolute left-2 w-4 h-4 bg-black rounded-full border-2 border-white"></div>
                <div className="bg-gray-50 p-4 border border-black">
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
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4">EDUCATION</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4 border border-black p-3">
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
            <h2 className="text-xl font-bold mb-4">SKILLS</h2>
            <div className="grid grid-cols-1 gap-2">
              {data.skills.map((skill) => (
                <div key={skill.id} className="border border-black p-2 text-center">
                  <span className="font-medium text-sm">{skill.name}</span>
                  <div className="text-xs mt-1">{skill.level}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
