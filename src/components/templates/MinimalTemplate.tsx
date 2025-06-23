
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const MinimalTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-12 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black font-light">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-5xl font-thin mb-4 tracking-wide">{data.personalInfo.fullName}</h1>
            <div className="text-sm text-gray-600 space-y-1">
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
                className="w-24 h-24 rounded object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-12">
          <p className="text-base leading-relaxed text-gray-800 italic">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-12">
          <h2 className="text-lg font-normal mb-8 tracking-widest uppercase text-gray-700">Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-8">
              <div className="mb-2">
                <h3 className="text-lg font-medium">{exp.jobTitle}</h3>
                <div className="text-sm text-gray-600">{exp.company} • {exp.location}</div>
                <div className="text-sm text-gray-500">
                  {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                </div>
              </div>
              {exp.description && (
                <p className="text-sm leading-relaxed text-gray-700 mt-3">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-12">
        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-normal mb-6 tracking-widest uppercase text-gray-700">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-6">
                <h3 className="font-medium">{edu.degree}</h3>
                <div className="text-sm text-gray-600">{edu.school}</div>
                <div className="text-sm text-gray-500">{edu.location} • {edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm text-gray-500">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-lg font-normal mb-6 tracking-widest uppercase text-gray-700">Skills</h2>
            <div className="space-y-2">
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
