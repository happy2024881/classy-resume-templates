
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const CorporateIndianTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Professional Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6 -mx-8 -mt-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-3">{data.personalInfo.fullName}</h1>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div>📧 {data.personalInfo.email}</div>
                <div>📱 {data.personalInfo.phone}</div>
              </div>
              <div>
                <div>🏠 {data.personalInfo.location}</div>
                {data.personalInfo.linkedIn && <div>💼 {data.personalInfo.linkedIn}</div>}
                {data.personalInfo.website && <div>🌐 {data.personalInfo.website}</div>}
              </div>
            </div>
          </div>
          {data.personalInfo.photo && (
            <div>
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded object-cover border-4 border-white"
              />
            </div>
          )}
        </div>
      </div>

      {/* Career Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-800 mb-3 uppercase tracking-wide">Career Summary</h2>
          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
            <p className="text-sm leading-relaxed">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      {/* Professional Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-800 mb-4 uppercase tracking-wide">Professional Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-6 pb-4 border-b border-gray-200 last:border-b-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{exp.jobTitle}</h3>
                  <div className="text-blue-700 font-semibold">{exp.company} | {exp.location}</div>
                </div>
                <div className="text-right">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
              </div>
              {exp.description && (
                <div className="mt-3">
                  <p className="text-sm leading-relaxed">{exp.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Educational Qualifications */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-blue-800 mb-4 uppercase tracking-wide">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4 bg-gray-50 p-4 rounded border-l-4 border-orange-400">
                <h3 className="font-bold text-base">{edu.degree}</h3>
                <div className="text-sm text-orange-600 font-semibold">{edu.school}</div>
                <div className="text-sm text-gray-600">{edu.location}</div>
                <div className="text-sm text-gray-600">{edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm text-gray-600 font-medium">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Technical Competencies */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-blue-800 mb-4 uppercase tracking-wide">Skills</h2>
            <div className="space-y-3">
              {data.skills.map((skill) => (
                <div key={skill.id} className="bg-gray-50 p-3 rounded border-l-4 border-orange-400">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
