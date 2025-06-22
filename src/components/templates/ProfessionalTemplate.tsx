
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const ProfessionalTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header */}
      <div className="border-b-4 border-blue-600 pb-6 mb-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.personalInfo.fullName}</h1>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <div>{data.personalInfo.email}</div>
                <div>{data.personalInfo.phone}</div>
              </div>
              <div>
                <div>{data.personalInfo.location}</div>
                {data.personalInfo.linkedIn && <div>{data.personalInfo.linkedIn}</div>}
                {data.personalInfo.website && <div>{data.personalInfo.website}</div>}
              </div>
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-600"
              />
            </div>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-blue-600 mb-3 uppercase tracking-wide">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-gray-700">{data.personalInfo.summary}</p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wide">Professional Experience</h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-5 pb-4 border-b border-gray-200 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-base text-gray-900">{exp.jobTitle}</h3>
                    <span className="text-sm text-gray-600 font-medium">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-blue-600 mb-2">{exp.company} | {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          {data.education.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-blue-600 mb-3 uppercase tracking-wide">Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="font-bold text-sm">{edu.degree}</h3>
                  <div className="text-sm text-gray-700">{edu.school}</div>
                  <div className="text-sm text-gray-600">{edu.location}</div>
                  <div className="text-sm text-gray-600">{edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-gray-600">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {data.skills.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-blue-600 mb-3 uppercase tracking-wide">Skills</h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="flex justify-between items-center text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
