
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const TechTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gray-900 text-green-400 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg font-mono">
      {/* Header */}
      <div className="border border-green-400 p-4 mb-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">{data.personalInfo.fullName}</h1>
          <div className="text-sm text-green-300">
            <div>{data.personalInfo.email} | {data.personalInfo.phone}</div>
            <div>{data.personalInfo.location}</div>
            {data.personalInfo.linkedIn && <div>{data.personalInfo.linkedIn}</div>}
            {data.personalInfo.website && <div>{data.personalInfo.website}</div>}
          </div>
        </div>
      </div>

      {/* About */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-green-400 mb-2">{'>'} whoami</h2>
          <div className="border-l-2 border-green-400 pl-4 text-sm leading-relaxed text-green-300">
            {data.personalInfo.summary}
          </div>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-green-400 mb-2">{'>'} work_history --verbose</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4 border-l-2 border-green-400 pl-4">
              <div className="text-green-300">
                <div className="flex justify-between">
                  <span className="font-bold">{exp.jobTitle} @ {exp.company}</span>
                  <span className="text-sm">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <div className="text-sm text-green-500">{exp.location}</div>
                {exp.description && (
                  <div className="text-sm mt-2 text-green-200">{exp.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-green-400 mb-2">{'>'} skills --list</h2>
            <div className="space-y-2">
              {data.skills.map((skill) => (
                <div key={skill.id} className="text-sm border-l-2 border-green-400 pl-4">
                  <span className="text-green-300">{skill.name}</span>
                  <span className="text-green-500 ml-2">[{skill.level}]</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-green-400 mb-2">{'>'} education.log</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-3 border-l-2 border-green-400 pl-4 text-sm">
                <div className="text-green-300 font-bold">{edu.degree}</div>
                <div className="text-green-500">{edu.school}</div>
                <div className="text-green-600">{edu.location} | {edu.graduationDate}</div>
                {edu.gpa && <div className="text-green-600">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Terminal prompt */}
      <div className="mt-6 text-green-400">
        <span>user@resume:~$ </span>
        <span className="animate-pulse">_</span>
      </div>
    </div>
  );
};
