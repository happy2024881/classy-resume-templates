
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const OceanTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-white relative overflow-hidden">
      {/* Ocean wave patterns */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,20 Q25,10 50,20 T100,20 L100,0 L0,0 Z" fill="currentColor"/>
          <path d="M0,40 Q25,30 50,40 T100,40 L100,0 L0,0 Z" fill="currentColor" opacity="0.5"/>
          <path d="M0,60 Q25,50 50,60 T100,60 L100,0 L0,0 Z" fill="currentColor" opacity="0.3"/>
        </svg>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-400/20 rounded-full blur-lg animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-12 h-12 bg-teal-400/20 rounded-full blur-md animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-blue-400/20 rounded-full blur-sm animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl">
            <h1 className="text-5xl font-bold mb-6 text-cyan-100 drop-shadow-lg">{data.personalInfo.fullName}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-3 border border-white/20 flex items-center justify-center">
                <span className="text-2xl mr-2">🌊</span>
                {data.personalInfo.email}
              </div>
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-3 border border-white/20 flex items-center justify-center">
                <span className="text-2xl mr-2">🐚</span>
                {data.personalInfo.phone}
              </div>
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-3 border border-white/20 flex items-center justify-center">
                <span className="text-2xl mr-2">🏝️</span>
                {data.personalInfo.location}
              </div>
            </div>
            {(data.personalInfo.linkedIn || data.personalInfo.website) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4">
                {data.personalInfo.linkedIn && (
                  <div className="backdrop-blur-md bg-white/10 rounded-2xl p-3 border border-white/20 flex items-center justify-center">
                    <span className="text-2xl mr-2">🐟</span>
                    {data.personalInfo.linkedIn}
                  </div>
                )}
                {data.personalInfo.website && (
                  <div className="backdrop-blur-md bg-white/10 rounded-2xl p-3 border border-white/20 flex items-center justify-center">
                    <span className="text-2xl mr-2">🔱</span>
                    {data.personalInfo.website}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-8">
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-cyan-200 flex items-center">
                <span className="text-3xl mr-3">🌊</span>
                About Me
              </h2>
              <p className="text-sm leading-relaxed text-blue-100">{data.personalInfo.summary}</p>
            </div>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-cyan-200 flex items-center justify-center">
              <span className="text-3xl mr-3">⚓</span>
              Career Voyage
            </h2>
            {data.experience.map((exp, index) => (
              <div key={exp.id} className="mb-6">
                <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20 shadow-xl relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${
                    index % 3 === 0 ? 'from-cyan-400 to-blue-400' :
                    index % 3 === 1 ? 'from-blue-400 to-teal-400' :
                    'from-teal-400 to-cyan-400'
                  }`}></div>
                  <div className="pt-2">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-cyan-100">{exp.jobTitle}</h3>
                      <span className="text-sm backdrop-blur-md bg-white/20 rounded-full px-4 py-2 border border-white/20">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <div className="text-teal-200 font-semibold mb-3 flex items-center">
                      <span className="text-xl mr-2">🏢</span>
                      {exp.company} • {exp.location}
                    </div>
                    {exp.description && (
                      <p className="text-sm leading-relaxed text-blue-100">{exp.description}</p>
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
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20 shadow-xl">
              <h2 className="text-xl font-bold mb-4 text-cyan-200 flex items-center">
                <span className="text-2xl mr-3">🎓</span>
                Education
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4 p-4 backdrop-blur-md bg-white/5 rounded-2xl border border-white/10">
                  <h3 className="font-bold text-cyan-100">{edu.degree}</h3>
                  <div className="text-sm text-teal-200">{edu.school}</div>
                  <div className="text-sm text-blue-200">{edu.location} • {edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-blue-200">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20 shadow-xl">
              <h2 className="text-xl font-bold mb-4 text-cyan-200 flex items-center">
                <span className="text-2xl mr-3">⚡</span>
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span key={skill.id} className={`backdrop-blur-md bg-white/15 border border-white/20 px-3 py-1 rounded-full text-sm font-medium ${
                    index % 3 === 0 ? 'text-cyan-200' :
                    index % 3 === 1 ? 'text-teal-200' :
                    'text-blue-200'
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
