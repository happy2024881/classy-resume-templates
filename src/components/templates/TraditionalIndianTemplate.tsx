
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const TraditionalIndianTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header with traditional border */}
      <div className="border-4 border-orange-500 border-double p-6 mb-6 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-800 mb-2">{data.personalInfo.fullName}</h1>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
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
      </div>

      {/* Professional Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-orange-700 mb-3 border-b-2 border-orange-300 pb-1">Professional Summary</h2>
          <p className="text-sm leading-relaxed">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-orange-700 mb-4 border-b-2 border-orange-300 pb-1">Work Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4 border-l-4 border-orange-400 pl-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-lg">{exp.jobTitle}</h3>
                <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div className="text-orange-600 font-semibold mb-2">{exp.company} • {exp.location}</div>
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
            <h2 className="text-xl font-bold text-orange-700 mb-3 border-b-2 border-orange-300 pb-1">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-3 bg-orange-50 p-3 rounded border-l-4 border-orange-400">
                <h3 className="font-bold">{edu.degree}</h3>
                <div className="text-sm text-orange-600">{edu.school}</div>
                <div className="text-sm">{edu.location} • {edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-orange-700 mb-3 border-b-2 border-orange-300 pb-1">Technical Skills</h2>
            <div className="space-y-2">
              {data.skills.map((skill) => (
                <div key={skill.id} className="bg-orange-50 p-2 rounded border-l-4 border-orange-400">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-orange-600">{skill.level}</span>
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
