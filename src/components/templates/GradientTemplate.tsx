
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const GradientTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-white relative overflow-hidden">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/10"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="backdrop-blur-lg bg-white/20 rounded-3xl p-8 border border-white/30 shadow-xl">
            <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">{data.personalInfo.fullName}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="backdrop-blur-md bg-white/20 rounded-2xl p-3 border border-white/30">
                <span className="text-2xl mr-2">📧</span>
                {data.personalInfo.email}
              </div>
              <div className="backdrop-blur-md bg-white/20 rounded-2xl p-3 border border-white/30">
                <span className="text-2xl mr-2">📱</span>
                {data.personalInfo.phone}
              </div>
              <div className="backdrop-blur-md bg-white/20 rounded-2xl p-3 border border-white/30">
                <span className="text-2xl mr-2">📍</span>
                {data.personalInfo.location}
              </div>
            </div>
            {(data.personalInfo.linkedIn || data.personalInfo.website) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4">
                {data.personalInfo.linkedIn && (
                  <div className="backdrop-blur-md bg-white/20 rounded-2xl p-3 border border-white/30">
                    <span className="text-2xl mr-2">💼</span>
                    {data.personalInfo.linkedIn}
                  </div>
                )}
                {data.personalInfo.website && (
                  <div className="backdrop-blur-md bg-white/20 rounded-2xl p-3 border border-white/30">
                    <span className="text-2xl mr-2">🌐</span>
                    {data.personalInfo.website}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-8">
            <div className="backdrop-blur-lg bg-white/20 rounded-3xl p-6 border border-white/30 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-3xl mr-3">✨</span>
                About Me
              </h2>
              <p className="text-sm leading-relaxed text-gray-100">{data.personalInfo.summary}</p>
            </div>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-white flex items-center justify-center">
              <span className="text-3xl mr-3">🚀</span>
              Experience
            </h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-6">
                <div className="backdrop-blur-lg bg-white/20 rounded-3xl p-6 border border-white/30 shadow-xl">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-white">{exp.jobTitle}</h3>
                    <span className="text-sm backdrop-blur-md bg-white/30 rounded-full px-4 py-2 border border-white/30">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-gray-100 font-semibold mb-3 flex items-center">
                    <span className="text-xl mr-2">🏢</span>
                    {exp.company} • {exp.location}
                  </div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-gray-100">{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 gap-6">
          {/* Education */}
          {data.education.length > 0 && (
            <div className="backdrop-blur-lg bg-white/20 rounded-3xl p-6 border border-white/30 shadow-xl">
              <h2 className="text-xl font-bold mb-4 text-white flex items-center">
                <span className="text-2xl mr-3">🎓</span>
                Education
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="font-bold text-white">{edu.degree}</h3>
                  <div className="text-sm text-gray-100">{edu.school}</div>
                  <div className="text-sm text-gray-200">{edu.location} • {edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-gray-200">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="backdrop-blur-lg bg-white/20 rounded-3xl p-6 border border-white/30 shadow-xl">
              <h2 className="text-xl font-bold mb-4 text-white flex items-center">
                <span className="text-2xl mr-3">⚡</span>
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span key={skill.id} className={`backdrop-blur-md bg-white/30 border border-white/30 px-3 py-1 rounded-full text-sm font-medium text-white`}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
