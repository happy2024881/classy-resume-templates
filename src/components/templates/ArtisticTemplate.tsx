
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const ArtisticTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-white relative overflow-hidden">
      {/* Artistic background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl blur-sm"></div>
          <div className="relative backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/20">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              {data.personalInfo.fullName}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                {data.personalInfo.email}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                {data.personalInfo.phone}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                {data.personalInfo.location}
              </span>
            </div>
            {(data.personalInfo.linkedIn || data.personalInfo.website) && (
              <div className="flex flex-wrap justify-center gap-4 text-sm mt-3">
                {data.personalInfo.linkedIn && (
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                    {data.personalInfo.linkedIn}
                  </span>
                )}
                {data.personalInfo.website && (
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
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
            <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Creative Vision
              </h2>
              <p className="text-sm leading-relaxed text-gray-100">{data.personalInfo.summary}</p>
            </div>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Experience Journey
            </h2>
            {data.experience.map((exp, index) => (
              <div key={exp.id} className="mb-6">
                <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-6 border border-white/20 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                    index % 3 === 0 ? 'from-pink-400 to-yellow-400' :
                    index % 3 === 1 ? 'from-blue-400 to-purple-400' :
                    'from-green-400 to-cyan-400'
                  }`}></div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-white">{exp.jobTitle}</h3>
                    <span className="text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-cyan-300 font-semibold mb-3">{exp.company} • {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-gray-200">{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 gap-6">
          {/* Education */}
          {data.education.length > 0 && (
            <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-6 border border-white/20">
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Education
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="font-bold text-white">{edu.degree}</h3>
                  <div className="text-sm text-cyan-300">{edu.school}</div>
                  <div className="text-sm text-gray-300">{edu.location} • {edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-gray-300">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-6 border border-white/20">
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span key={skill.id} className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${
                    index % 4 === 0 ? 'from-pink-500 to-rose-500' :
                    index % 4 === 1 ? 'from-blue-500 to-cyan-500' :
                    index % 4 === 2 ? 'from-green-500 to-teal-500' :
                    'from-purple-500 to-indigo-500'
                  } text-white`}>
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
