
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const GalacticTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-black p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-white relative overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 left-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
      </div>

      {/* Header */}
      <div className="relative bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-lg rounded-3xl p-6 mb-6 border border-purple-400/50 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text drop-shadow-lg">
              {data.personalInfo.fullName}
            </h1>
            <div className="text-sm space-y-1 text-purple-200">
              <div className="flex items-center"><span className="mr-2">🚀</span>{data.personalInfo.email}</div>
              <div className="flex items-center"><span className="mr-2">🌌</span>{data.personalInfo.phone}</div>
              <div className="flex items-center"><span className="mr-2">🪐</span>{data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div className="flex items-center"><span className="mr-2">⭐</span>{data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div className="flex items-center"><span className="mr-2">🌟</span>{data.personalInfo.website}</div>}
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="relative mb-6">
          <h2 className="text-2xl font-bold mb-3 text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text flex items-center">
            <span className="mr-2">🌠</span>Mission Statement
          </h2>
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-4 border border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <p className="text-sm leading-relaxed text-blue-100">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6 relative">
        {/* Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text flex items-center">
                <span className="mr-2">🛸</span>Space Missions
              </h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-lg rounded-2xl p-4 mb-4 border border-orange-400/50 shadow-[0_0_20px_rgba(251,146,60,0.3)]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-orange-200">{exp.jobTitle}</h3>
                    <span className="text-sm bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 rounded-full text-white shadow-lg">
                      {exp.startDate} - {exp.current ? 'Active' : exp.endDate}
                    </span>
                  </div>
                  <div className="font-semibold mb-2 text-red-200">{exp.company} • {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-orange-100">{exp.description}</p>
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
              <h2 className="text-xl font-bold mb-4 text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text flex items-center">
                <span className="mr-2">🎓</span>Academy Training
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-lg rounded-2xl p-4 mb-4 border border-green-400/50 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  <h3 className="font-bold text-green-200">{edu.degree}</h3>
                  <div className="text-sm text-emerald-200">{edu.school}</div>
                  <div className="text-sm text-green-300">{edu.location}</div>
                  <div className="text-sm text-green-300">{edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-green-300">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text flex items-center">
                <span className="mr-2">⚡</span>Power Levels
              </h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-3 border border-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                    <div className="flex justify-between">
                      <span className="font-medium text-yellow-200">{skill.name}</span>
                      <span className="text-sm bg-gradient-to-r from-yellow-500 to-orange-500 px-2 py-1 rounded-full text-white shadow-lg">
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
