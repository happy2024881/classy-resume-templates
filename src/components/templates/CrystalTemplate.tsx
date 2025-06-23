
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const CrystalTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-slate-100 to-blue-100 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-slate-800 relative overflow-hidden">
      {/* Crystal Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 transform rotate-45 translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 transform rotate-12 -translate-x-12 translate-y-12"></div>

      {/* Header */}
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-lg border border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent">
              {data.personalInfo.fullName}
            </h1>
            <div className="text-sm space-y-1 text-slate-600">
              <div className="flex items-center"><span className="mr-2 text-blue-500">💎</span>{data.personalInfo.email}</div>
              <div className="flex items-center"><span className="mr-2 text-purple-500">💎</span>{data.personalInfo.phone}</div>
              <div className="flex items-center"><span className="mr-2 text-cyan-500">💎</span>{data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div className="flex items-center"><span className="mr-2 text-indigo-500">💎</span>{data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div className="flex items-center"><span className="mr-2 text-violet-500">💎</span>{data.personalInfo.website}</div>}
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded-2xl object-cover border-4 border-gradient-to-r from-blue-300 to-purple-300 shadow-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="relative mb-6">
          <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center">
            <span className="mr-2">✨</span>Profile
          </h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md border border-slate-200">
            <p className="text-sm leading-relaxed text-slate-700">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6 relative">
        {/* Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center">
                <span className="mr-2">🔮</span>Experience
              </h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 mb-4 shadow-md border border-slate-200 relative">
                  <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-slate-800">{exp.jobTitle}</h3>
                    <span className="text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full shadow-sm">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="font-semibold mb-2 text-purple-600">{exp.company} • {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-slate-700">{exp.description}</p>
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
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent flex items-center">
                <span className="mr-2">🎓</span>Education
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 mb-4 shadow-md border border-slate-200 relative">
                  <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                  <h3 className="font-bold text-slate-800">{edu.degree}</h3>
                  <div className="text-sm text-cyan-600">{edu.school}</div>
                  <div className="text-sm text-slate-600">{edu.location}</div>
                  <div className="text-sm text-slate-600">{edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-slate-600">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent flex items-center">
                <span className="mr-2">⚡</span>Skills
              </h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-md border border-slate-200 relative">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-800">{skill.name}</span>
                      <span className="text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-2 py-1 rounded-full shadow-sm">
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
