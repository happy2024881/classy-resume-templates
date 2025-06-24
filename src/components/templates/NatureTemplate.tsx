
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const NatureTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-gray-800 relative overflow-hidden">
      {/* Nature-inspired background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-200/20 to-green-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-emerald-300/10 to-green-300/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-8 border border-green-200/50 shadow-lg">
            <h1 className="text-4xl font-bold mb-4 text-green-800">{data.personalInfo.fullName}</h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-700">
              <span className="bg-green-100/80 px-4 py-2 rounded-full border border-green-200 flex items-center">
                <span className="text-lg mr-2">🌿</span>
                {data.personalInfo.email}
              </span>
              <span className="bg-green-100/80 px-4 py-2 rounded-full border border-green-200 flex items-center">
                <span className="text-lg mr-2">🍃</span>
                {data.personalInfo.phone}
              </span>
              <span className="bg-green-100/80 px-4 py-2 rounded-full border border-green-200 flex items-center">
                <span className="text-lg mr-2">🌳</span>
                {data.personalInfo.location}
              </span>
            </div>
            {(data.personalInfo.linkedIn || data.personalInfo.website) && (
              <div className="flex flex-wrap justify-center gap-4 text-sm text-green-700 mt-3">
                {data.personalInfo.linkedIn && (
                  <span className="bg-green-100/80 px-4 py-2 rounded-full border border-green-200 flex items-center">
                    <span className="text-lg mr-2">🌱</span>
                    {data.personalInfo.linkedIn}
                  </span>
                )}
                {data.personalInfo.website && (
                  <span className="bg-green-100/80 px-4 py-2 rounded-full border border-green-200 flex items-center">
                    <span className="text-lg mr-2">🌺</span>
                    {data.personalInfo.website}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-8">
            <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-6 border border-green-200/50 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-green-800 flex items-center">
                <span className="text-3xl mr-3">🌸</span>
                About Me
              </h2>
              <p className="text-sm leading-relaxed text-green-700">{data.personalInfo.summary}</p>
            </div>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-green-800 flex items-center justify-center">
              <span className="text-3xl mr-3">🌿</span>
              Growth Journey
            </h2>
            {data.experience.map((exp, index) => (
              <div key={exp.id} className="mb-6">
                <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-6 border border-green-200/50 shadow-lg relative">
                  <div className={`absolute top-0 left-0 w-full h-2 rounded-t-3xl bg-gradient-to-r ${
                    index % 3 === 0 ? 'from-green-400 to-emerald-400' :
                    index % 3 === 1 ? 'from-emerald-400 to-teal-400' :
                    'from-teal-400 to-green-400'
                  }`}></div>
                  <div className="pt-2">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-green-800">{exp.jobTitle}</h3>
                      <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full border border-green-200">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <div className="text-green-600 font-semibold mb-3 flex items-center">
                      <span className="text-lg mr-2">🏢</span>
                      {exp.company} • {exp.location}
                    </div>
                    {exp.description && (
                      <p className="text-sm leading-relaxed text-green-700">{exp.description}</p>
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
            <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-6 border border-green-200/50 shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-green-800 flex items-center">
                <span className="text-2xl mr-3">🎓</span>
                Education
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4 p-4 bg-green-50/80 rounded-2xl border border-green-200/50">
                  <h3 className="font-bold text-green-800">{edu.degree}</h3>
                  <div className="text-sm text-green-600">{edu.school}</div>
                  <div className="text-sm text-green-600">{edu.location} • {edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-green-600">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-6 border border-green-200/50 shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-green-800 flex items-center">
                <span className="text-2xl mr-3">🌟</span>
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span key={skill.id} className={`px-3 py-1 rounded-full text-sm font-medium border ${
                    index % 3 === 0 ? 'bg-green-100 text-green-800 border-green-200' :
                    index % 3 === 1 ? 'bg-emerald-100 text-emerald-800 border-emerald-200' :
                    'bg-teal-100 text-teal-800 border-teal-200'
                  }`}>
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
