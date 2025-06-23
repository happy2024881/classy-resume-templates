
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const NeonCityTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gray-900 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-white relative overflow-hidden">
      {/* Neon Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Header */}
      <div className="relative bg-black/50 border border-cyan-400 p-6 mb-6 rounded-lg shadow-[0_0_20px_rgba(0,255,255,0.3)]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
              {data.personalInfo.fullName}
            </h1>
            <div className="text-sm space-y-1 text-green-400">
              <div className="flex items-center"><span className="mr-2 text-cyan-400">▸</span>{data.personalInfo.email}</div>
              <div className="flex items-center"><span className="mr-2 text-cyan-400">▸</span>{data.personalInfo.phone}</div>
              <div className="flex items-center"><span className="mr-2 text-cyan-400">▸</span>{data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div className="flex items-center"><span className="mr-2 text-cyan-400">▸</span>{data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div className="flex items-center"><span className="mr-2 text-cyan-400">▸</span>{data.personalInfo.website}</div>}
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded object-cover border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.5)]"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="relative mb-6">
          <h2 className="text-2xl font-bold mb-3 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]">
            &gt; PROFILE.exe
          </h2>
          <div className="bg-black/50 border border-purple-400 p-4 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <p className="text-sm leading-relaxed text-green-300 font-mono">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6 relative">
        {/* Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4 text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.7)]">
                &gt; EXPERIENCE.log
              </h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="bg-black/50 border border-orange-400 p-4 mb-4 rounded-lg shadow-[0_0_15px_rgba(251,146,60,0.3)]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-cyan-300">{exp.jobTitle}</h3>
                    <span className="text-sm bg-orange-500/20 border border-orange-400 px-3 py-1 rounded text-orange-300">
                      {exp.startDate} - {exp.current ? 'ACTIVE' : exp.endDate}
                    </span>
                  </div>
                  <div className="font-semibold mb-2 text-purple-300">{exp.company} • {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-green-200 font-mono">{exp.description}</p>
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
              <h2 className="text-xl font-bold mb-4 text-pink-400 drop-shadow-[0_0_10px_rgba(244,114,182,0.7)]">
                &gt; EDUCATION.db
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="bg-black/50 border border-pink-400 p-4 mb-4 rounded-lg shadow-[0_0_15px_rgba(244,114,182,0.3)]">
                  <h3 className="font-bold text-cyan-300">{edu.degree}</h3>
                  <div className="text-sm text-pink-300">{edu.school}</div>
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
              <h2 className="text-xl font-bold mb-4 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.7)]">
                &gt; SKILLS.cfg
              </h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="bg-black/50 border border-yellow-400 p-3 rounded-lg shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                    <div className="flex justify-between">
                      <span className="font-medium text-cyan-300 font-mono">{skill.name}</span>
                      <span className="text-sm bg-yellow-500/20 border border-yellow-400 px-2 py-1 rounded text-yellow-300">
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
