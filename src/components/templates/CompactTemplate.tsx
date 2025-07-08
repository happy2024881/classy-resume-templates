
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const CompactTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header */}
      <div className="flex justify-between items-start mb-6 pb-4 border-b-2 border-gray-300">
        <div>
          <h1 className="text-2xl font-bold">{data.personalInfo.fullName}</h1>
          <div className="text-sm text-gray-600 mt-1">
            {data.personalInfo.email} • {data.personalInfo.phone} • {data.personalInfo.location}
          </div>
          {(data.personalInfo.linkedIn || data.personalInfo.website) && (
            <div className="text-sm text-gray-600">
              {data.personalInfo.linkedIn && <span>{data.personalInfo.linkedIn}</span>}
              {data.personalInfo.website && data.personalInfo.linkedIn && <span> • </span>}
              {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
            </div>
          )}
        </div>
        {data.personalInfo.photo && (
          <div className="ml-4">
            <img
              src={data.personalInfo.photo}
              alt="Profile"
              className="w-16 h-16 rounded object-cover border-2 border-gray-300"
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-2 space-y-6">
          {/* Summary */}
          {data.personalInfo.summary && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-2">Summary</h2>
              <p className="text-xs leading-relaxed">{data.personalInfo.summary}</p>
            </div>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-2">Experience</h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-3">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-sm">{exp.jobTitle}</h3>
                    <span className="text-xs text-gray-600">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-xs text-gray-700 font-medium">{exp.company} | {exp.location}</div>
                  {exp.description && (
                    <p className="text-xs mt-1 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-2">Skills</h2>
              <div className="space-y-1">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="text-xs">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-2">Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <h3 className="font-semibold text-xs">{edu.degree}</h3>
                  <div className="text-xs text-gray-700">{edu.school}</div>
                  <div className="text-xs text-gray-600">{edu.location}</div>
                  <div className="text-xs text-gray-600">{edu.graduationDate}</div>
                  {edu.gpa && <div className="text-xs text-gray-600">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
