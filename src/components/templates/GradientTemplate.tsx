
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const GradientTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-white">
      {/* Header */}
      <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              {data.personalInfo.fullName}
            </h1>
            <div className="text-sm space-y-1 text-cyan-100">
              <div>📧 {data.personalInfo.email}</div>
              <div>📱 {data.personalInfo.phone}</div>
              <div>📍 {data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div>💼 {data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div>🌐 {data.personalInfo.website}</div>}
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
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-3 text-cyan-100">✨ About Me</h2>
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/20">
            <p className="text-sm leading-relaxed">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6">
        {/* Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4 text-cyan-100">🚀 Experience</h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="bg-white/20 backdrop-blur-md rounded-xl p-4 mb-4 border border-white/20">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-white">{exp.jobTitle}</h3>
                    <span className="text-sm bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1 rounded-full font-semibold text-white">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="font-semibold mb-2 text-cyan-200">{exp.company} • {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-white/90">{exp.description}</p>
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
              <h2 className="text-xl font-bold mb-4 text-cyan-100">🎓 Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="bg-white/20 backdrop-blur-md rounded-xl p-4 mb-4 border border-white/20">
                  <h3 className="font-bold text-white">{edu.degree}</h3>
                  <div className="text-sm text-cyan-200">{edu.school}</div>
                  <div className="text-sm text-white/80">{edu.location}</div>
                  <div className="text-sm text-white/80">{edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-white/80">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-cyan-100">⚡ Skills</h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="bg-white/20 backdrop-blur-md rounded-lg p-3 border border-white/20">
                    <div className="flex justify-between">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm bg-gradient-to-r from-cyan-400 to-blue-500 px-2 py-1 rounded font-semibold text-white">
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
