
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const PastelTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-200 to-purple-200 p-6 mb-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-light mb-2 text-purple-800">{data.personalInfo.fullName}</h1>
            <div className="text-sm space-y-1 text-purple-700">
              <div>✉️ {data.personalInfo.email}</div>
              <div>📱 {data.personalInfo.phone}</div>
              <div>📍 {data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div>🔗 {data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div>🌐 {data.personalInfo.website}</div>}
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-2xl font-medium text-purple-800 mb-3">✨ About Me</h2>
          <div className="bg-white/70 p-4 rounded-2xl shadow-sm border border-purple-100">
            <p className="text-sm leading-relaxed text-gray-700">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6">
        {/* Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-medium text-purple-800 mb-4">💼 Experience</h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="bg-white/70 p-4 rounded-2xl shadow-sm border border-blue-100 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-indigo-800">{exp.jobTitle}</h3>
                    <span className="text-sm bg-gradient-to-r from-pink-200 to-purple-200 px-3 py-1 rounded-full text-purple-800">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-purple-600 font-medium mb-2">{exp.company} • {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-xl font-medium text-purple-800 mb-4">🎓 Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="bg-white/70 p-4 rounded-2xl shadow-sm border border-green-100 mb-4">
                  <h3 className="font-semibold text-green-800">{edu.degree}</h3>
                  <div className="text-sm text-green-600">{edu.school}</div>
                  <div className="text-sm text-gray-600">{edu.location}</div>
                  <div className="text-sm text-gray-600">{edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-gray-600">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-xl font-medium text-purple-800 mb-4">⚡ Skills</h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="bg-white/70 p-3 rounded-xl shadow-sm border border-yellow-100">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-orange-800">{skill.name}</span>
                      <span className="text-xs bg-gradient-to-r from-yellow-200 to-orange-200 px-2 py-1 rounded-full text-orange-800">{skill.level}</span>
                    </div>
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
