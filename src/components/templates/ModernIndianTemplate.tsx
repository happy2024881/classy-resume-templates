
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const ModernIndianTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header with Indian tricolor inspiration */}
      <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 p-1">
        <div className="bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.personalInfo.fullName}</h1>
              <div className="text-sm text-gray-600 space-y-1">
                <div>✉ {data.personalInfo.email} | ☎ {data.personalInfo.phone}</div>
                <div>📍 {data.personalInfo.location}</div>
                {(data.personalInfo.linkedIn || data.personalInfo.website) && (
                  <div>
                    {data.personalInfo.linkedIn && <span>🔗 {data.personalInfo.linkedIn}</span>}
                    {data.personalInfo.linkedIn && data.personalInfo.website && <span> | </span>}
                    {data.personalInfo.website && <span>🌐 {data.personalInfo.website}</span>}
                  </div>
                )}
              </div>
            </div>
            {data.personalInfo.photo && (
              <div>
                <img
                  src={data.personalInfo.photo}
                  alt="Profile"
                  className="w-24 h-24 rounded object-cover border-4 border-orange-400"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Professional Summary */}
        {data.personalInfo.summary && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-orange-600 mb-3 bg-orange-50 px-3 py-2 rounded">CAREER OBJECTIVE</h2>
            <p className="text-sm leading-relaxed">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-orange-600 mb-4 bg-orange-50 px-3 py-2 rounded">PROFESSIONAL EXPERIENCE</h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-base">{exp.jobTitle}</h3>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="text-sm font-semibold text-orange-600 mb-2">{exp.company}, {exp.location}</div>
                {exp.description && (
                  <p className="text-sm leading-relaxed">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 gap-6">
          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-orange-600 mb-3 bg-orange-50 px-3 py-2 rounded">EDUCATION</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-3 p-3 bg-green-50 rounded border-l-4 border-green-400">
                  <h3 className="font-bold text-sm">{edu.degree}</h3>
                  <div className="text-sm text-green-700">{edu.school}</div>
                  <div className="text-xs text-gray-600">{edu.location} • {edu.graduationDate}</div>
                  {edu.gpa && <div className="text-xs text-gray-600">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-orange-600 mb-3 bg-orange-50 px-3 py-2 rounded">SKILLS</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="bg-gradient-to-r from-orange-100 to-green-100 px-3 py-1 rounded-full text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-xs text-gray-600 ml-1">({skill.level})</span>
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
