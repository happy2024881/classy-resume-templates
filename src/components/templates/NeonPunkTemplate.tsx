
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const NeonPunkTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-black p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-green-400 font-mono relative">
      {/* Neon grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({length: 400}).map((_, i) => (
            <div key={i} className="border border-green-400/20"></div>
          ))}
        </div>
      </div>
      
      {/* Header */}
      <div className="border-2 border-green-400 rounded-lg p-6 mb-6 bg-black/80 shadow-lg shadow-green-400/20 relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-3 text-green-300 filter drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
              {data.personalInfo.fullName}
            </h1>
            <div className="text-sm space-y-1 text-green-400">
              <div className="flex items-center"><span className="mr-2 text-pink-400">&gt;</span>{data.personalInfo.email}</div>
              <div className="flex items-center"><span className="mr-2 text-pink-400">&gt;</span>{data.personalInfo.phone}</div>
              <div className="flex items-center"><span className="mr-2 text-pink-400">&gt;</span>{data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div className="flex items-center"><span className="mr-2 text-pink-400">&gt;</span>{data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div className="flex items-center"><span className="mr-2 text-pink-400">&gt;</span>{data.personalInfo.website}</div>}
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded object-cover border-2 border-green-400 shadow-lg shadow-green-400/30"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6 relative z-10">
          <h2 className="text-2xl font-bold mb-3 text-pink-400 flex items-center filter drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]">
            <span className="mr-2">[INIT]</span>About Me
          </h2>
          <div className="border border-green-400/50 rounded-lg p-4 bg-black/60">
            <p className="text-sm leading-relaxed text-green-300">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6 relative z-10">
        {/* Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4 text-pink-400 flex items-center filter drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]">
                <span className="mr-2">[EXP]</span>Experience
              </h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="border border-green-400/50 rounded-lg p-4 mb-4 bg-black/60">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-green-300">{exp.jobTitle}</h3>
                    <span className="text-sm bg-pink-400/20 border border-pink-400/50 px-3 py-1 rounded text-pink-300">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="font-semibold mb-2 text-cyan-400">{exp.company} • {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-green-400">{exp.description}</p>
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
              <h2 className="text-xl font-bold mb-4 text-pink-400 flex items-center filter drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]">
                <span className="mr-2">[EDU]</span>Education
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="border border-green-400/50 rounded-lg p-4 mb-4 bg-black/60">
                  <h3 className="font-bold text-green-300">{edu.degree}</h3>
                  <div className="text-sm text-cyan-400">{edu.school}</div>
                  <div className="text-sm text-green-400">{edu.location}</div>
                  <div className="text-sm text-green-400">{edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-green-400">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-pink-400 flex items-center filter drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]">
                <span className="mr-2">[SKL]</span>Skills
              </h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="border border-green-400/50 rounded-lg p-3 bg-black/60">
                    <div className="flex justify-between">
                      <span className="font-medium text-green-300">{skill.name}</span>
                      <span className="text-sm bg-pink-400/20 border border-pink-400/50 px-2 py-1 rounded text-pink-300">
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

      {/* Terminal cursor */}
      <div className="mt-6 text-green-400 relative z-10">
        <span className="text-pink-400">user@cyberpunk:~$ </span>
        <span className="animate-pulse">_</span>
      </div>
    </div>
  );
};
