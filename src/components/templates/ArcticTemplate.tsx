
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const ArcticTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-cyan-50 to-slate-100 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl p-6 mb-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-3 drop-shadow-lg">{data.personalInfo.fullName}</h1>
            <div className="text-sm space-y-1 text-cyan-100">
              <div className="flex items-center"><span className="mr-2">❄️</span>{data.personalInfo.email}</div>
              <div className="flex items-center"><span className="mr-2">🧊</span>{data.personalInfo.phone}</div>
              <div className="flex items-center"><span className="mr-2">🏔️</span>{data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div className="flex items-center"><span className="mr-2">⛄</span>{data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div className="flex items-center"><span className="mr-2">🌨️</span>{data.personalInfo.website}</div>}
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-cyan-200 shadow-xl"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-3 text-cyan-700 flex items-center">
            <span className="mr-2">✨</span>About Me
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border-2 border-cyan-200">
            <p className="text-sm leading-relaxed text-gray-700">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6">
        {/* Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4 text-cyan-700 flex items-center">
                <span className="mr-2">🎯</span>Experience
              </h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-4 shadow-lg border-2 border-cyan-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-gray-800">{exp.jobTitle}</h3>
                    <span className="text-sm bg-cyan-600 text-white px-3 py-1 rounded-full shadow-sm">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="font-semibold mb-2 text-cyan-700">{exp.company} • {exp.location}</div>
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
              <h2 className="text-xl font-bold mb-4 text-cyan-700 flex items-center">
                <span className="mr-2">🎓</span>Education
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-4 shadow-lg border-2 border-cyan-200">
                  <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                  <div className="text-sm text-cyan-700">{edu.school}</div>
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
              <h2 className="text-xl font-bold mb-4 text-cyan-700 flex items-center">
                <span className="mr-2">⚡</span>Skills
              </h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-lg border-2 border-cyan-200">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm bg-cyan-600 text-white px-2 py-1 rounded-full">{skill.level}</span>
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
