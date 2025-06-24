
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const NeonCityTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gray-900 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-green-400 relative overflow-hidden font-mono">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-16 h-full w-full">
          {Array.from({ length: 192 }).map((_, i) => (
            <div key={i} className="border border-green-400"></div>
          ))}
        </div>
      </div>
      
      {/* Neon glow effects */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-500/20 rounded-full blur-lg"></div>
      <div className="absolute top-1/2 left-1/2 w-40 h-2 bg-green-400/30 blur-sm transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative z-10">
        {/* Terminal Header */}
        <div className="border-2 border-green-400 rounded-lg p-6 mb-6 bg-black/80 shadow-lg shadow-green-400/20">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-green-400 text-xs ml-4 opacity-70">RESUME.EXE</div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-cyan-400 tracking-wider shadow-lg">
              {data.personalInfo.fullName.toUpperCase()}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
              <div className="text-green-400">{'>'} {data.personalInfo.email}</div>
              <div className="text-green-400">{'>'} {data.personalInfo.phone}</div>
              <div className="text-green-400">{'>'} {data.personalInfo.location}</div>
            </div>
            {(data.personalInfo.linkedIn || data.personalInfo.website) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mt-2">
                {data.personalInfo.linkedIn && (
                  <div className="text-cyan-400">{'>'} {data.personalInfo.linkedIn}</div>
                )}
                {data.personalInfo.website && (
                  <div className="text-cyan-400">{'>'} {data.personalInfo.website}</div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Summary Terminal */}
        {data.personalInfo.summary && (
          <div className="border-2 border-cyan-400 rounded-lg p-6 mb-6 bg-black/80 shadow-lg shadow-cyan-400/20">
            <h2 className="text-xl font-bold mb-4 text-cyan-400 flex items-center">
              <span className="mr-3">[ABOUT]</span>
              <div className="flex-1 h-px bg-cyan-400"></div>
            </h2>
            <p className="text-sm leading-relaxed text-green-300 font-light">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience Terminal */}
        {data.experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 text-pink-400 flex items-center">
              <span className="mr-3">[EXPERIENCE_LOG]</span>
              <div className="flex-1 h-px bg-pink-400"></div>
            </h2>
            {data.experience.map((exp, index) => (
              <div key={exp.id} className="border border-pink-400 rounded-lg p-4 mb-4 bg-black/60 shadow-lg shadow-pink-400/10">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-pink-300">{'>'} {exp.jobTitle}</h3>
                  <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-400">
                    {exp.startDate} - {exp.current ? 'ACTIVE' : exp.endDate}
                  </span>
                </div>
                <div className="text-cyan-300 text-sm mb-3">@ {exp.company} | {exp.location}</div>
                {exp.description && (
                  <p className="text-sm leading-relaxed text-green-300 font-light border-l-2 border-green-400 pl-4">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 gap-6">
          {/* Education Terminal */}
          {data.education.length > 0 && (
            <div className="border-2 border-yellow-400 rounded-lg p-6 bg-black/80 shadow-lg shadow-yellow-400/20">
              <h2 className="text-lg font-bold mb-4 text-yellow-400 flex items-center">
                <span className="mr-2">[EDU]</span>
                <div className="flex-1 h-px bg-yellow-400"></div>
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4 border-l-2 border-yellow-400 pl-4">
                  <h3 className="font-bold text-yellow-300">{'>'} {edu.degree}</h3>
                  <div className="text-sm text-cyan-300">{edu.school}</div>
                  <div className="text-sm text-green-300">{edu.location} | {edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-green-300">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills Terminal */}
          {data.skills.length > 0 && (
            <div className="border-2 border-purple-400 rounded-lg p-6 bg-black/80 shadow-lg shadow-purple-400/20">
              <h2 className="text-lg font-bold mb-4 text-purple-400 flex items-center">
                <span className="mr-2">[SKILLS]</span>
                <div className="flex-1 h-px bg-purple-400"></div>
              </h2>
              <div className="space-y-2">
                {data.skills.map((skill, index) => (
                  <div key={skill.id} className="flex justify-between items-center">
                    <span className="text-sm text-purple-300">{'>'} {skill.name}</span>
                    <span className={`text-xs px-2 py-1 rounded border ${
                      skill.level === 'Expert' ? 'text-red-400 border-red-400 bg-red-400/10' :
                      skill.level === 'Advanced' ? 'text-yellow-400 border-yellow-400 bg-yellow-400/10' :
                      skill.level === 'Intermediate' ? 'text-blue-400 border-blue-400 bg-blue-400/10' :
                      'text-green-400 border-green-400 bg-green-400/10'
                    }`}>
                      {skill.level.toUpperCase()}
                    </span>
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
