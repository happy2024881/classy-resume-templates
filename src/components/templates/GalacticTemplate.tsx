
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const GalacticTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-black to-indigo-900 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-white relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Cosmic nebula effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-purple-400/30 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10"></div>
            <div className="relative">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
                {data.personalInfo.fullName}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="backdrop-blur-md bg-white/10 rounded-2xl p-3 border border-purple-400/30 flex items-center justify-center">
                  <span className="text-2xl mr-2">🚀</span>
                  {data.personalInfo.email}
                </div>
                <div className="backdrop-blur-md bg-white/10 rounded-2xl p-3 border border-blue-400/30 flex items-center justify-center">
                  <span className="text-2xl mr-2">🌌</span>
                  {data.personalInfo.phone}
                </div>
                <div className="backdrop-blur-md bg-white/10 rounded-2xl p-3 border border-cyan-400/30 flex items-center justify-center">
                  <span className="text-2xl mr-2">🪐</span>
                  {data.personalInfo.location}
                </div>
              </div>
              {(data.personalInfo.linkedIn || data.personalInfo.website) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4">
                  {data.personalInfo.linkedIn && (
                    <div className="backdrop-blur-md bg-white/10 rounded-2xl p-3 border border-pink-400/30 flex items-center justify-center">
                      <span className="text-2xl mr-2">⭐</span>
                      {data.personalInfo.linkedIn}
                    </div>
                  )}
                  {data.personalInfo.website && (
                    <div className="backdrop-blur-md bg-white/10 rounded-2xl p-3 border border-indigo-400/30 flex items-center justify-center">
                      <span className="text-2xl mr-2">🌟</span>
                      {data.personalInfo.website}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-8">
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-6 border border-purple-400/30 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-pink-600/5"></div>
              <div className="relative">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent flex items-center">
                  <span className="text-3xl mr-3">🌠</span>
                  Mission Statement
                </h2>
                <p className="text-sm leading-relaxed text-gray-200">{data.personalInfo.summary}</p>
              </div>
            </div>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent flex items-center justify-center">
              <span className="text-3xl mr-3">🛸</span>
              Cosmic Journey
            </h2>
            {data.experience.map((exp, index) => (
              <div key={exp.id} className="mb-6">
                <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-6 border border-purple-400/30 shadow-xl relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${
                    index % 3 === 0 ? 'from-purple-400 via-pink-400 to-purple-400' :
                    index % 3 === 1 ? 'from-blue-400 via-cyan-400 to-blue-400' :
                    'from-indigo-400 via-purple-400 to-indigo-400'
                  }`}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-blue-600/5"></div>
                  <div className="relative pt-2">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-purple-200">{exp.jobTitle}</h3>
                      <span className="text-sm backdrop-blur-md bg-white/15 rounded-full px-4 py-2 border border-purple-400/30">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <div className="text-cyan-300 font-semibold mb-3 flex items-center">
                      <span className="text-xl mr-2">🏢</span>
                      {exp.company} • {exp.location}
                    </div>
                    {exp.description && (
                      <p className="text-sm leading-relaxed text-gray-200">{exp.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 gap-6">
          {/* Education */}
          {data.education.length > 0 && (
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-6 border border-purple-400/30 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5"></div>
              <div className="relative">
                <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent flex items-center">
                  <span className="text-2xl mr-3">🎓</span>
                  Academy
                </h2>
                {data.education.map((edu) => (
                  <div key={edu.id} className="mb-4 p-4 backdrop-blur-md bg-white/5 rounded-2xl border border-purple-400/20">
                    <h3 className="font-bold text-purple-200">{edu.degree}</h3>
                    <div className="text-sm text-cyan-300">{edu.school}</div>
                    <div className="text-sm text-gray-300">{edu.location} • {edu.graduationDate}</div>
                    {edu.gpa && <div className="text-sm text-gray-300">GPA: {edu.gpa}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-6 border border-purple-400/30 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
              <div className="relative">
                <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  Powers
                </h2>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, index) => (
                    <span key={skill.id} className={`backdrop-blur-md bg-white/10 border px-3 py-1 rounded-full text-sm font-medium ${
                      index % 4 === 0 ? 'border-purple-400/30 text-purple-200' :
                      index % 4 === 1 ? 'border-blue-400/30 text-blue-200' :
                      index % 4 === 2 ? 'border-cyan-400/30 text-cyan-200' :
                      'border-pink-400/30 text-pink-200'
                    }`}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
