
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const OceanTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-teal-600 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-white relative overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,40 Q300,10 600,40 T1200,40 L1200,120 L0,120 Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Header */}
      <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-6 mb-6 border border-white/30 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-cyan-100 drop-shadow-lg">{data.personalInfo.fullName}</h1>
            <div className="text-sm space-y-1 text-blue-200">
              <div className="flex items-center"><span className="mr-2">🌊</span>{data.personalInfo.email}</div>
              <div className="flex items-center"><span className="mr-2">🐚</span>{data.personalInfo.phone}</div>
              <div className="flex items-center"><span className="mr-2">🏝️</span>{data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div className="flex items-center"><span className="mr-2">⚓</span>{data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div className="flex items-center"><span className="mr-2">🌊</span>{data.personalInfo.website}</div>}
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white/50 shadow-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="relative mb-6">
          <h2 className="text-2xl font-bold mb-3 text-cyan-200 flex items-center">
            <span className="mr-2">🌺</span>About Me
          </h2>
          <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-lg">
            <p className="text-sm leading-relaxed text-white/90">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6 relative">
        {/* Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4 text-cyan-200 flex items-center">
                <span className="mr-2">🚢</span>Experience
              </h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 mb-4 border border-white/20 shadow-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-white">{exp.jobTitle}</h3>
                    <span className="text-sm bg-teal-500/30 backdrop-blur-sm border border-teal-300 px-3 py-1 rounded-full text-teal-100">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="font-semibold mb-2 text-teal-200">{exp.company} • {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-white/85">{exp.description}</p>
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
              <h2 className="text-xl font-bold mb-4 text-cyan-200 flex items-center">
                <span className="mr-2">🎓</span>Education
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 mb-4 border border-white/20 shadow-lg">
                  <h3 className="font-bold text-white">{edu.degree}</h3>
                  <div className="text-sm text-teal-200">{edu.school}</div>
                  <div className="text-sm text-blue-200">{edu.location}</div>
                  <div className="text-sm text-blue-200">{edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-blue-200">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-cyan-200 flex items-center">
                <span className="mr-2">⭐</span>Skills
              </h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="bg-white/15 backdrop-blur-lg rounded-2xl p-3 border border-white/20 shadow-lg">
                    <div className="flex justify-between">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm bg-teal-500/30 backdrop-blur-sm border border-teal-300 px-2 py-1 rounded-full text-teal-100">
                        {skill.level}
                      </span>
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
