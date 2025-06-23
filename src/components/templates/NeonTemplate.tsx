
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const NeonTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-black text-cyan-400 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg font-mono">
      {/* Header */}
      <div className="border-2 border-cyan-400 p-6 mb-6 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-pink-400 animate-pulse">{data.personalInfo.fullName}</h1>
            <div className="text-sm space-y-1">
              <div className="text-green-400">{data.personalInfo.email}</div>
              <div className="text-yellow-400">{data.personalInfo.phone}</div>
              <div className="text-purple-400">{data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div className="text-blue-400">{data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div className="text-orange-400">{data.personalInfo.website}</div>}
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded object-cover border-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-pink-400 mb-3 border-b border-cyan-400 pb-1">SYSTEM_INFO</h2>
          <div className="border border-cyan-400 p-4 bg-gray-900/50">
            <p className="text-sm leading-relaxed text-green-300">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="col-span-2">
            <h2 className="text-lg font-bold text-pink-400 mb-4 border-b border-cyan-400 pb-1">WORK_HISTORY.exe</h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="border border-cyan-400 p-4 mb-4 bg-gray-900/30">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-yellow-400">{exp.jobTitle}</h3>
                  <span className="text-xs text-green-400 bg-black px-2 py-1 border border-green-400">
                    {exp.startDate} - {exp.current ? 'ACTIVE' : exp.endDate}
                  </span>
                </div>
                <div className="text-purple-400 mb-2">{exp.company} @ {exp.location}</div>
                {exp.description && (
                  <p className="text-xs leading-relaxed text-cyan-300">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-pink-400 mb-4 border-b border-cyan-400 pb-1">EDUCATION.log</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="border border-cyan-400 p-3 mb-3 bg-gray-900/30">
                <h3 className="font-bold text-yellow-400 text-sm">{edu.degree}</h3>
                <div className="text-xs text-purple-400">{edu.school}</div>
                <div className="text-xs text-green-400">{edu.location} • {edu.graduationDate}</div>
                {edu.gpa && <div className="text-xs text-orange-400">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-pink-400 mb-4 border-b border-cyan-400 pb-1">SKILLS.dll</h2>
            <div className="space-y-2">
              {data.skills.map((skill) => (
                <div key={skill.id} className="border border-cyan-400 p-2 bg-gray-900/30">
                  <div className="flex justify-between text-xs">
                    <span className="text-yellow-400">{skill.name}</span>
                    <span className="text-green-400">[{skill.level}]</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 text-cyan-400 text-xs">
        <span>root@resume:~$ </span>
        <span className="animate-pulse">█</span>
      </div>
    </div>
  );
};
